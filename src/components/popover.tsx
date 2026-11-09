import {
  FloatingPortal,
  arrow,
  autoUpdate,
  flip,
  offset,
  safePolygon,
  shift,
  useClick,
  useDismiss,
  useFloating,
  useFocus,
  useHover,
  useInteractions,
  useMergeRefs,
  useRole,
  type Placement,
} from '@floating-ui/react';
import clsx from 'clsx';
import {
  cloneElement,
  useCallback,
  useState,
  useSyncExternalStore,
  type CSSProperties,
  type ElementType,
  type ReactElement,
  type ReactNode,
  type Ref,
  type RefCallback,
} from 'react';

import type { Breakpoint, Responsive } from '../types';
import { Box } from './box';
import type { BoxProps } from './box';

export type PopoverPlacement = 'top' | 'right' | 'bottom' | 'left' | 'end' | 'start';
export type PopoverTrigger = 'click' | 'hover' | 'focus';

const defaultTriggers: PopoverTrigger[] = ['click'];
const breakpointNames: readonly Breakpoint[] = ['xs', 'sm', 'md', 'lg', 'xl', '2xl'];
const breakpointWidths: ReadonlyArray<readonly [Breakpoint, number]> = [
  ['xs', 0],
  ['sm', 576],
  ['md', 768],
  ['lg', 1024],
  ['xl', 1280],
  ['2xl', 1536],
];
const breakpointSubscribers = new Set<() => void>();

function getFloatingPlacement(placement: PopoverPlacement): Placement {
  if (placement === 'start') {
    return 'left';
  }

  if (placement === 'end') {
    return 'right';
  }

  return placement;
}

function getPopoverPlacement(placement: Placement): PopoverPlacement {
  const side = placement.split('-')[0];

  if (side === 'left') {
    return 'start';
  }

  if (side === 'right') {
    return 'end';
  }

  return side as PopoverPlacement;
}

function getViewportBreakpoint(): Breakpoint {
  const width = globalThis.window === undefined ? 0 : globalThis.window.innerWidth;
  let currentBreakpoint: Breakpoint = 'xs';

  for (const [breakpoint, minWidth] of breakpointWidths) {
    if (width >= minWidth) {
      currentBreakpoint = breakpoint;
    }
  }

  return currentBreakpoint;
}

function getServerViewportBreakpoint(): Breakpoint {
  return 'xs';
}

function notifyBreakpointSubscribers() {
  for (const subscriber of breakpointSubscribers) {
    subscriber();
  }
}

function subscribeToBreakpoint(subscriber: () => void) {
  if (globalThis.window === undefined) {
    return () => {};
  }

  breakpointSubscribers.add(subscriber);

  if (breakpointSubscribers.size === 1) {
    globalThis.window.addEventListener('resize', notifyBreakpointSubscribers);
  }

  return () => {
    breakpointSubscribers.delete(subscriber);

    if (breakpointSubscribers.size === 0) {
      globalThis.window.removeEventListener('resize', notifyBreakpointSubscribers);
    }
  };
}

function resolvePlacement(
  placement: Responsive<PopoverPlacement>,
  breakpoint: Breakpoint,
): PopoverPlacement {
  if (typeof placement === 'string') {
    return placement;
  }

  const currentIndex = breakpointNames.indexOf(breakpoint);

  for (let index = currentIndex; index >= 0; index--) {
    const name = breakpointNames[index];
    const value = name ? placement[name] : undefined;

    if (value) {
      return value;
    }
  }

  return 'right';
}

function isReactRef(value: unknown): value is Ref<unknown> {
  return (
    typeof value === 'function' ||
    (typeof value === 'object' && value !== null && 'current' in value)
  );
}

function getTriggerRef(trigger: ReactElement<{ ref?: Ref<unknown> }>): Ref<unknown> | undefined {
  if (trigger.props.ref) {
    return trigger.props.ref;
  }

  const legacyRef: unknown = Object.getOwnPropertyDescriptor(trigger, 'ref')?.value;

  return isReactRef(legacyRef) ? legacyRef : undefined;
}

type PopoverOwnProps = {
  container?: HTMLElement | null | undefined;
  delay?: number | { close?: number; open?: number } | undefined;
  instant?: boolean | undefined;
  onShowChange?: ((show: boolean) => void) | undefined;
  placement?: Responsive<PopoverPlacement> | undefined;
  show?: boolean | undefined;
  trigger?: ReactElement<{ ref?: Ref<unknown> }> | undefined;
  triggers?: PopoverTrigger[] | undefined;
};

export type PopoverProps<C extends ElementType = 'div'> = Omit<BoxProps<C>, keyof PopoverOwnProps> &
  PopoverOwnProps;

export function Popover<C extends ElementType = 'div'>({
  component,
  className,
  container,
  delay,
  instant,
  placement = 'right',
  onShowChange,
  show,
  trigger,
  triggers,
  children,
  ...props
}: PopoverProps<C>) {
  if (trigger) {
    return (
      <InteractivePopover<C>
        boxProps={props as BoxProps<C>}
        className={className}
        component={component}
        container={container}
        delay={delay}
        instant={instant}
        onShowChange={onShowChange}
        placement={placement}
        show={show}
        trigger={trigger}
        triggers={triggers}
      >
        {children}
      </InteractivePopover>
    );
  }

  const surfacePlacement = getPopoverPlacement(
    getFloatingPlacement(typeof placement === 'string' ? placement : (placement.xs ?? 'right')),
  );

  return (
    <Box<C>
      {...(props as BoxProps<C>)}
      component={component ?? ('div' as C)}
      classNameBefore={clsx(
        'popover',
        `bs-popover-${surfacePlacement}`,
        instant && 'popover-instant',
        show && 'show',
        props.classNameBefore,
      )}
      className={className}
    >
      {children}
    </Box>
  );
}

type InteractivePopoverProps<C extends ElementType> = {
  boxProps: BoxProps<C>;
  className?: string | undefined;
  component?: C | undefined;
  container?: HTMLElement | null | undefined;
  delay?: number | { close?: number; open?: number } | undefined;
  instant?: boolean | undefined;
  onShowChange?: ((show: boolean) => void) | undefined;
  placement: Responsive<PopoverPlacement>;
  show?: boolean | undefined;
  trigger: ReactElement<{ ref?: Ref<unknown> }>;
  triggers?: PopoverTrigger[] | undefined;
  children?: ReactNode;
};

function InteractivePopover<C extends ElementType = 'div'>({
  boxProps,
  component,
  className,
  container,
  delay = 0,
  instant,
  onShowChange,
  placement,
  show,
  trigger,
  triggers = defaultTriggers,
  children,
}: InteractivePopoverProps<C>) {
  const customStyle = Reflect.get(boxProps, 'style') as CSSProperties | undefined;
  const [uncontrolledShow, setUncontrolledShow] = useState(false);
  const isControlled = show !== undefined;
  const hasContent =
    children !== null && children !== undefined && children !== false && children !== '';
  const open = (isControlled ? show : uncontrolledShow) && hasContent;
  const viewportBreakpoint = useSyncExternalStore(
    subscribeToBreakpoint,
    getViewportBreakpoint,
    getServerViewportBreakpoint,
  );
  const resolvedPlacement = resolvePlacement(placement, viewportBreakpoint);
  const [arrowElement, setArrowElement] = useState<HTMLDivElement>();
  const setArrowRef = useCallback<RefCallback<HTMLDivElement>>(
    (element) => setArrowElement(element ?? undefined),
    [],
  );
  const setOpen = useCallback(
    (nextShow: boolean) => {
      if (!isControlled) {
        setUncontrolledShow(nextShow);
      }

      onShowChange?.(nextShow);
    },
    [isControlled, onShowChange],
  );
  const {
    context,
    floatingStyles,
    middlewareData,
    placement: actualPlacement,
    refs: { setFloating, setReference },
  } = useFloating({
    open,
    onOpenChange: setOpen,
    placement: getFloatingPlacement(resolvedPlacement),
    middleware: [
      offset(8),
      flip(),
      shift({ padding: 8 }),
      ...(arrowElement ? [arrow({ element: arrowElement, padding: 4 })] : []),
    ],
    strategy: 'fixed',
    whileElementsMounted: autoUpdate,
  });
  const interactions = useInteractions([
    useHover(context, {
      enabled: hasContent && triggers.includes('hover'),
      move: false,
      delay,
      handleClose: safePolygon(),
    }),
    useFocus(context, {
      enabled: hasContent && triggers.includes('focus'),
    }),
    useClick(context, {
      enabled: hasContent && triggers.includes('click'),
    }),
    useDismiss(context, { enabled: hasContent, escapeKey: true }),
    useRole(context, { role: 'tooltip' }),
  ]);
  const referenceRef = useMergeRefs([setReference, getTriggerRef(trigger)]);
  const triggerProps = interactions.getReferenceProps({
    ...trigger.props,
    ref: referenceRef,
  });
  const arrowStyle: CSSProperties = {
    left: middlewareData.arrow?.x,
    position: 'absolute',
    top: middlewareData.arrow?.y,
  };
  const floatingStyleProps = {
    style: { ...floatingStyles, ...customStyle },
  };
  const surfacePlacement = getPopoverPlacement(actualPlacement);

  return (
    <>
      {cloneElement(trigger, triggerProps)}
      {open && (
        <FloatingPortal root={container ?? undefined}>
          <Box<C>
            {...(boxProps as BoxProps<C>)}
            {...floatingStyleProps}
            {...interactions.getFloatingProps()}
            ref={setFloating}
            component={component ?? ('div' as C)}
            classNameBefore={clsx(
              'popover',
              `bs-popover-${surfacePlacement}`,
              instant && 'popover-instant',
              'show',
              boxProps.classNameBefore,
            )}
            className={className}
            data-bs-placement={actualPlacement}
          >
            <div className='popover-arrow' ref={setArrowRef} style={arrowStyle} />
            {children}
          </Box>
        </FloatingPortal>
      )}
    </>
  );
}

export type PopoverHeaderProps<C extends ElementType = 'h3'> = BoxProps<C>;

export function PopoverHeader<C extends ElementType = 'h3'>({
  component,
  className,
  ...props
}: PopoverHeaderProps<C>) {
  return (
    <Box<C>
      {...(props as BoxProps<C>)}
      component={component ?? ('h3' as C)}
      classNameBefore={clsx('popover-header', props.classNameBefore)}
      className={className}
    />
  );
}

export type PopoverBodyProps<C extends ElementType = 'div'> = BoxProps<C>;

export function PopoverBody<C extends ElementType = 'div'>({
  component,
  className,
  ...props
}: PopoverBodyProps<C>) {
  return (
    <Box<C>
      {...(props as BoxProps<C>)}
      component={component ?? ('div' as C)}
      classNameBefore={clsx('popover-body', props.classNameBefore)}
      className={className}
    />
  );
}

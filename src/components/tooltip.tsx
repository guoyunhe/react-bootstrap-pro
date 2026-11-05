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
  type RefCallback,
  type ReactNode,
  type Ref,
} from 'react';

import type { BoxProps } from './box';
import { ClassedBox, type ComponentProps } from './shared';
import type { Breakpoint, Responsive } from './types';

export type TooltipTrigger = 'hover' | 'focus' | 'click';
export type TooltipPlacement = 'top' | 'right' | 'bottom' | 'left' | 'end' | 'start';

const defaultTriggers: TooltipTrigger[] = ['hover', 'focus'];
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

function getFloatingPlacement(placement: TooltipPlacement): Placement {
  if (placement === 'start') {
    return 'left';
  }

  if (placement === 'end') {
    return 'right';
  }

  return placement;
}

function getTooltipPlacement(placement: Placement) {
  const side = placement.split('-')[0];

  if (side === 'left') {
    return 'start';
  }

  if (side === 'right') {
    return 'end';
  }

  return side;
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
  placement: Responsive<TooltipPlacement>,
  breakpoint: Breakpoint,
): TooltipPlacement {
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

  return 'top';
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

export type TooltipProps<C extends ElementType = 'div'> = ComponentProps<
  C,
  {
    delay?: number | { close?: number; open?: number } | undefined;
    instant?: boolean | undefined;
    onShowChange?: ((show: boolean) => void) | undefined;
    placement?: Responsive<TooltipPlacement> | undefined;
    show?: boolean | undefined;
    trigger?: ReactElement<{ ref?: Ref<unknown> }> | undefined;
    triggers?: TooltipTrigger[] | undefined;
  }
>;

export function Tooltip<C extends ElementType = 'div'>({
  component,
  className,
  delay,
  instant,
  placement,
  onShowChange,
  show,
  trigger,
  triggers,
  children,
  ...props
}: TooltipProps<C>) {
  if (trigger) {
    return (
      <InteractiveTooltip
        boxProps={props}
        className={className}
        component={component}
        delay={delay}
        instant={instant}
        onShowChange={onShowChange}
        placement={placement}
        show={show}
        trigger={trigger}
        triggers={triggers}
      >
        {children}
      </InteractiveTooltip>
    );
  }

  return (
    <ClassedBox<C, { children?: ReactNode }>
      {...props}
      baseClass={clsx(
        'tooltip',
        typeof placement === 'string'
          ? `bs-tooltip-${placement}`
          : placement?.xs && `bs-tooltip-${placement.xs}`,
        instant && 'tooltip-instant',
        show && 'show',
      )}
      component={component}
      defaultComponent={'div' as C}
      className={className}
    >
      {children}
    </ClassedBox>
  );
}

type InteractiveTooltipProps<C extends ElementType> = {
  boxProps: object;
  className?: string | undefined;
  component?: C | undefined;
  delay?: number | { close?: number; open?: number } | undefined;
  instant?: boolean | undefined;
  onShowChange?: ((show: boolean) => void) | undefined;
  placement?: Responsive<TooltipPlacement> | undefined;
  show?: boolean | undefined;
  trigger: ReactElement<{ ref?: Ref<unknown> }>;
  triggers?: TooltipTrigger[] | undefined;
  children?: ReactNode;
};

function InteractiveTooltip<C extends ElementType = 'div'>({
  boxProps,
  component,
  className,
  delay = 0,
  instant,
  placement = 'top',
  onShowChange,
  show,
  trigger,
  triggers = defaultTriggers,
  children,
}: InteractiveTooltipProps<C>) {
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
  const floatingPlacement = getFloatingPlacement(resolvedPlacement);
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
    placement: floatingPlacement,
    middleware: [
      offset(6),
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
  const tooltipPlacement = getTooltipPlacement(actualPlacement);
  const floatingStyleProps = {
    style: { ...floatingStyles, ...customStyle },
  };

  return (
    <>
      {cloneElement(trigger, triggerProps)}
      {open && (
        <FloatingPortal>
          <ClassedBox<C, { children?: ReactNode; style?: CSSProperties }>
            {...boxProps}
            {...floatingStyleProps}
            {...interactions.getFloatingProps()}
            ref={setFloating}
            baseClass={clsx(
              'tooltip',
              `bs-tooltip-${tooltipPlacement}`,
              instant && 'tooltip-instant',
              'show',
            )}
            component={component}
            defaultComponent={'div' as C}
            className={className}
            data-bs-placement={actualPlacement}
          >
            <div className='tooltip-arrow' ref={setArrowRef} style={arrowStyle} />
            <TooltipInner>{children}</TooltipInner>
          </ClassedBox>
        </FloatingPortal>
      )}
    </>
  );
}

export type TooltipInnerProps<C extends ElementType = 'div'> = BoxProps<C>;

export function TooltipInner<C extends ElementType = 'div'>({
  component,
  className,
  ...props
}: TooltipInnerProps<C>) {
  return (
    <ClassedBox<C>
      {...props}
      baseClass='tooltip-inner'
      component={component}
      defaultComponent={'div' as C}
      className={className}
    />
  );
}

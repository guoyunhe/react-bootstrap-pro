import {
  autoUpdate,
  flip,
  offset as floatingOffset,
  shift,
  useClick,
  useDismiss,
  useFloating,
  useInteractions,
  useMergeRefs,
  type Placement,
} from '@floating-ui/react';
import clsx from 'clsx';
import {
  cloneElement,
  useCallback,
  useEffect,
  useId,
  useRef,
  useState,
  type CSSProperties,
  type ElementType,
  type KeyboardEvent,
  type KeyboardEventHandler,
  type ReactElement,
  type Ref,
} from 'react';

import { Box } from './box';
import type { BoxProps } from './box';

export type MenuAutoClose = boolean | 'inside' | 'outside';
export type MenuPlacement = Placement;
type MenuTriggerProps = { ref?: Ref<unknown>; onKeyDown?: KeyboardEventHandler };
type MenuOwnProps = {
  scrollable?: boolean | undefined;
  translucent?: boolean | undefined;
  show?: boolean | undefined;
  onShowChange?: ((show: boolean) => void) | undefined;
  trigger?: ReactElement<MenuTriggerProps> | undefined;
  placement?: MenuPlacement | undefined;
  offset?: number | undefined;
  autoClose?: MenuAutoClose | undefined;
};
export type MenuProps<C extends ElementType = 'div'> = Omit<BoxProps<C>, keyof MenuOwnProps> &
  MenuOwnProps;

export function Menu<C extends ElementType = 'div'>({
  component,
  className,
  scrollable,
  show,
  translucent,
  trigger,
  onShowChange,
  placement,
  offset,
  autoClose,
  ...props
}: MenuProps<C>) {
  if (trigger) {
    return (
      <InteractiveMenu<C>
        trigger={trigger}
        component={component}
        className={className}
        show={show}
        onShowChange={onShowChange}
        placement={placement}
        offset={offset}
        autoClose={autoClose}
        scrollable={scrollable}
        translucent={translucent}
        boxProps={props as BoxProps<C>}
      />
    );
  }
  return (
    <Box<C>
      {...(props as BoxProps<C>)}
      component={component ?? ('div' as C)}
      classNameBefore={clsx(
        'menu',
        scrollable && 'menu-scrollable',
        show && 'show',
        translucent && 'menu-translucent',
        props.classNameBefore,
      )}
      className={className}
    />
  );
}

type InteractiveMenuProps<C extends ElementType> = MenuOwnProps & {
  trigger: ReactElement<MenuTriggerProps>;
  component?: C | undefined;
  className?: string | undefined;
  boxProps: BoxProps<C>;
};

function getTriggerRef(trigger: ReactElement<MenuTriggerProps>): Ref<unknown> | undefined {
  if (trigger.props.ref) return trigger.props.ref;
  const legacyRef: unknown = Object.getOwnPropertyDescriptor(trigger, 'ref')?.value;
  return typeof legacyRef === 'function' ||
    (typeof legacyRef === 'object' && legacyRef !== null && 'current' in legacyRef)
    ? (legacyRef as Ref<unknown>)
    : undefined;
}

function focusItem(container: HTMLElement, last = false) {
  const items = container.querySelectorAll<HTMLElement>(
    '.menu-item:not(.disabled):not(:disabled):not([aria-disabled="true"])',
  );
  const visible = Array.from(items).filter((item) => item.closest('.menu') === container);
  (last ? visible.at(-1) : visible[0])?.focus();
}

function InteractiveMenu<C extends ElementType>({
  trigger,
  component,
  className,
  boxProps,
  show,
  onShowChange,
  placement = 'bottom-start',
  offset = 2,
  autoClose = true,
  scrollable,
  translucent,
}: InteractiveMenuProps<C>) {
  const [uncontrolledShow, setUncontrolledShow] = useState(false);
  const open = show ?? uncontrolledShow;
  const generatedId = useId();
  const menuId = typeof boxProps['id'] === 'string' ? boxProps['id'] : generatedId;
  const focusOnOpen = useRef<'first' | 'last' | null>(null);
  const setOpen = useCallback(
    (next: boolean) => {
      if (show === undefined) setUncontrolledShow(next);
      onShowChange?.(next);
    },
    [show, onShowChange],
  );
  const {
    refs,
    context,
    floatingStyles,
    isPositioned,
    placement: actualPlacement,
  } = useFloating({
    open,
    onOpenChange: setOpen,
    placement,
    transform: false,
    middleware: [floatingOffset(offset), flip(), shift({ padding: 8 })],
    whileElementsMounted: autoUpdate,
  });
  const { getReferenceProps, getFloatingProps } = useInteractions([
    useClick(context, { keyboardHandlers: false }),
    useDismiss(context, {
      outsidePress: autoClose === true || autoClose === 'outside',
      escapeKey: true,
    }),
  ]);
  const triggerRef = useMergeRefs([refs.setReference, getTriggerRef(trigger)]);
  const { ref: _triggerPropRef, ...triggerProps } = trigger.props;
  const onTriggerKeyDown = (event: KeyboardEvent) => {
    const handler: unknown = Reflect.get(triggerProps, 'onKeyDown');
    if (typeof handler === 'function') handler(event);
    if (event.defaultPrevented) return;
    if (
      event.key === 'ArrowDown' ||
      event.key === 'ArrowUp' ||
      (placement.startsWith('right') && event.key === 'ArrowRight') ||
      (placement.startsWith('left') && event.key === 'ArrowLeft')
    ) {
      event.preventDefault();
      if (!open) {
        focusOnOpen.current = event.key === 'ArrowUp' ? 'last' : 'first';
        setOpen(true);
      } else if (refs.floating.current) focusItem(refs.floating.current, event.key === 'ArrowUp');
    }
  };
  useEffect(() => {
    if (open && isPositioned && refs.floating.current && focusOnOpen.current) {
      focusItem(refs.floating.current, focusOnOpen.current === 'last');
      focusOnOpen.current = null;
    }
  }, [open, isPositioned, refs.floating]);
  const suppliedFloatingRef: unknown = Reflect.get(boxProps, 'ref');
  const floatingRef = useMergeRefs([
    refs.setFloating,
    typeof suppliedFloatingRef === 'function' ||
    (typeof suppliedFloatingRef === 'object' &&
      suppliedFloatingRef !== null &&
      'current' in suppliedFloatingRef)
      ? (suppliedFloatingRef as Ref<HTMLElement>)
      : undefined,
  ]);
  const onMenuKeyDown = (event: KeyboardEvent<HTMLElement>) => {
    if (
      event.key === 'Escape' &&
      event.target instanceof Element &&
      event.target.closest('.menu') === event.currentTarget
    ) {
      event.preventDefault();
      event.stopPropagation();
      setOpen(false);
      if (refs.domReference.current instanceof HTMLElement) refs.domReference.current.focus();
      return;
    }
    if (
      event.target instanceof Element &&
      event.target.closest('.menu') === event.currentTarget &&
      ((placement.startsWith('right') && event.key === 'ArrowLeft') ||
        (placement.startsWith('left') && event.key === 'ArrowRight'))
    ) {
      event.preventDefault();
      event.stopPropagation();
      setOpen(false);
      if (refs.domReference.current instanceof HTMLElement) refs.domReference.current.focus();
      return;
    }
    if (
      event.target instanceof HTMLElement &&
      /^(INPUT|TEXTAREA|SELECT)$/.test(event.target.tagName)
    )
      return;
    if (event.key === 'Tab') {
      requestAnimationFrame(() => setOpen(false));
      return;
    }
    if (!['ArrowDown', 'ArrowUp', 'Home', 'End'].includes(event.key)) return;
    const container = event.currentTarget;
    if (event.target instanceof Element && event.target.closest('.menu') !== container) return;
    const items = Array.from(
      container.querySelectorAll<HTMLElement>(
        '.menu-item:not(.disabled):not(:disabled):not([aria-disabled="true"])',
      ),
    ).filter((item) => item.closest('.menu') === container);
    if (!items.length) return;
    event.preventDefault();
    const index = items.indexOf(document.activeElement as HTMLElement);
    const next =
      event.key === 'Home'
        ? 0
        : event.key === 'End'
          ? items.length - 1
          : event.key === 'ArrowDown'
            ? (index + 1) % items.length
            : index <= 0
              ? items.length - 1
              : index - 1;
    items[next]?.focus();
  };
  const customStyle = Reflect.get(boxProps, 'style') as CSSProperties | undefined;
  const referenceProps = getReferenceProps({
    ...triggerProps,
    'aria-expanded': open,
    'aria-controls': menuId,
  });
  return (
    <>
      {/* The ref is only read by event handlers, not during rendering. */}
      {/* oxlint-disable-next-line react/refs */}
      {cloneElement(trigger, {
        ...referenceProps,
        onKeyDown: onTriggerKeyDown,
        ref: triggerRef,
      })}
      {open && (
        <Box<C>
          {...boxProps}
          {...getFloatingProps({
            onKeyDown: (event) => {
              const handler: unknown = Reflect.get(boxProps, 'onKeyDown');
              if (typeof handler === 'function') handler(event);
              if (!event.defaultPrevented) onMenuKeyDown(event);
            },
            onClick: (event) => {
              const handler: unknown = Reflect.get(boxProps, 'onClick');
              if (typeof handler === 'function') handler(event);
              if (event.defaultPrevented) return;
              if (autoClose !== true && autoClose !== 'inside') return;
              if (!(event.target instanceof Element)) return;
              const item = event.target.closest('.menu-item');
              if (
                !item ||
                item.getAttribute('aria-expanded') !== null ||
                item.getAttribute('aria-disabled') === 'true'
              )
                return;
              setOpen(false);
              if (event.detail === 0 && refs.domReference.current instanceof HTMLElement) {
                refs.domReference.current.focus();
              }
            },
          })}
          ref={floatingRef}
          component={component ?? ('div' as C)}
          id={menuId}
          classNameBefore={clsx(
            'menu',
            isPositioned && 'show',
            scrollable && 'menu-scrollable',
            translucent && 'menu-translucent',
            boxProps.classNameBefore,
          )}
          className={className}
          style={{
            ...customStyle,
            ...floatingStyles,
            ...(!isPositioned && { display: 'flex', visibility: 'hidden' }),
          }}
          data-bs-placement={actualPlacement}
        />
      )}
    </>
  );
}

export type MenuItemProps<C extends ElementType = 'a'> = Omit<
  BoxProps<C>,
  keyof { active?: boolean | undefined; disabled?: boolean | undefined }
> & { active?: boolean | undefined; disabled?: boolean | undefined };

export function MenuItem<C extends ElementType = 'a'>({
  component,
  className,
  active,
  disabled,
  ...props
}: MenuItemProps<C>) {
  return (
    <Box<C>
      {...(props as BoxProps<C>)}
      component={component ?? ('a' as C)}
      classNameBefore={clsx(
        'menu-item',
        active && 'active',
        disabled && 'disabled',
        props.classNameBefore,
      )}
      className={className}
      aria-disabled={disabled || props['aria-disabled']}
      tabIndex={disabled ? -1 : props['tabIndex']}
    />
  );
}

export type MenuItemContentProps<C extends ElementType = 'span'> = BoxProps<C>;

export function MenuItemContent<C extends ElementType = 'span'>({
  component,
  className,
  ...props
}: MenuItemContentProps<C>) {
  return (
    <Box<C>
      {...(props as BoxProps<C>)}
      component={component ?? ('span' as C)}
      classNameBefore={clsx('menu-item-content', props.classNameBefore)}
      className={className}
    />
  );
}

export type MenuItemDescriptionProps<C extends ElementType = 'small'> = BoxProps<C>;

export function MenuItemDescription<C extends ElementType = 'small'>({
  component,
  className,
  ...props
}: MenuItemDescriptionProps<C>) {
  return (
    <Box<C>
      {...(props as BoxProps<C>)}
      component={component ?? ('small' as C)}
      classNameBefore={clsx('menu-item-description', props.classNameBefore)}
      className={className}
    />
  );
}

export type MenuDividerProps<C extends ElementType = 'hr'> = BoxProps<C>;

export function MenuDivider<C extends ElementType = 'hr'>({
  component,
  className,
  ...props
}: MenuDividerProps<C>) {
  return (
    <Box<C>
      {...(props as BoxProps<C>)}
      component={component ?? ('hr' as C)}
      classNameBefore={clsx('menu-divider', props.classNameBefore)}
      className={className}
      role={props['role'] ?? 'separator'}
    />
  );
}

export type MenuHeaderProps<C extends ElementType = 'h6'> = BoxProps<C>;

export function MenuHeader<C extends ElementType = 'h6'>({
  component,
  className,
  ...props
}: MenuHeaderProps<C>) {
  return (
    <Box<C>
      {...(props as BoxProps<C>)}
      component={component ?? ('h6' as C)}
      classNameBefore={clsx('menu-header', props.classNameBefore)}
      className={className}
    />
  );
}

export type MenuTextProps<C extends ElementType = 'span'> = BoxProps<C>;

export function MenuText<C extends ElementType = 'span'>({
  component,
  className,
  ...props
}: MenuTextProps<C>) {
  return (
    <Box<C>
      {...(props as BoxProps<C>)}
      component={component ?? ('span' as C)}
      classNameBefore={clsx('menu-text', props.classNameBefore)}
      className={className}
    />
  );
}

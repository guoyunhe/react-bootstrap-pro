import clsx from 'clsx';
import {
  useCallback,
  useEffect,
  useImperativeHandle,
  useRef,
  type ComponentRef,
  type ElementType,
  type MouseEvent,
} from 'react';

import { Box } from './box';
import type { BoxProps } from './box';

export type DrawerProps<C extends ElementType = 'dialog'> = Omit<
  BoxProps<C>,
  keyof {
    fullscreen?: boolean | undefined;
    instant?: boolean | undefined;
    placement?: 'start' | 'end' | 'top' | 'bottom' | undefined;
    sheet?: boolean | undefined;
    translucent?: boolean | undefined;
    show?: boolean | undefined;
    onShowChange?: ((show: boolean) => void) | undefined;
  }
> & {
  fullscreen?: boolean | undefined;
  instant?: boolean | undefined;
  placement?: 'start' | 'end' | 'top' | 'bottom' | undefined;
  sheet?: boolean | undefined;
  translucent?: boolean | undefined;
  show?: boolean | undefined;
  onShowChange?: ((show: boolean) => void) | undefined;
};

export function Drawer<C extends ElementType = 'dialog'>({
  component,
  className,
  fullscreen,
  instant,
  placement = 'end',
  sheet,
  translucent,
  show,
  onShowChange,
  ref: forwardedRef,
  onClick,
  ...props
}: DrawerProps<C>) {
  const drawerRef = useRef<ComponentRef<C>>(null);
  const pendingCloseEvents = useRef(0);
  const controlled = show !== undefined;
  useImperativeHandle(forwardedRef, () => drawerRef.current!);

  const close = useCallback(() => {
    onShowChange?.(false);
  }, [onShowChange]);

  useEffect(() => {
    const dialog = drawerRef.current;
    if (show === undefined || !dialog) return;
    if (!(dialog instanceof HTMLDialogElement)) {
      throw new TypeError('A controlled Drawer must render a native dialog element.');
    }
    if (show && !dialog.open) {
      dialog.showModal();
      document.documentElement.classList.add('dialog-open');
    } else if (!show && dialog.open) {
      pendingCloseEvents.current += 1;
      dialog.close();
      if (!document.querySelector('dialog[open]:modal')) {
        document.documentElement.classList.remove('dialog-open');
      }
    }
  }, [show]);

  useEffect(() => {
    const dialog = drawerRef.current;
    if (show === undefined || !(dialog instanceof HTMLDialogElement)) return;
    const onCancel = (event: Event) => {
      event.preventDefault();
      close();
    };
    const onNativeClose = () => {
      if (!document.querySelector('dialog[open]:modal')) {
        document.documentElement.classList.remove('dialog-open');
      }
      if (pendingCloseEvents.current) {
        pendingCloseEvents.current -= 1;
        return;
      }
      if (show) close();
    };
    dialog.addEventListener('cancel', onCancel);
    dialog.addEventListener('close', onNativeClose);
    return () => {
      dialog.removeEventListener('cancel', onCancel);
      dialog.removeEventListener('close', onNativeClose);
    };
  }, [show, close]);

  useEffect(() => {
    const dialog = drawerRef.current;
    if (!controlled || !(dialog instanceof HTMLDialogElement)) return;
    const navbar = dialog.closest('.navbar');
    if (!navbar) return;
    const update = () => {
      if (dialog.open && getComputedStyle(dialog).position !== 'fixed') close();
    };
    const observer = typeof ResizeObserver === 'undefined' ? null : new ResizeObserver(update);
    observer?.observe(navbar);
    window.addEventListener('resize', update);
    return () => {
      observer?.disconnect();
      window.removeEventListener('resize', update);
    };
  }, [controlled, close]);

  useEffect(() => {
    const dialog = drawerRef.current;
    if (!controlled || !(dialog instanceof HTMLDialogElement)) return;
    return () => {
      if (dialog.open) {
        pendingCloseEvents.current += 1;
        dialog.close();
      }
      if (!document.querySelector('dialog[open]:modal')) {
        document.documentElement.classList.remove('dialog-open');
      }
    };
  }, [controlled]);

  return (
    <Box<C>
      {...(props as BoxProps<C>)}
      ref={drawerRef}
      onClick={(event: MouseEvent<HTMLElement>) => {
        if (typeof onClick === 'function') onClick(event);
        if (event.defaultPrevented || !show || event.target !== event.currentTarget) return;
        const bounds = event.currentTarget.getBoundingClientRect();
        if (
          event.clientX < bounds.left ||
          event.clientX > bounds.right ||
          event.clientY < bounds.top ||
          event.clientY > bounds.bottom
        )
          close();
      }}
      component={component ?? ('dialog' as C)}
      classNameBefore={clsx(
        'drawer',
        `drawer-${placement}`,
        fullscreen && 'drawer-fullscreen',
        instant && 'drawer-instant',
        sheet && 'drawer-sheet',
        translucent && 'drawer-translucent',
        props.classNameBefore,
      )}
      className={className}
    />
  );
}

export type DrawerHeaderProps<C extends ElementType = 'div'> = BoxProps<C>;

export function DrawerHeader<C extends ElementType = 'div'>({
  component,
  className,
  ...props
}: DrawerHeaderProps<C>) {
  return (
    <Box<C>
      {...(props as BoxProps<C>)}
      component={component ?? ('div' as C)}
      classNameBefore={clsx('drawer-header', props.classNameBefore)}
      className={className}
    />
  );
}

export type DrawerTitleProps<C extends ElementType = 'h5'> = BoxProps<C>;

export function DrawerTitle<C extends ElementType = 'h5'>({
  component,
  className,
  ...props
}: DrawerTitleProps<C>) {
  return (
    <Box<C>
      {...(props as BoxProps<C>)}
      component={component ?? ('h5' as C)}
      classNameBefore={clsx('drawer-title', props.classNameBefore)}
      className={className}
    />
  );
}

export type DrawerBodyProps<C extends ElementType = 'div'> = BoxProps<C>;

export function DrawerBody<C extends ElementType = 'div'>({
  component,
  className,
  ...props
}: DrawerBodyProps<C>) {
  return (
    <Box<C>
      {...(props as BoxProps<C>)}
      component={component ?? ('div' as C)}
      classNameBefore={clsx('drawer-body', props.classNameBefore)}
      className={className}
    />
  );
}

export type DrawerFooterProps<C extends ElementType = 'div'> = BoxProps<C>;

export function DrawerFooter<C extends ElementType = 'div'>({
  component,
  className,
  ...props
}: DrawerFooterProps<C>) {
  return (
    <Box<C>
      {...(props as BoxProps<C>)}
      component={component ?? ('div' as C)}
      classNameBefore={clsx('drawer-footer', props.classNameBefore)}
      className={className}
    />
  );
}

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
import { lockDialogScroll, unlockDialogScroll } from './dialog-scroll-lock';

export type DialogProps<C extends ElementType = 'dialog'> = Omit<
  BoxProps<C>,
  keyof {
    fullscreen?: boolean | undefined;
    instant?: boolean | undefined;
    nonmodal?: boolean | undefined;
    scrollable?: boolean | undefined;
    size?: 'sm' | 'lg' | 'xl' | undefined;
    slide?: 'down' | 'up' | undefined;
    show?: boolean | undefined;
    onShowChange?: ((show: boolean) => void) | undefined;
    backdrop?: boolean | 'static' | undefined;
    keyboard?: boolean | undefined;
  }
> & {
  fullscreen?: boolean | undefined;
  instant?: boolean | undefined;
  nonmodal?: boolean | undefined;
  scrollable?: boolean | undefined;
  size?: 'sm' | 'lg' | 'xl' | undefined;
  slide?: 'down' | 'up' | undefined;
  show?: boolean | undefined;
  onShowChange?: ((show: boolean) => void) | undefined;
  backdrop?: boolean | 'static' | undefined;
  keyboard?: boolean | undefined;
};

export function Dialog<C extends ElementType = 'dialog'>({
  component,
  className,
  fullscreen,
  instant,
  nonmodal,
  scrollable,
  size,
  slide,
  show,
  onShowChange,
  backdrop = true,
  keyboard = true,
  ref: forwardedRef,
  onClick,
  ...props
}: DialogProps<C>) {
  const dialogRef = useRef<ComponentRef<C>>(null);
  const pendingCloseEvents = useRef(0);
  const controlled = show !== undefined;
  useImperativeHandle(forwardedRef, () => dialogRef.current!);
  const requestClose = useCallback(() => onShowChange?.(false), [onShowChange]);

  useEffect(() => {
    const dialog = dialogRef.current;
    if (!controlled || backdrop !== false || !(dialog instanceof HTMLDialogElement)) return;
    const properties = ['--bs-dialog-backdrop-bg', '--bs-dialog-backdrop-blur'] as const;
    const previous = properties.map((property) => ({
      value: dialog.style.getPropertyValue(property),
      priority: dialog.style.getPropertyPriority(property),
    }));
    dialog.style.setProperty(properties[0], 'transparent');
    dialog.style.setProperty(properties[1], '0px');
    return () => {
      properties.forEach((property, index) => {
        const saved = previous[index]!;
        if (saved.value) dialog.style.setProperty(property, saved.value, saved.priority);
        else dialog.style.removeProperty(property);
      });
    };
  }, [controlled, backdrop]);

  useEffect(() => {
    const dialog = dialogRef.current;
    if (show === undefined || !dialog) return;
    if (!(dialog instanceof HTMLDialogElement)) {
      throw new TypeError('A controlled Dialog must render a native dialog element.');
    }
    if (show) {
      dialog.classList.remove('hiding');
      if (dialog.open && dialog.matches(':modal') === Boolean(nonmodal)) {
        pendingCloseEvents.current += 1;
        dialog.close();
      }
      if (!dialog.open) {
        if (nonmodal) dialog.show();
        else dialog.showModal();
      }
      if (nonmodal) unlockDialogScroll(dialog);
      else lockDialogScroll(dialog);
    } else if (dialog.open) {
      dialog.classList.add('hiding');
      const style = getComputedStyle(dialog);
      const durations = style.transitionDuration.split(',').map((value) => {
        const amount = Number.parseFloat(value);
        return value.trim().endsWith('ms') ? amount : amount * 1000;
      });
      const delays = style.transitionDelay.split(',').map((value) => {
        const amount = Number.parseFloat(value);
        return value.trim().endsWith('ms') ? amount : amount * 1000;
      });
      const duration = instant
        ? 0
        : Math.max(0, ...durations.map((value, i) => value + delays[i % delays.length]!));
      const finish = () => {
        if (dialog.open) {
          pendingCloseEvents.current += 1;
          dialog.close();
        }
        dialog.classList.remove('hiding');
        unlockDialogScroll(dialog);
      };
      if (!duration) finish();
      else {
        const timer = window.setTimeout(finish, duration);
        return () => window.clearTimeout(timer);
      }
    }
    return undefined;
  }, [show, nonmodal, instant]);

  useEffect(() => {
    const dialog = dialogRef.current;
    if (!controlled || !(dialog instanceof HTMLDialogElement)) return;
    const cancel = (event: Event) => {
      event.preventDefault();
      if (keyboard) requestClose();
    };
    const close = () => {
      if (pendingCloseEvents.current) {
        pendingCloseEvents.current -= 1;
        return;
      }
      unlockDialogScroll(dialog);
      if (show) requestClose();
    };
    const keydown = (event: KeyboardEvent) => {
      if (nonmodal && dialog.open && event.key === 'Escape' && !event.defaultPrevented) {
        event.preventDefault();
        if (keyboard) requestClose();
      }
    };
    dialog.addEventListener('cancel', cancel);
    dialog.addEventListener('close', close);
    dialog.addEventListener('keydown', keydown);
    return () => {
      dialog.removeEventListener('cancel', cancel);
      dialog.removeEventListener('close', close);
      dialog.removeEventListener('keydown', keydown);
    };
  }, [controlled, keyboard, nonmodal, requestClose, show]);

  useEffect(() => {
    const dialog = dialogRef.current;
    if (!controlled || !(dialog instanceof HTMLDialogElement)) return;
    return () => {
      if (dialog.open) {
        pendingCloseEvents.current += 1;
        dialog.close();
      }
      dialog.classList.remove('hiding');
      unlockDialogScroll(dialog);
    };
  }, [controlled]);

  return (
    <Box<C>
      {...(props as BoxProps<C>)}
      ref={dialogRef}
      onClick={(event: MouseEvent<HTMLElement>) => {
        if (typeof onClick === 'function') onClick(event);
        if (
          event.defaultPrevented ||
          !show ||
          nonmodal ||
          backdrop !== true ||
          event.target !== event.currentTarget
        )
          return;
        const bounds = event.currentTarget.getBoundingClientRect();
        if (
          event.clientX < bounds.left ||
          event.clientX > bounds.right ||
          event.clientY < bounds.top ||
          event.clientY > bounds.bottom
        )
          requestClose();
      }}
      component={component ?? ('dialog' as C)}
      classNameBefore={clsx(
        'dialog',
        fullscreen && 'dialog-fullscreen',
        instant && 'dialog-instant',
        nonmodal && 'dialog-nonmodal',
        scrollable && 'dialog-scrollable',
        size && `dialog-${size}`,
        slide && `dialog-slide-${slide}`,
        props.classNameBefore,
      )}
      className={className}
    />
  );
}

export type DialogHeaderProps<C extends ElementType = 'div'> = BoxProps<C>;

export function DialogHeader<C extends ElementType = 'div'>({
  component,
  className,
  ...props
}: DialogHeaderProps<C>) {
  return (
    <Box<C>
      {...(props as BoxProps<C>)}
      component={component ?? ('div' as C)}
      classNameBefore={clsx('dialog-header', props.classNameBefore)}
      className={className}
    />
  );
}

export type DialogTitleProps<C extends ElementType = 'h1'> = BoxProps<C>;

export function DialogTitle<C extends ElementType = 'h1'>({
  component,
  className,
  ...props
}: DialogTitleProps<C>) {
  return (
    <Box<C>
      {...(props as BoxProps<C>)}
      component={component ?? ('h1' as C)}
      classNameBefore={clsx('dialog-title', props.classNameBefore)}
      className={className}
    />
  );
}

export type DialogBodyProps<C extends ElementType = 'div'> = BoxProps<C>;

export function DialogBody<C extends ElementType = 'div'>({
  component,
  className,
  ...props
}: DialogBodyProps<C>) {
  return (
    <Box<C>
      {...(props as BoxProps<C>)}
      component={component ?? ('div' as C)}
      classNameBefore={clsx('dialog-body', props.classNameBefore)}
      className={className}
    />
  );
}

export type DialogFooterProps<C extends ElementType = 'div'> = BoxProps<C>;

export function DialogFooter<C extends ElementType = 'div'>({
  component,
  className,
  ...props
}: DialogFooterProps<C>) {
  return (
    <Box<C>
      {...(props as BoxProps<C>)}
      component={component ?? ('div' as C)}
      classNameBefore={clsx('dialog-footer', props.classNameBefore)}
      className={className}
    />
  );
}

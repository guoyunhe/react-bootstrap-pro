import clsx from 'clsx';
import type { ElementType } from 'react';

import { Box } from './box';
import type { BoxProps } from './box';

export type ToastProps<C extends ElementType = 'div'> = Omit<
  BoxProps<C>,
  keyof {
    instant?: boolean | undefined;
    show?: boolean | undefined;
    translucent?: boolean | undefined;
  }
> & {
  instant?: boolean | undefined;
  show?: boolean | undefined;
  translucent?: boolean | undefined;
};

export function Toast<C extends ElementType = 'div'>({
  component,
  className,
  instant,
  show,
  translucent,
  role,
  ...props
}: ToastProps<C>) {
  return (
    <Box<C>
      {...(props as BoxProps<C>)}
      component={component ?? ('div' as C)}
      classNameBefore={clsx(
        'toast',
        instant && 'toast-instant',
        show && 'show',
        translucent && 'toast-translucent',
        props.classNameBefore,
      )}
      className={className}
      role={role ?? 'alert'}
      aria-live={props['aria-live'] ?? 'assertive'}
      aria-atomic={props['aria-atomic'] ?? true}
    />
  );
}

export type ToastContainerProps<C extends ElementType = 'div'> = BoxProps<C>;

export function ToastContainer<C extends ElementType = 'div'>({
  component,
  className,
  ...props
}: ToastContainerProps<C>) {
  return (
    <Box<C>
      {...(props as BoxProps<C>)}
      component={component ?? ('div' as C)}
      classNameBefore={clsx('toast-container', props.classNameBefore)}
      className={className}
      role={props['role'] ?? 'region'}
      aria-live={props['aria-live'] ?? 'polite'}
    />
  );
}

export type ToastHeaderProps<C extends ElementType = 'div'> = BoxProps<C>;

export function ToastHeader<C extends ElementType = 'div'>({
  component,
  className,
  ...props
}: ToastHeaderProps<C>) {
  return (
    <Box<C>
      {...(props as BoxProps<C>)}
      component={component ?? ('div' as C)}
      classNameBefore={clsx('toast-header', props.classNameBefore)}
      className={className}
    />
  );
}

export type ToastBodyProps<C extends ElementType = 'div'> = BoxProps<C>;

export function ToastBody<C extends ElementType = 'div'>({
  component,
  className,
  ...props
}: ToastBodyProps<C>) {
  return (
    <Box<C>
      {...(props as BoxProps<C>)}
      component={component ?? ('div' as C)}
      classNameBefore={clsx('toast-body', props.classNameBefore)}
      className={className}
    />
  );
}

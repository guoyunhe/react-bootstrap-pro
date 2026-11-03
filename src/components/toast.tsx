import clsx from 'clsx';
import type { ElementType } from 'react';

import type { BoxProps } from './box';
import { ClassedBox, type BoxComponentProps } from './shared';

export type ToastProps<C extends ElementType = 'div'> = BoxComponentProps<
  C,
  { instant?: boolean | undefined; show?: boolean | undefined; translucent?: boolean | undefined }
>;

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
    <ClassedBox<C>
      {...props}
      baseClass={clsx(
        'toast',
        instant && 'toast-instant',
        show && 'show',
        translucent && 'toast-translucent',
      )}
      component={component}
      defaultComponent={'div' as C}
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
    <ClassedBox<C>
      {...props}
      baseClass='toast-container'
      component={component}
      defaultComponent={'div' as C}
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
    <ClassedBox<C>
      {...props}
      baseClass='toast-header'
      component={component}
      defaultComponent={'div' as C}
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
    <ClassedBox<C>
      {...props}
      baseClass='toast-body'
      component={component}
      defaultComponent={'div' as C}
      className={className}
    />
  );
}

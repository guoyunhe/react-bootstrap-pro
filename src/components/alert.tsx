import clsx from 'clsx';
import type { ElementType } from 'react';

import { ClassedBox, type ComponentProps } from './shared';

export type AlertProps<C extends ElementType = 'div'> = ComponentProps<
  C,
  { instant?: boolean | undefined }
>;

export function Alert<C extends ElementType = 'div'>({
  component,
  className,
  instant,
  role,
  ...props
}: AlertProps<C>) {
  return (
    <ClassedBox<C>
      {...props}
      baseClass={clsx('alert', instant && 'alert-instant')}
      component={component}
      defaultComponent={'div' as C}
      className={className}
      role={role ?? 'alert'}
    />
  );
}

export type AlertHeadingProps<C extends ElementType = 'h4'> = ComponentProps<C>;

export function AlertHeading<C extends ElementType = 'h4'>({
  component,
  className,
  ...props
}: AlertHeadingProps<C>) {
  return (
    <ClassedBox<C>
      {...props}
      baseClass='alert-heading'
      component={component}
      defaultComponent={'h4' as C}
      className={className}
    />
  );
}

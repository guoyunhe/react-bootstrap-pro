import clsx from 'clsx';
import type { ElementType } from 'react';

import { Box } from './box';
import { type ComponentProps } from './shared';

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
    <Box<C>
      {...props}
      component={component ?? ('div' as C)}
      classNameBefore={clsx('alert', instant && 'alert-instant', props.classNameBefore)}
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
    <Box<C>
      {...props}
      component={component ?? ('h4' as C)}
      classNameBefore={clsx('alert-heading', props.classNameBefore)}
      className={className}
    />
  );
}

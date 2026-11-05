import clsx from 'clsx';
import type { ElementType } from 'react';

import { Box } from './box';
import type { BoxProps } from './box';

export type AlertProps<C extends ElementType = 'div'> = Omit<
  BoxProps<C>,
  keyof { instant?: boolean | undefined }
> & { instant?: boolean | undefined };

export function Alert<C extends ElementType = 'div'>({
  component,
  className,
  instant,
  role,
  ...props
}: AlertProps<C>) {
  return (
    <Box<C>
      {...(props as BoxProps<C>)}
      component={component ?? ('div' as C)}
      classNameBefore={clsx('alert', instant && 'alert-instant', props.classNameBefore)}
      className={className}
      role={role ?? 'alert'}
    />
  );
}

export type AlertHeadingProps<C extends ElementType = 'h4'> = BoxProps<C>;

export function AlertHeading<C extends ElementType = 'h4'>({
  component,
  className,
  ...props
}: AlertHeadingProps<C>) {
  return (
    <Box<C>
      {...(props as BoxProps<C>)}
      component={component ?? ('h4' as C)}
      classNameBefore={clsx('alert-heading', props.classNameBefore)}
      className={className}
    />
  );
}

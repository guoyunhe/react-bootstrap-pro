import clsx from 'clsx';
import type { ElementType } from 'react';

import { Box } from './box';
import type { BoxProps } from './box';

export type SpinnerProps<C extends ElementType = 'span'> = Omit<
  BoxProps<C>,
  keyof {
    label?: string | undefined;
    size?: 'sm' | undefined;
    variant?: 'border' | 'grow' | 'rotate' | undefined;
  }
> & {
  label?: string | undefined;
  size?: 'sm' | undefined;
  variant?: 'border' | 'grow' | 'rotate' | undefined;
};

export function Spinner<C extends ElementType = 'span'>({
  component,
  className,
  label = 'Loading',
  size,
  variant = 'border',
  ...props
}: SpinnerProps<C>) {
  return (
    <Box<C>
      {...(props as BoxProps<C>)}
      component={component ?? ('span' as C)}
      classNameBefore={clsx(`spinner-${variant}`, size && `spinner-${size}`, props.classNameBefore)}
      className={className}
      role={props['role'] ?? 'status'}
      aria-label={props['aria-label'] ?? label}
    />
  );
}

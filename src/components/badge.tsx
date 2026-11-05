import clsx from 'clsx';
import type { ElementType } from 'react';

import { type ComponentProps } from '../types';
import { Box } from './box';
import type { BoxProps } from './box';

export type BadgeProps<C extends ElementType = 'span'> = ComponentProps<
  C,
  { size?: 'lg' | undefined; variant?: 'solid' | 'subtle' | 'outline' | undefined }
>;

export function Badge<C extends ElementType = 'span'>({
  component,
  className,
  size,
  variant,
  ...props
}: BadgeProps<C>) {
  return (
    <Box<C>
      {...(props as BoxProps<C>)}
      component={component ?? ('span' as C)}
      classNameBefore={clsx(
        'badge',
        variant && variant !== 'solid' && `badge-${variant}`,
        size && `badge-${size}`,
        props.classNameBefore,
      )}
      className={className}
    />
  );
}

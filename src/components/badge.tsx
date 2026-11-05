import clsx from 'clsx';
import type { ElementType } from 'react';

import { Box } from './box';
import { type ComponentProps } from './shared';

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
      {...props}
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

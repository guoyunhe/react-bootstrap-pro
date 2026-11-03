import clsx from 'clsx';
import type { ElementType } from 'react';

import { ClassedBox, type BoxComponentProps } from './shared';

export type BadgeProps<C extends ElementType = 'span'> = BoxComponentProps<
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
    <ClassedBox<C>
      {...props}
      baseClass={clsx(
        'badge',
        variant && variant !== 'solid' && `badge-${variant}`,
        size && `badge-${size}`,
      )}
      component={component}
      defaultComponent={'span' as C}
      className={className}
    />
  );
}

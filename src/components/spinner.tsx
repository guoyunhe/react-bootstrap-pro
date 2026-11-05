import clsx from 'clsx';
import type { ElementType } from 'react';

import { ClassedBox, type ComponentProps } from './shared';

export type SpinnerProps<C extends ElementType = 'span'> = ComponentProps<
  C,
  {
    label?: string | undefined;
    size?: 'sm' | undefined;
    variant?: 'border' | 'grow' | 'rotate' | undefined;
  }
>;

export function Spinner<C extends ElementType = 'span'>({
  component,
  className,
  label = 'Loading',
  size,
  variant = 'border',
  ...props
}: SpinnerProps<C>) {
  return (
    <ClassedBox<C>
      {...props}
      baseClass={clsx(`spinner-${variant}`, size && `spinner-${size}`)}
      component={component}
      defaultComponent={'span' as C}
      className={className}
      role={props['role'] ?? 'status'}
      aria-label={props['aria-label'] ?? label}
    />
  );
}

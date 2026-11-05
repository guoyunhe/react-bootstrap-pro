import clsx from 'clsx';
import type { ElementType } from 'react';

import { ClassedBox, type ComponentProps } from './shared';

export type PlaceholderProps<C extends ElementType = 'span'> = ComponentProps<
  C,
  { size?: 'xs' | 'sm' | 'lg' | undefined }
>;

export function Placeholder<C extends ElementType = 'span'>({
  component,
  className,
  size,
  ...props
}: PlaceholderProps<C>) {
  return (
    <ClassedBox<C>
      {...props}
      baseClass={clsx('placeholder', size && `placeholder-${size}`)}
      component={component}
      defaultComponent={'span' as C}
      className={className}
      aria-hidden={props['aria-hidden'] ?? true}
    />
  );
}

export type PlaceholderGroupProps<C extends ElementType = 'span'> = ComponentProps<
  C,
  { animation?: 'glow' | 'pulse' | 'wave' | undefined }
>;

export function PlaceholderGroup<C extends ElementType = 'span'>({
  component,
  className,
  animation,
  ...props
}: PlaceholderGroupProps<C>) {
  return (
    <ClassedBox<C>
      {...props}
      baseClass={animation ? `placeholder-${animation}` : ''}
      component={component}
      defaultComponent={'span' as C}
      className={className}
      aria-hidden={props['aria-hidden'] ?? true}
    />
  );
}

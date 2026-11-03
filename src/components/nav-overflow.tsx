import type { ElementType } from 'react';

import type { BoxProps } from './box';
import { ClassedBox } from './shared';

export type NavOverflowProps<C extends ElementType = 'div'> = BoxProps<C>;

export function NavOverflow<C extends ElementType = 'div'>({
  component,
  className,
  ...props
}: NavOverflowProps<C>) {
  return (
    <ClassedBox<C>
      {...props}
      baseClass='nav-overflow'
      component={component}
      defaultComponent={'div' as C}
      className={className}
      data-bs-toggle={props['data-bs-toggle'] ?? 'nav-overflow'}
    />
  );
}

export type NavOverflowItemProps<C extends ElementType = 'li'> = BoxProps<C>;

export function NavOverflowItem<C extends ElementType = 'li'>({
  component,
  className,
  ...props
}: NavOverflowItemProps<C>) {
  return (
    <ClassedBox<C>
      {...props}
      baseClass='nav-overflow-item'
      component={component}
      defaultComponent={'li' as C}
      className={className}
    />
  );
}

export type NavOverflowIconProps<C extends ElementType = 'span'> = BoxProps<C>;

export function NavOverflowIcon<C extends ElementType = 'span'>({
  component,
  className,
  ...props
}: NavOverflowIconProps<C>) {
  return (
    <ClassedBox<C>
      {...props}
      baseClass='nav-overflow-icon'
      component={component}
      defaultComponent={'span' as C}
      className={className}
      aria-hidden={props['aria-hidden'] ?? true}
    />
  );
}

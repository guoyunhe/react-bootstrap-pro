import clsx from 'clsx';
import type { ElementType } from 'react';

import { Box } from './box';
import type { BoxProps } from './box';

export type NavOverflowProps<C extends ElementType = 'div'> = BoxProps<C>;

export function NavOverflow<C extends ElementType = 'div'>({
  component,
  className,
  ...props
}: NavOverflowProps<C>) {
  return (
    <Box<C>
      {...props}
      component={component ?? ('div' as C)}
      classNameBefore={clsx('nav-overflow', props.classNameBefore)}
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
    <Box<C>
      {...props}
      component={component ?? ('li' as C)}
      classNameBefore={clsx('nav-overflow-item', props.classNameBefore)}
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
    <Box<C>
      {...props}
      component={component ?? ('span' as C)}
      classNameBefore={clsx('nav-overflow-icon', props.classNameBefore)}
      className={className}
      aria-hidden={props['aria-hidden'] ?? true}
    />
  );
}

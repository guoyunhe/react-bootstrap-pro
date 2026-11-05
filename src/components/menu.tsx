import clsx from 'clsx';
import type { ElementType } from 'react';

import { Box } from './box';
import type { BoxProps } from './box';
import { type ComponentProps } from './shared';

export type MenuProps<C extends ElementType = 'div'> = ComponentProps<
  C,
  {
    scrollable?: boolean | undefined;
    translucent?: boolean | undefined;
    show?: boolean | undefined;
  }
>;

export function Menu<C extends ElementType = 'div'>({
  component,
  className,
  scrollable,
  show,
  translucent,
  ...props
}: MenuProps<C>) {
  return (
    <Box<C>
      {...props}
      component={component ?? ('div' as C)}
      classNameBefore={clsx(
        'menu',
        scrollable && 'menu-scrollable',
        show && 'show',
        translucent && 'menu-translucent',
        props.classNameBefore,
      )}
      className={className}
    />
  );
}

export type MenuItemProps<C extends ElementType = 'a'> = ComponentProps<
  C,
  { active?: boolean | undefined; disabled?: boolean | undefined }
>;

export function MenuItem<C extends ElementType = 'a'>({
  component,
  className,
  active,
  disabled,
  ...props
}: MenuItemProps<C>) {
  return (
    <Box<C>
      {...props}
      component={component ?? ('a' as C)}
      classNameBefore={clsx(
        'menu-item',
        active && 'active',
        disabled && 'disabled',
        props.classNameBefore,
      )}
      className={className}
      aria-disabled={disabled || props['aria-disabled']}
      tabIndex={disabled ? -1 : props['tabIndex']}
    />
  );
}

export type MenuDividerProps<C extends ElementType = 'hr'> = BoxProps<C>;

export function MenuDivider<C extends ElementType = 'hr'>({
  component,
  className,
  ...props
}: MenuDividerProps<C>) {
  return (
    <Box<C>
      {...props}
      component={component ?? ('hr' as C)}
      classNameBefore={clsx('menu-divider', props.classNameBefore)}
      className={className}
      role={props['role'] ?? 'separator'}
    />
  );
}

export type MenuHeaderProps<C extends ElementType = 'h6'> = BoxProps<C>;

export function MenuHeader<C extends ElementType = 'h6'>({
  component,
  className,
  ...props
}: MenuHeaderProps<C>) {
  return (
    <Box<C>
      {...props}
      component={component ?? ('h6' as C)}
      classNameBefore={clsx('menu-header', props.classNameBefore)}
      className={className}
    />
  );
}

export type MenuTextProps<C extends ElementType = 'span'> = BoxProps<C>;

export function MenuText<C extends ElementType = 'span'>({
  component,
  className,
  ...props
}: MenuTextProps<C>) {
  return (
    <Box<C>
      {...props}
      component={component ?? ('span' as C)}
      classNameBefore={clsx('menu-text', props.classNameBefore)}
      className={className}
    />
  );
}

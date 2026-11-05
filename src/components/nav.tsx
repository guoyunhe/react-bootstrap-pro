import clsx from 'clsx';
import type { ElementType } from 'react';

import type { BoxProps } from './box';
import { ClassedBox, type ComponentProps } from './shared';

export type NavProps<C extends ElementType = 'ul'> = ComponentProps<
  C,
  {
    fill?: boolean | undefined;
    justified?: boolean | undefined;
    orientation?: 'horizontal' | 'vertical' | undefined;
    variant?: 'tabs' | 'pills' | 'underline' | undefined;
  }
>;

export function Nav<C extends ElementType = 'ul'>({
  component,
  className,
  fill,
  justified,
  orientation,
  variant,
  ...props
}: NavProps<C>) {
  return (
    <ClassedBox<C>
      {...props}
      baseClass={clsx(
        'nav',
        variant && `nav-${variant}`,
        orientation === 'vertical' && variant === 'pills' && 'nav-pills-vertical',
        fill && 'nav-fill',
        justified && 'nav-justified',
      )}
      component={component}
      defaultComponent={'ul' as C}
      className={className}
    />
  );
}

export type NavItemProps<C extends ElementType = 'li'> = BoxProps<C>;

export function NavItem<C extends ElementType = 'li'>({
  component,
  className,
  ...props
}: NavItemProps<C>) {
  return (
    <ClassedBox<C>
      {...props}
      baseClass='nav-item'
      component={component}
      defaultComponent={'li' as C}
      className={className}
    />
  );
}

export type NavLinkProps<C extends ElementType = 'a'> = ComponentProps<
  C,
  { active?: boolean | undefined; disabled?: boolean | undefined }
>;

export function NavLink<C extends ElementType = 'a'>({
  component,
  className,
  active,
  disabled,
  ...props
}: NavLinkProps<C>) {
  return (
    <ClassedBox<C>
      {...props}
      baseClass={clsx('nav-link', active && 'active', disabled && 'disabled')}
      component={component}
      defaultComponent={'a' as C}
      className={className}
      aria-current={active ? (props['aria-current'] ?? 'page') : props['aria-current']}
      aria-disabled={disabled || props['aria-disabled']}
      tabIndex={disabled ? -1 : props['tabIndex']}
    />
  );
}

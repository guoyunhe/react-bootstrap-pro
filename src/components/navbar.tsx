import clsx from 'clsx';
import type { ElementType } from 'react';

import type { BoxProps } from './box';
import { ClassedBox, type ComponentProps } from './shared';

export type NavbarProps<C extends ElementType = 'nav'> = ComponentProps<
  C,
  { expand?: boolean | 'sm' | 'md' | 'lg' | 'xl' | '2xl' | undefined }
>;

export function Navbar<C extends ElementType = 'nav'>({
  component,
  className,
  expand,
  ...props
}: NavbarProps<C>) {
  return (
    <ClassedBox<C>
      {...props}
      baseClass={clsx(
        'navbar',
        expand === true && 'navbar-expand',
        typeof expand === 'string' && `${expand}:navbar-expand`,
      )}
      component={component}
      defaultComponent={'nav' as C}
      className={className}
    />
  );
}

export type NavbarBrandProps<C extends ElementType = 'a'> = BoxProps<C>;

export function NavbarBrand<C extends ElementType = 'a'>({
  component,
  className,
  ...props
}: NavbarBrandProps<C>) {
  return (
    <ClassedBox<C>
      {...props}
      baseClass='navbar-brand'
      component={component}
      defaultComponent={'a' as C}
      className={className}
    />
  );
}

export type NavbarTogglerProps<C extends ElementType = 'button'> = BoxProps<C>;

export function NavbarToggler<C extends ElementType = 'button'>({
  component,
  className,
  type,
  children,
  ...props
}: NavbarTogglerProps<C>) {
  return (
    <ClassedBox<C>
      {...props}
      baseClass='navbar-toggler'
      component={component}
      defaultComponent={'button' as C}
      className={className}
      type={type ?? 'button'}
      aria-label={props['aria-label'] ?? 'Toggle navigation'}
    >
      {children ?? <span className='navbar-toggler-icon' aria-hidden='true' />}
    </ClassedBox>
  );
}

export type NavbarNavProps<C extends ElementType = 'ul'> = BoxProps<C>;

export function NavbarNav<C extends ElementType = 'ul'>({
  component,
  className,
  ...props
}: NavbarNavProps<C>) {
  return (
    <ClassedBox<C>
      {...props}
      baseClass='nav navbar-nav'
      component={component}
      defaultComponent={'ul' as C}
      className={className}
    />
  );
}

export type NavbarTextProps<C extends ElementType = 'span'> = BoxProps<C>;

export function NavbarText<C extends ElementType = 'span'>({
  component,
  className,
  ...props
}: NavbarTextProps<C>) {
  return (
    <ClassedBox<C>
      {...props}
      baseClass='navbar-text'
      component={component}
      defaultComponent={'span' as C}
      className={className}
    />
  );
}

import clsx from 'clsx';
import type { ElementType } from 'react';

import { Box } from './box';
import type { BoxProps } from './box';

export type NavbarProps<C extends ElementType = 'nav'> = Omit<
  BoxProps<C>,
  keyof { expand?: boolean | 'sm' | 'md' | 'lg' | 'xl' | '2xl' | undefined }
> & { expand?: boolean | 'sm' | 'md' | 'lg' | 'xl' | '2xl' | undefined };

export function Navbar<C extends ElementType = 'nav'>({
  component,
  className,
  expand,
  ...props
}: NavbarProps<C>) {
  return (
    <Box<C>
      {...(props as BoxProps<C>)}
      component={component ?? ('nav' as C)}
      classNameBefore={clsx(
        'navbar',
        expand === true && 'navbar-expand',
        typeof expand === 'string' && `${expand}:navbar-expand`,
        props.classNameBefore,
      )}
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
    <Box<C>
      {...(props as BoxProps<C>)}
      component={component ?? ('a' as C)}
      classNameBefore={clsx('navbar-brand', props.classNameBefore)}
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
    <Box<C>
      {...(props as BoxProps<C>)}
      component={component ?? ('button' as C)}
      classNameBefore={clsx('navbar-toggler', props.classNameBefore)}
      className={className}
      type={type ?? 'button'}
      aria-label={props['aria-label'] ?? 'Toggle navigation'}
    >
      {children ?? <span className='navbar-toggler-icon' aria-hidden='true' />}
    </Box>
  );
}

export type NavbarNavProps<C extends ElementType = 'ul'> = BoxProps<C>;

export function NavbarNav<C extends ElementType = 'ul'>({
  component,
  className,
  ...props
}: NavbarNavProps<C>) {
  return (
    <Box<C>
      {...(props as BoxProps<C>)}
      component={component ?? ('ul' as C)}
      classNameBefore={clsx('nav navbar-nav', props.classNameBefore)}
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
    <Box<C>
      {...(props as BoxProps<C>)}
      component={component ?? ('span' as C)}
      classNameBefore={clsx('navbar-text', props.classNameBefore)}
      className={className}
    />
  );
}

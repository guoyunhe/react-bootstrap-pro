import clsx from 'clsx';
import type { ElementType } from 'react';

import { type ComponentProps } from '../types';
import { Box } from './box';
import type { BoxProps } from './box';

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
    <Box<C>
      {...(props as BoxProps<C>)}
      component={component ?? ('ul' as C)}
      classNameBefore={clsx(
        'nav',
        variant && `nav-${variant}`,
        orientation === 'vertical' && variant === 'pills' && 'nav-pills-vertical',
        fill && 'nav-fill',
        justified && 'nav-justified',
        props.classNameBefore,
      )}
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
    <Box<C>
      {...(props as BoxProps<C>)}
      component={component ?? ('li' as C)}
      classNameBefore={clsx('nav-item', props.classNameBefore)}
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
    <Box<C>
      {...(props as BoxProps<C>)}
      component={component ?? ('a' as C)}
      classNameBefore={clsx(
        'nav-link',
        active && 'active',
        disabled && 'disabled',
        props.classNameBefore,
      )}
      className={className}
      aria-current={active ? (props['aria-current'] ?? 'page') : props['aria-current']}
      aria-disabled={disabled || props['aria-disabled']}
      tabIndex={disabled ? -1 : props['tabIndex']}
    />
  );
}

import clsx from 'clsx';
import type { ElementType } from 'react';

import { Box } from './box';
import type { BoxProps } from './box';

export type NavProps<C extends ElementType = 'ul'> = Omit<
  BoxProps<C>,
  keyof {
    fill?: boolean | undefined;
    justified?: boolean | undefined;
    orientation?: 'horizontal' | 'vertical' | undefined;
    variant?: 'tabs' | 'pills' | 'underline' | undefined;
  }
> & {
  fill?: boolean | undefined;
  justified?: boolean | undefined;
  orientation?: 'horizontal' | 'vertical' | undefined;
  variant?: 'tabs' | 'pills' | 'underline' | undefined;
};

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

type NavLinkOwnProps = {
  active?: boolean | undefined;
  disabled?: boolean | undefined;
  tab?: boolean | undefined;
  targetId?: string | undefined;
};

export type NavLinkProps<C extends ElementType = 'a'> = Omit<BoxProps<C>, keyof NavLinkOwnProps> &
  NavLinkOwnProps;

export function NavLink<C extends ElementType = 'a'>({
  component,
  className,
  active,
  disabled,
  tab,
  targetId,
  ...props
}: NavLinkProps<C>) {
  const Component = component ?? (tab ? 'button' : 'a');
  const isButton = Component === 'button';
  const target = targetId ? `#${targetId}` : undefined;
  const buttonProps = isButton
    ? { disabled, type: (props as { type?: string }).type ?? 'button' }
    : {};

  return (
    <Box<C>
      {...(props as BoxProps<C>)}
      {...(buttonProps as BoxProps<C>)}
      component={Component as C}
      classNameBefore={clsx(
        'nav-link',
        active && 'active',
        disabled && 'disabled',
        props.classNameBefore,
      )}
      className={className}
      role={tab ? (props['role'] ?? 'tab') : props['role']}
      aria-current={!tab && active ? (props['aria-current'] ?? 'page') : props['aria-current']}
      aria-selected={tab ? (active ?? false) : props['aria-selected']}
      aria-controls={tab ? (targetId ?? props['aria-controls']) : props['aria-controls']}
      aria-disabled={isButton ? props['aria-disabled'] : disabled || props['aria-disabled']}
      tabIndex={!isButton && disabled ? -1 : props['tabIndex']}
      data-bs-toggle={tab ? (props['data-bs-toggle'] ?? 'tab') : props['data-bs-toggle']}
      data-bs-target={tab ? (target ?? props['data-bs-target']) : props['data-bs-target']}
    />
  );
}

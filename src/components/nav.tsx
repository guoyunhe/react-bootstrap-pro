import clsx from 'clsx';
import {
  createContext,
  useContext,
  type ElementType,
  type MouseEvent,
  type MouseEventHandler,
} from 'react';

import { Box } from './box';
import type { BoxProps } from './box';

export type NavValue = string | number;

export type NavVariant = 'tabs' | 'pills' | 'underline';

type NavTabsContextValue = {
  onChange: ((event: MouseEvent<HTMLElement>, value: NavValue) => void) | undefined;
  value: NavValue | undefined;
  variant: NavVariant | undefined;
};

const NavTabsContext = createContext<NavTabsContextValue | undefined>(undefined);

type NavOwnProps = {
  fill?: boolean | undefined;
  justified?: boolean | undefined;
  onChange?: ((event: MouseEvent<HTMLElement>, value: NavValue) => void) | undefined;
  orientation?: 'horizontal' | 'vertical' | undefined;
  value?: NavValue | undefined;
  variant?: NavVariant | undefined;
};

export type NavProps = Omit<BoxProps<'ul'>, keyof NavOwnProps | 'component'> &
  NavOwnProps & {
    component?: ElementType | undefined;
  };

export function Nav({
  component,
  className,
  fill,
  justified,
  onChange,
  orientation,
  value,
  variant,
  ...props
}: NavProps) {
  return (
    <NavTabsContext.Provider value={{ onChange, value, variant }}>
      <Box<'ul'>
        {...(props as BoxProps<'ul'>)}
        component={(component ?? 'ul') as 'ul'}
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
    </NavTabsContext.Provider>
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
  targetId?: string | undefined;
  value?: NavValue | undefined;
};

export type NavLinkProps<C extends ElementType = 'a'> = Omit<BoxProps<C>, keyof NavLinkOwnProps> &
  NavLinkOwnProps;

export function NavLink<C extends ElementType = 'a'>({
  component,
  className,
  active,
  disabled,
  targetId,
  value,
  ...props
}: NavLinkProps<C>) {
  const tabs = useContext(NavTabsContext);
  const tab = tabs?.value !== undefined && tabs.variant !== undefined;
  const controlled = tab;
  const isActive = controlled ? tabs?.value === value : active;
  const Component = component ?? (tab ? 'button' : 'a');
  const isButton = Component === 'button';
  const target = targetId ? `#${targetId}` : undefined;
  const buttonProps = isButton
    ? { disabled, type: (props as { type?: string }).type ?? 'button' }
    : {};
  const onClick = (props as { onClick?: MouseEventHandler<HTMLElement> }).onClick;

  return (
    <Box<C>
      {...(props as BoxProps<C>)}
      {...(buttonProps as BoxProps<C>)}
      component={Component as C}
      classNameBefore={clsx(
        'nav-link',
        isActive && 'active',
        disabled && 'disabled',
        props.classNameBefore,
      )}
      className={className}
      onClick={(event: MouseEvent<HTMLElement>) => {
        onClick?.(event);

        if (!event.defaultPrevented && controlled && tabs?.onChange && value !== undefined) {
          tabs.onChange(event, value);
        }
      }}
      role={tab ? (props['role'] ?? 'tab') : props['role']}
      aria-current={!tab && isActive ? (props['aria-current'] ?? 'page') : props['aria-current']}
      aria-selected={tab ? (isActive ?? false) : props['aria-selected']}
      aria-controls={tab ? (targetId ?? props['aria-controls']) : props['aria-controls']}
      aria-disabled={isButton ? props['aria-disabled'] : disabled || props['aria-disabled']}
      tabIndex={!isButton && disabled ? -1 : props['tabIndex']}
      data-bs-toggle={tab ? (props['data-bs-toggle'] ?? 'tab') : props['data-bs-toggle']}
      data-bs-target={tab ? (target ?? props['data-bs-target']) : props['data-bs-target']}
    />
  );
}

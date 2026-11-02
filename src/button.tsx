import clsx from 'clsx';
import type { ComponentPropsWithoutRef, ElementType, MouseEvent } from 'react';

export type ButtonTheme =
  | 'primary'
  | 'accent'
  | 'secondary'
  | 'success'
  | 'danger'
  | 'warning'
  | 'info'
  | 'inverse';

export type ButtonVariant = 'solid' | 'outline' | 'subtle' | 'text' | 'link';

type ButtonOwnProps = {
  variant?: ButtonVariant;
  theme?: ButtonTheme;
  size?: 'xs' | 'sm' | 'lg';
  active?: boolean;
  styled?: boolean;
  disabled?: boolean;
  check?: boolean;
};

export type ButtonProps<C extends ElementType = 'button'> = ButtonOwnProps & {
  component?: C;
  className?: string;
} & Omit<ComponentPropsWithoutRef<C>, keyof ButtonOwnProps | 'className' | 'component'>;

export function Button<C extends ElementType = 'button'>({
  component,
  variant,
  theme,
  size,
  active,
  styled,
  disabled,
  check,
  className,
  ...props
}: ButtonProps<C>) {
  const Component = component ?? 'button';
  const isDisabledAnchor = Component === 'a' && disabled;
  const classes = clsx(
    'btn',
    variant ? `btn-${variant}` : undefined,
    theme ? `theme-${theme}` : undefined,
    size && `btn-${size}`,
    active && 'active',
    styled && 'btn-styled',
    check && 'btn-check',
    isDisabledAnchor && 'disabled',
    className,
  );

  const componentProps = {
    ...(Component === 'button' ? { type: 'button' as const } : {}),
    ...props,
    ...(Component === 'a' ? {} : { disabled }),
    ...(isDisabledAnchor
      ? {
          'aria-disabled': true,
          tabIndex: -1,
          onClick: (event: MouseEvent<HTMLElement>) => event.preventDefault(),
        }
      : {}),
    className: classes,
  };

  return <Component {...componentProps} />;
}

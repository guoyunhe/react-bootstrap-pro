import type { ComponentPropsWithoutRef, ElementType } from 'react';

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
  className,
  ...props
}: ButtonProps<C>) {
  const Component = component ?? 'button';
  const classes = [
    'btn',
    variant ? `btn-${variant}` : undefined,
    theme ? `theme-${theme}` : undefined,
    size && `btn-${size}`,
    active && 'active',
    styled && 'btn-styled',
    className,
  ]
    .filter(Boolean)
    .join(' ');

  const componentProps = {
    ...(Component === 'button' ? { type: 'button' as const } : {}),
    ...props,
    className: classes,
  };

  return <Component {...componentProps} />;
}

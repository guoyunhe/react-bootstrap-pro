import type { ButtonHTMLAttributes } from 'react';

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

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  theme?: ButtonTheme;
  size?: 'xs' | 'sm' | 'lg';
}

export function Button({
  variant,
  theme,
  size,
  className,
  type = 'button',
  ...props
}: ButtonProps) {
  const classes = [
    'btn',
    variant ? `btn-${variant}` : undefined,
    theme ? `theme-${theme}` : undefined,
    size && `btn-${size}`,
    className,
  ]
    .filter(Boolean)
    .join(' ');

  return <button {...props} className={classes} type={type} />;
}

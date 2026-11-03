import type { ButtonTheme, ButtonVariant } from 'react-bootstrap-pro';

export const themeOptions = [
  'primary',
  'accent',
  'success',
  'danger',
  'warning',
  'info',
  'inverse',
  'secondary',
] as const satisfies readonly ButtonTheme[];

export const variantOptions = [
  'solid',
  'outline',
  'subtle',
  'text',
  'link',
] as const satisfies readonly ButtonVariant[];

export const sizeOptions = ['default', 'xs', 'sm', 'lg'] as const;
export const contentOptions = ['text', 'left-icon', 'right-icon', 'icon-only'] as const;
export const roundingOptions = ['default', 'pill', 'square'] as const;

export function isOption<const T extends readonly string[]>(
  options: T,
  value: string,
): value is T[number] {
  return options.some((option) => option === value);
}

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

export function AddIcon({ size = 16 }: { size?: number }) {
  return (
    <svg
      aria-hidden='true'
      width={size}
      height={size}
      viewBox='0 0 16 16'
      fill='none'
      stroke='currentColor'
      strokeWidth='2'
      strokeLinecap='round'
    >
      <path d='M8 3v10M3 8h10' />
    </svg>
  );
}

export function ArrowRightIcon() {
  return (
    <svg
      aria-hidden='true'
      width='16'
      height='16'
      viewBox='0 0 16 16'
      fill='none'
      stroke='currentColor'
      strokeWidth='2'
      strokeLinecap='round'
      strokeLinejoin='round'
    >
      <path d='M3 8h10M8 3l5 5-5 5' />
    </svg>
  );
}

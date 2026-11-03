import type { ElementType } from 'react';

import { ClassedBox, type BoxComponentProps } from './shared';

export type CloseButtonProps<C extends ElementType = 'button'> = BoxComponentProps<
  C,
  { label?: string | undefined }
>;

export function CloseButton<C extends ElementType = 'button'>({
  component,
  className,
  label = 'Close',
  type,
  ...props
}: CloseButtonProps<C>) {
  return (
    <ClassedBox<C>
      {...props}
      baseClass='btn-close'
      component={component}
      defaultComponent={'button' as C}
      className={className}
      type={type ?? 'button'}
      aria-label={props['aria-label'] ?? label}
    />
  );
}

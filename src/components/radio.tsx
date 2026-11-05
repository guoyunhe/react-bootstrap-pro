import clsx from 'clsx';
import type { ElementType } from 'react';

import { ClassedBox, type ComponentProps, type ValidationState } from './shared';

export type RadioSize = 'sm' | 'lg';

export type RadioProps<C extends ElementType = 'input'> = ComponentProps<
  C,
  { size?: RadioSize | undefined; validation?: ValidationState | undefined }
>;

export function Radio<C extends ElementType = 'input'>({
  component,
  className,
  size,
  validation,
  type,
  ...props
}: RadioProps<C>) {
  return (
    <ClassedBox<C>
      {...props}
      baseClass={clsx('radio', size && `radio-${size}`, validation && `is-${validation}`)}
      component={component}
      defaultComponent={'input' as C}
      className={className}
      type={type ?? 'radio'}
    />
  );
}

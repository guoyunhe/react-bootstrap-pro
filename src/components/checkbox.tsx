import clsx from 'clsx';
import type { ElementType } from 'react';

import { ClassedBox, type BoxComponentProps, type ValidationState } from './shared';

export type CheckboxSize = 'sm' | 'lg';

export type CheckboxProps<C extends ElementType = 'input'> = BoxComponentProps<
  C,
  { size?: CheckboxSize | undefined; validation?: ValidationState | undefined }
>;

export function Checkbox<C extends ElementType = 'input'>({
  component,
  className,
  size,
  validation,
  type,
  ...props
}: CheckboxProps<C>) {
  return (
    <ClassedBox<C>
      {...props}
      baseClass={clsx('check', size && `check-${size}`, validation && `is-${validation}`)}
      component={component}
      defaultComponent={'input' as C}
      className={className}
      type={type ?? 'checkbox'}
    />
  );
}

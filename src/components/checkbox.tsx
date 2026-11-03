import clsx from 'clsx';
import type { ElementType } from 'react';

import { ClassedBox, type BoxComponentProps } from './shared';

export type CheckboxSize = 'sm' | 'lg';

export type CheckboxProps<C extends ElementType = 'input'> = BoxComponentProps<
  C,
  { size?: CheckboxSize | undefined }
>;

export function Checkbox<C extends ElementType = 'input'>({
  component,
  className,
  size,
  type,
  ...props
}: CheckboxProps<C>) {
  return (
    <ClassedBox<C>
      {...props}
      baseClass={clsx('check', size && `check-${size}`)}
      component={component}
      defaultComponent={'input' as C}
      className={className}
      type={type ?? 'checkbox'}
    />
  );
}

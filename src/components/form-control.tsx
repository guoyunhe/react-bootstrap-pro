import clsx from 'clsx';
import type { ElementType } from 'react';

import { ClassedBox, type BoxComponentProps } from './shared';

export type FormControlSize = 'sm' | 'lg';

export type FormControlProps<C extends ElementType = 'input'> = BoxComponentProps<
  C,
  { size?: FormControlSize | undefined }
>;

export function FormControl<C extends ElementType = 'input'>({
  component,
  className,
  size,
  ...props
}: FormControlProps<C>) {
  return (
    <ClassedBox<C>
      {...props}
      baseClass={clsx('form-control', size && `form-control-${size}`)}
      component={component}
      defaultComponent={'input' as C}
      className={className}
    />
  );
}

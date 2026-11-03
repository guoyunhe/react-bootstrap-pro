import clsx from 'clsx';
import type { ElementType } from 'react';

import { ClassedBox, type BoxComponentProps } from './shared';

export type FormCheckSize = 'sm' | 'lg';

export type FormCheckProps<C extends ElementType = 'input'> = BoxComponentProps<
  C,
  { size?: FormCheckSize | undefined }
>;

export function FormCheck<C extends ElementType = 'input'>({
  component,
  className,
  size,
  type,
  ...props
}: FormCheckProps<C>) {
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

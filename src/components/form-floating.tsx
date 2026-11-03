import clsx from 'clsx';
import type { ElementType } from 'react';

import { ClassedBox, type BoxComponentProps } from './shared';

export type FormFloatingProps<C extends ElementType = 'div'> = BoxComponentProps<
  C,
  { always?: boolean | undefined }
>;

export function FormFloating<C extends ElementType = 'div'>({
  component,
  className,
  always,
  ...props
}: FormFloatingProps<C>) {
  return (
    <ClassedBox<C>
      {...props}
      baseClass={clsx('form-floating', always && 'form-floating-always')}
      component={component}
      defaultComponent={'div' as C}
      className={className}
    />
  );
}

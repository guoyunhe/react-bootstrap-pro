import type { ElementType } from 'react';

import { ClassedBox, type BoxComponentProps } from './shared';

export type FormLabelProps<C extends ElementType = 'label'> = BoxComponentProps<C>;

export function FormLabel<C extends ElementType = 'label'>({
  component,
  className,
  ...props
}: FormLabelProps<C>) {
  return (
    <ClassedBox<C>
      {...props}
      baseClass='form-label'
      component={component}
      defaultComponent={'label' as C}
      className={className}
    />
  );
}

import type { ElementType } from 'react';

import { ClassedBox, type ComponentProps } from './shared';

export type FormFieldProps<C extends ElementType = 'div'> = ComponentProps<C>;

export function FormField<C extends ElementType = 'div'>({
  component,
  className,
  ...props
}: FormFieldProps<C>) {
  return (
    <ClassedBox<C>
      {...props}
      baseClass='form-field'
      component={component}
      defaultComponent={'div' as C}
      className={className}
    />
  );
}

import type { ElementType } from 'react';

import { ClassedBox, type ComponentProps } from './shared';

export type FormFieldContentProps<C extends ElementType = 'div'> = ComponentProps<C>;

export function FormFieldContent<C extends ElementType = 'div'>({
  component,
  className,
  ...props
}: FormFieldContentProps<C>) {
  return (
    <ClassedBox<C>
      {...props}
      baseClass='form-field-content'
      component={component}
      defaultComponent={'div' as C}
      className={className}
    />
  );
}

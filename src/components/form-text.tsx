import type { ElementType } from 'react';

import { ClassedBox, type ComponentProps } from './shared';

export type FormTextProps<C extends ElementType = 'div'> = ComponentProps<C>;

export function FormText<C extends ElementType = 'div'>({
  component,
  className,
  ...props
}: FormTextProps<C>) {
  return (
    <ClassedBox<C>
      {...props}
      baseClass='form-text'
      component={component}
      defaultComponent={'div' as C}
      className={className}
    />
  );
}

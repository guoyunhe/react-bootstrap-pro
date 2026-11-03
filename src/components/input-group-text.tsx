import type { ElementType } from 'react';

import { ClassedBox, type BoxComponentProps } from './shared';

export type InputGroupTextProps<C extends ElementType = 'span'> = BoxComponentProps<C>;

export function InputGroupText<C extends ElementType = 'span'>({
  component,
  className,
  ...props
}: InputGroupTextProps<C>) {
  return (
    <ClassedBox<C>
      {...props}
      baseClass='input-group-text'
      component={component}
      defaultComponent={'span' as C}
      className={className}
    />
  );
}

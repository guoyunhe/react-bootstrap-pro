import clsx from 'clsx';
import type { ElementType } from 'react';

import { ClassedBox, type ComponentProps } from './shared';

export type InputGroupSize = 'sm' | 'lg';

export type InputGroupProps<C extends ElementType = 'div'> = ComponentProps<
  C,
  { size?: InputGroupSize | undefined }
>;

export function InputGroup<C extends ElementType = 'div'>({
  component,
  className,
  size,
  ...props
}: InputGroupProps<C>) {
  return (
    <ClassedBox<C>
      {...props}
      baseClass={clsx('input-group', size && `input-group-${size}`)}
      component={component}
      defaultComponent={'div' as C}
      className={className}
    />
  );
}

import type { ElementType } from 'react';

import { ClassedBox, type ComponentProps } from './shared';

export type TableBodyProps<C extends ElementType = 'tbody'> = ComponentProps<
  C,
  { divider?: boolean | undefined }
>;

export function TableBody<C extends ElementType = 'tbody'>({
  component,
  className,
  divider,
  ...props
}: TableBodyProps<C>) {
  return (
    <ClassedBox<C>
      {...props}
      baseClass={divider ? 'table-group-divider' : ''}
      component={component}
      defaultComponent={'tbody' as C}
      className={className}
    />
  );
}

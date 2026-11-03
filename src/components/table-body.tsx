import type { ElementType } from 'react';

import { ClassedBox, type BoxComponentProps } from './shared';

export type TableBodyProps<C extends ElementType = 'tbody'> = BoxComponentProps<
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

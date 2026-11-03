import type { ElementType } from 'react';

import { ClassedBox, type BoxComponentProps } from './shared';

export type TableFootProps<C extends ElementType = 'tfoot'> = BoxComponentProps<
  C,
  { divider?: boolean | undefined }
>;

export function TableFoot<C extends ElementType = 'tfoot'>({
  component,
  className,
  divider,
  ...props
}: TableFootProps<C>) {
  return (
    <ClassedBox<C>
      {...props}
      baseClass={divider ? 'table-group-divider' : ''}
      component={component}
      defaultComponent={'tfoot' as C}
      className={className}
    />
  );
}

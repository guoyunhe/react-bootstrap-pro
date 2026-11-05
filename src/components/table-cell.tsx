import clsx from 'clsx';
import type { ElementType } from 'react';

import { ClassedBox, type ComponentProps } from './shared';

export type TableCellProps<C extends ElementType = 'td'> = ComponentProps<
  C,
  {
    active?: boolean | undefined;
    /** Label shown by the row when the table is stacked. */
    cell?: string | undefined;
  }
>;

export function TableCell<C extends ElementType = 'td'>({
  component,
  className,
  active,
  cell,
  ...props
}: TableCellProps<C>) {
  return (
    <ClassedBox<C>
      {...props}
      baseClass={clsx(active && 'table-active')}
      component={component}
      defaultComponent={'td' as C}
      className={className}
      data-cell={cell}
    />
  );
}

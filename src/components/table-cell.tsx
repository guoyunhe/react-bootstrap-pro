import clsx from 'clsx';
import type { ElementType } from 'react';

import { Box } from './box';
import { type ComponentProps } from './shared';

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
    <Box<C>
      {...props}
      component={component ?? ('td' as C)}
      classNameBefore={clsx(active && 'table-active', props.classNameBefore)}
      className={className}
      data-cell={cell}
    />
  );
}

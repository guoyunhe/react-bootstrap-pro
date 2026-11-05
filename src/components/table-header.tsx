import clsx from 'clsx';
import type { ElementType } from 'react';

import { ClassedBox, type ComponentProps } from './shared';

export type TableHeaderProps<C extends ElementType = 'th'> = ComponentProps<
  C,
  {
    active?: boolean | undefined;
    /** Label shown by the row when the table is stacked. */
    cell?: string | undefined;
  }
>;

export function TableHeader<C extends ElementType = 'th'>({
  component,
  className,
  active,
  cell,
  ...props
}: TableHeaderProps<C>) {
  return (
    <ClassedBox<C>
      {...props}
      baseClass={clsx(active && 'table-active')}
      component={component}
      defaultComponent={'th' as C}
      className={className}
      data-cell={cell}
    />
  );
}

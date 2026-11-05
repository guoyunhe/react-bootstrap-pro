import clsx from 'clsx';
import type { ElementType } from 'react';

import { Box } from './box';
import type { BoxProps } from './box';
import { type ComponentProps } from './shared';

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
    <Box<C>
      {...(props as BoxProps<C>)}
      component={component ?? ('th' as C)}
      classNameBefore={clsx(active && 'table-active', props.classNameBefore)}
      className={className}
      data-cell={cell}
    />
  );
}

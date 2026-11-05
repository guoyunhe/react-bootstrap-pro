import clsx from 'clsx';
import type { ElementType } from 'react';

import { type ComponentProps } from '../types';
import { Box } from './box';
import type { BoxProps } from './box';
import type { GridBreakpoint } from './grid';

export type TableBreakpoint = Exclude<GridBreakpoint, 'xs'>;

function breakpointClass(utility: string, value: boolean | TableBreakpoint) {
  return value === true ? utility : `${value}:${utility}`;
}

type TableOwnProps = {
  /** Zebra-stripes the rows in the `<tbody>`. */
  striped?: boolean | undefined;
  /** Zebra-stripes the columns. */
  stripedColumns?: boolean | undefined;
  /** Enables a hover state on rows in the `<tbody>`. */
  hover?: boolean | undefined;
  bordered?: boolean | undefined;
  borderless?: boolean | undefined;
  /** Cuts cell padding in half. */
  small?: boolean | undefined;
  /** Wraps the table in `.table-card` for a bordered, rounded table. */
  card?: boolean | undefined;
  /** Places the caption above the table. */
  captionTop?: boolean | undefined;
  /** Stacks rows into blocks; requires the responsive wrapper. */
  stacked?: boolean | TableBreakpoint | undefined;
  /** Wraps the table in `.table-responsive`, optionally up to a breakpoint. */
  responsive?: boolean | TableBreakpoint | undefined;
};

export type TableProps<C extends ElementType = 'table'> = TableOwnProps &
  Omit<ComponentProps<C>, keyof TableOwnProps>;

export function Table<C extends ElementType = 'table'>({
  component,
  className,
  striped,
  stripedColumns,
  hover,
  bordered,
  borderless,
  small,
  card,
  captionTop,
  stacked,
  responsive,
  ...props
}: TableProps<C>) {
  const table = (
    <Box<C>
      {...(props as BoxProps<C>)}
      component={component ?? ('table' as C)}
      classNameBefore={clsx(
        'table',
        striped && 'table-striped',
        stripedColumns && 'table-striped-columns',
        hover && 'table-hover',
        bordered && 'table-bordered',
        borderless && 'table-borderless',
        small && 'table-sm',
        captionTop && 'caption-top',
        stacked && breakpointClass('table-stacked', stacked),
        props.classNameBefore,
      )}
      className={className}
    />
  );

  if (!responsive && !card && !stacked) {
    return table;
  }

  return (
    <div
      className={clsx(
        responsive && breakpointClass('table-responsive', responsive),
        card && 'table-card',
        // Stacked tables need the responsive wrapper as their container query context.
        stacked && !responsive && 'table-responsive',
      )}
    >
      {table}
    </div>
  );
}

import clsx from 'clsx';
import type { HTMLAttributes } from 'react';

export type GridBreakpoint = 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl';

export type GridResponsive<T> = T | Partial<Record<GridBreakpoint, T>>;

export type GridSpan = number | 'auto';
export type GridOrder = number | 'first' | 'last';

const breakpoints: readonly GridBreakpoint[] = ['xs', 'sm', 'md', 'lg', 'xl', '2xl'];

function getResponsiveClasses<T extends number | string>(
  utility: string,
  value: GridResponsive<T> | undefined,
) {
  if (value === undefined) {
    return [];
  }

  if (typeof value !== 'object') {
    return [`${utility}-${value}`];
  }

  return breakpoints.flatMap((breakpoint) => {
    const breakpointValue = value[breakpoint];
    if (breakpointValue === undefined) {
      return [];
    }

    const prefix = breakpoint === 'xs' ? '' : `${breakpoint}:`;
    return [`${prefix}${utility}-${breakpointValue}`];
  });
}

export type RowProps = HTMLAttributes<HTMLDivElement> & {
  cols?: GridResponsive<number | 'auto'>;
  gutter?: GridResponsive<number>;
  gutterX?: GridResponsive<number>;
  gutterY?: GridResponsive<number>;
};

export function Row({ cols, gutter, gutterX, gutterY, className, ...props }: RowProps) {
  const classes = clsx(
    'row',
    getResponsiveClasses('row-cols', cols),
    getResponsiveClasses('g', gutter),
    getResponsiveClasses('gx', gutterX),
    getResponsiveClasses('gy', gutterY),
    className,
  );

  return <div {...props} className={classes} />;
}

export type ColProps = HTMLAttributes<HTMLDivElement> & {
  span?: GridResponsive<GridSpan>;
  offset?: GridResponsive<number>;
  order?: GridResponsive<GridOrder>;
};

export function Col({ span, offset, order, className, ...props }: ColProps) {
  const spanClasses = span === undefined ? ['col'] : getResponsiveClasses('col', span);
  const classes = clsx(
    spanClasses,
    getResponsiveClasses('offset', offset),
    getResponsiveClasses('order', order),
    className,
  );

  return <div {...props} className={classes} />;
}

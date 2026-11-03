import clsx from 'clsx';
import type { ElementType } from 'react';

import { Box, type BoxProps } from './box';

export type GridBreakpoint = 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl';

export type GridResponsive<T> = T | Partial<Record<GridBreakpoint, T>>;

export type GridSpan = number | 'auto' | true;
export type GridOrder = number | 'first' | 'last';
export type GridAlignItems = 'start' | 'center' | 'end' | 'baseline' | 'stretch';
export type GridAlignSelf = 'auto' | GridAlignItems;
export type GridJustifyContent = 'start' | 'center' | 'end' | 'around' | 'between' | 'evenly';

const breakpoints: readonly GridBreakpoint[] = ['xs', 'sm', 'md', 'lg', 'xl', '2xl'];

function getResponsiveClasses<T extends number | string | boolean>(
  utility: string,
  value: GridResponsive<T> | undefined,
) {
  if (value === undefined) {
    return [];
  }

  if (typeof value !== 'object') {
    return [value === true ? utility : `${utility}-${value}`];
  }

  return breakpoints.flatMap((breakpoint) => {
    const breakpointValue = value[breakpoint];
    if (breakpointValue === undefined) {
      return [];
    }

    const prefix = breakpoint === 'xs' ? '' : `${breakpoint}:`;
    return [
      breakpointValue === true ? `${prefix}${utility}` : `${prefix}${utility}-${breakpointValue}`,
    ];
  });
}

type RowOwnProps = {
  alignItems?: GridResponsive<GridAlignItems> | undefined;
  cols?: GridResponsive<number | 'auto'> | undefined;
  gutter?: GridResponsive<number> | undefined;
  gutterX?: GridResponsive<number> | undefined;
  gutterY?: GridResponsive<number> | undefined;
  justifyContent?: GridResponsive<GridJustifyContent> | undefined;
};

export type RowProps<C extends ElementType = 'div'> = RowOwnProps &
  Omit<BoxProps<C>, keyof RowOwnProps>;

export function Row<C extends ElementType = 'div'>({
  alignItems,
  cols,
  gutter,
  gutterX,
  gutterY,
  justifyContent,
  className,
  ...props
}: RowProps<C>) {
  const classes = clsx(
    'row',
    getResponsiveClasses('align-items', alignItems),
    getResponsiveClasses('row-cols', cols),
    getResponsiveClasses('g', gutter),
    getResponsiveClasses('gx', gutterX),
    getResponsiveClasses('gy', gutterY),
    getResponsiveClasses('justify-content', justifyContent),
    className,
  );

  const boxProps = { ...props, className: classes } as BoxProps<C>;

  return <Box {...boxProps} />;
}

type ColOwnProps = {
  alignSelf?: GridResponsive<GridAlignSelf> | undefined;
  span?: GridResponsive<GridSpan> | undefined;
  offset?: GridResponsive<number> | undefined;
  order?: GridResponsive<GridOrder> | undefined;
};

export type ColProps<C extends ElementType = 'div'> = ColOwnProps &
  Omit<BoxProps<C>, keyof ColOwnProps>;

export function Col<C extends ElementType = 'div'>({
  alignSelf,
  span,
  offset,
  order,
  className,
  ...props
}: ColProps<C>) {
  const spanClasses = span === undefined ? ['col'] : getResponsiveClasses('col', span);
  const classes = clsx(
    spanClasses,
    getResponsiveClasses('offset', offset),
    getResponsiveClasses('order', order),
    getResponsiveClasses('align-self', alignSelf),
    className,
  );

  const boxProps = { ...props, className: classes } as BoxProps<C>;

  return <Box {...boxProps} />;
}

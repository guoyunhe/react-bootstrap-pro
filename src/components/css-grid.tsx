import clsx from 'clsx';
import type { CSSProperties, ElementType } from 'react';

import { Box } from './box';
import type { BoxProps } from './box';

export type CssGridBreakpoint = 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl';

export type CssGridResponsive<T> = T | Partial<Record<CssGridBreakpoint, T>>;

export type CssGridItemSpan = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12;
export type CssGridItemStart = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11;

const breakpoints: readonly CssGridBreakpoint[] = ['xs', 'sm', 'md', 'lg', 'xl', '2xl'];

function getResponsiveClasses(utility: string, value: CssGridResponsive<number> | undefined) {
  if (value === undefined) {
    return [];
  }

  if (typeof value === 'number') {
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

export type CssGridStyle = CSSProperties & {
  '--bs-columns'?: number | undefined;
  '--bs-rows'?: number | undefined;
  '--bs-gap'?: string | undefined;
};

type CssGridOwnProps = {
  columns?: number | undefined;
  rows?: number | undefined;
};

export type CssGridProps<C extends ElementType = 'div'> = CssGridOwnProps &
  Omit<BoxProps<C>, keyof CssGridOwnProps | 'style'> & {
    style?: CssGridStyle | undefined;
  };

export function Grid<C extends ElementType = 'div'>({
  columns,
  rows,
  style,
  classNameBefore,
  className,
  ...props
}: CssGridProps<C>) {
  const gridStyle =
    columns === undefined && rows === undefined
      ? style
      : {
          ...style,
          ...(columns === undefined ? {} : { '--bs-columns': columns }),
          ...(rows === undefined ? {} : { '--bs-rows': rows }),
        };
  const boxProps = {
    ...props,
    style: gridStyle,
    classNameBefore: clsx('grid', classNameBefore),
    className,
  } as BoxProps<C>;

  return <Box<C> {...boxProps} />;
}

type CssGridItemOwnProps = {
  span?: CssGridResponsive<CssGridItemSpan> | undefined;
  start?: CssGridResponsive<CssGridItemStart> | undefined;
};

export type CssGridItemProps<C extends ElementType = 'div'> = CssGridItemOwnProps &
  Omit<BoxProps<C>, keyof CssGridItemOwnProps>;

export function GridItem<C extends ElementType = 'div'>({
  span,
  start,
  classNameBefore,
  className,
  ...props
}: CssGridItemProps<C>) {
  const classes = clsx(
    getResponsiveClasses('g-col', span),
    getResponsiveClasses('g-start', start),
    classNameBefore,
  );
  const boxProps = {
    ...props,
    classNameBefore: classes,
    className,
  } as BoxProps<C>;

  return <Box<C> {...boxProps} />;
}

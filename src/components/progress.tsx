import clsx from 'clsx';
import {
  createContext,
  useContext,
  type CSSProperties,
  type ElementType,
  type ReactNode,
} from 'react';

import { Box } from './box';
import type { BoxProps } from './box';

export type ProgressBarProps = Omit<BoxProps<'div'>, 'children'>;

type ProgressOwnProps = {
  animated?: boolean | undefined;
  barProps?: ProgressBarProps | undefined;
  children?: ReactNode;
  label: string;
  max?: number | undefined;
  min?: number | undefined;
  striped?: boolean | undefined;
  value?: number | undefined;
};

export type ProgressProps<C extends ElementType = 'div'> = Omit<
  BoxProps<C>,
  keyof ProgressOwnProps
> &
  ProgressOwnProps;

export type ProgressStackedProps<C extends ElementType = 'div'> = BoxProps<C> & {
  label?: string | undefined;
};

const ProgressStackedContext = createContext(false);

function toPercentage(value: number | undefined, max: number) {
  if (value === undefined) {
    return undefined;
  }

  return `${max > 0 ? (value / max) * 100 : 0}%`;
}

export function ProgressStacked<C extends ElementType = 'div'>({
  component,
  className,
  label,
  role,
  style,
  children,
  ...props
}: ProgressStackedProps<C>) {
  return (
    <ProgressStackedContext.Provider value={true}>
      <Box<C>
        {...(props as BoxProps<C>)}
        component={component ?? ('div' as C)}
        classNameBefore={clsx('progress-stacked', props.classNameBefore)}
        className={className}
        style={style}
        role={role ?? 'group'}
        aria-label={label ?? props['aria-label']}
      >
        {children}
      </Box>
    </ProgressStackedContext.Provider>
  );
}

export function Progress<C extends ElementType = 'div'>({
  component,
  className,
  children,
  label,
  max = 100,
  min = 0,
  value,
  striped,
  animated,
  barProps,
  style,
  role,
  ...props
}: ProgressProps<C>) {
  const nested = useContext(ProgressStackedContext);
  const width = toPercentage(value, max);
  const segmentWidth = nested && style?.width === undefined ? width : undefined;
  const barWidth =
    nested || barProps?.w !== undefined || barProps?.style?.width !== undefined ? undefined : width;
  const barStyle: CSSProperties = {
    ...(barWidth ? { width: barWidth } : {}),
    ...barProps?.style,
  };

  return (
    <Box<C>
      {...(props as BoxProps<C>)}
      component={component ?? ('div' as C)}
      classNameBefore={clsx('progress', props.classNameBefore)}
      className={className}
      style={{ ...style, ...(segmentWidth ? { width: segmentWidth } : {}) }}
      role={role ?? 'progressbar'}
      aria-label={label ?? props['aria-label']}
      aria-valuemin={min}
      aria-valuemax={max}
      aria-valuenow={value}
    >
      <Box
        {...barProps}
        classNameBefore={clsx(
          'progress-bar',
          striped && 'progress-bar-striped',
          animated && 'progress-bar-animated',
          barProps?.classNameBefore,
        )}
        style={barStyle}
      >
        {children}
      </Box>
    </Box>
  );
}

import clsx from 'clsx';
import type { ElementType } from 'react';

import { type ComponentProps } from '../types';
import { Box } from './box';
import type { BoxProps } from './box';

export type ProgressProps<C extends ElementType = 'div'> = ComponentProps<
  C,
  {
    label: string;
    max?: number | undefined;
    min?: number | undefined;
    value?: number | undefined;
  }
>;

export function Progress<C extends ElementType = 'div'>({
  component,
  className,
  label,
  max = 100,
  min = 0,
  value,
  role,
  ...props
}: ProgressProps<C>) {
  return (
    <Box<C>
      {...(props as BoxProps<C>)}
      component={component ?? ('div' as C)}
      classNameBefore={clsx('progress', props.classNameBefore)}
      className={className}
      role={role ?? 'progressbar'}
      aria-label={label ?? props['aria-label']}
      aria-valuemin={min}
      aria-valuemax={max}
      aria-valuenow={value}
    />
  );
}

export type ProgressBarProps<C extends ElementType = 'div'> = ComponentProps<
  C,
  {
    animated?: boolean | undefined;
    max?: number | undefined;
    striped?: boolean | undefined;
    value?: number | undefined;
  }
>;

export function ProgressBar<C extends ElementType = 'div'>({
  component,
  className,
  animated,
  max = 100,
  striped,
  style,
  value,
  ...props
}: ProgressBarProps<C>) {
  const width = value === undefined ? undefined : `${max > 0 ? (value / max) * 100 : 0}%`;
  return (
    <Box<C>
      {...(props as BoxProps<C>)}
      component={component ?? ('div' as C)}
      classNameBefore={clsx(
        'progress-bar',
        striped && 'progress-bar-striped',
        animated && 'progress-bar-animated',
        props.classNameBefore,
      )}
      className={className}
      style={{ ...style, ...(width ? { width } : {}) }}
    />
  );
}

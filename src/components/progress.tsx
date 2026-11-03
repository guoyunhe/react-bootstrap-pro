import clsx from 'clsx';
import type { ElementType } from 'react';

import { ClassedBox, type BoxComponentProps } from './shared';

export type ProgressProps<C extends ElementType = 'div'> = BoxComponentProps<
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
    <ClassedBox<C>
      {...props}
      baseClass='progress'
      component={component}
      defaultComponent={'div' as C}
      className={className}
      role={role ?? 'progressbar'}
      aria-label={label ?? props['aria-label']}
      aria-valuemin={min}
      aria-valuemax={max}
      aria-valuenow={value}
    />
  );
}

export type ProgressBarProps<C extends ElementType = 'div'> = BoxComponentProps<
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
    <ClassedBox<C>
      {...props}
      baseClass={clsx(
        'progress-bar',
        striped && 'progress-bar-striped',
        animated && 'progress-bar-animated',
      )}
      component={component}
      defaultComponent={'div' as C}
      className={className}
      style={{ ...style, ...(width ? { width } : {}) }}
    />
  );
}

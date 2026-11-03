import clsx from 'clsx';
import type { ElementType } from 'react';

import type { BoxProps } from './box';
import { ClassedBox, type BoxComponentProps } from './shared';

export type TooltipProps<C extends ElementType = 'div'> = BoxComponentProps<
  C,
  {
    instant?: boolean | undefined;
    placement?: 'top' | 'end' | 'bottom' | 'start' | undefined;
    show?: boolean | undefined;
  }
>;

export function Tooltip<C extends ElementType = 'div'>({
  component,
  className,
  instant,
  placement,
  show,
  ...props
}: TooltipProps<C>) {
  return (
    <ClassedBox<C>
      {...props}
      baseClass={clsx(
        'tooltip',
        placement && `bs-tooltip-${placement}`,
        instant && 'tooltip-instant',
        show && 'show',
      )}
      component={component}
      defaultComponent={'div' as C}
      className={className}
    />
  );
}

export type TooltipInnerProps<C extends ElementType = 'div'> = BoxProps<C>;

export function TooltipInner<C extends ElementType = 'div'>({
  component,
  className,
  ...props
}: TooltipInnerProps<C>) {
  return (
    <ClassedBox<C>
      {...props}
      baseClass='tooltip-inner'
      component={component}
      defaultComponent={'div' as C}
      className={className}
    />
  );
}

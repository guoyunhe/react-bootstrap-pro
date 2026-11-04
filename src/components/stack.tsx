import clsx from 'clsx';
import type { ElementType } from 'react';

import type { BoxBreakpoint, BoxResponsive } from './box';
import { ClassedBox, type BoxComponentProps } from './shared';

export type StackDirection = 'horizontal' | 'vertical';

type StackOwnProps = {
  direction?: BoxResponsive<StackDirection> | undefined;
};

export type StackProps<C extends ElementType = 'div'> = StackOwnProps &
  Omit<BoxComponentProps<C>, keyof StackOwnProps>;

const breakpoints: readonly BoxBreakpoint[] = ['xs', 'sm', 'md', 'lg', 'xl', '2xl'];

function directionClass(direction: StackDirection) {
  return direction === 'horizontal' ? 'hstack' : 'vstack';
}

function getStackClass(direction: BoxResponsive<StackDirection> | undefined) {
  if (typeof direction !== 'object' || direction === null) {
    return directionClass(direction ?? 'vertical');
  }

  const baseDirection = direction.xs ?? 'vertical';
  const responsiveClasses = breakpoints.slice(1).flatMap((breakpoint) => {
    const breakpointDirection = direction[breakpoint];
    return breakpointDirection === undefined
      ? []
      : [`${breakpoint}:${directionClass(breakpointDirection)}`];
  });

  return clsx(directionClass(baseDirection), ...responsiveClasses);
}

export function Stack<C extends ElementType = 'div'>({
  direction,
  component,
  className,
  ...props
}: StackProps<C>) {
  return (
    <ClassedBox<C>
      {...props}
      baseClass={getStackClass(direction)}
      component={component}
      defaultComponent={'div' as C}
      className={className}
    />
  );
}

export type StackContainerProps<C extends ElementType = 'div'> = BoxComponentProps<C>;

export function StackContainer<C extends ElementType = 'div'>({
  component,
  className,
  ...props
}: StackContainerProps<C>) {
  return (
    <ClassedBox<C>
      {...props}
      baseClass='stack-container'
      component={component}
      defaultComponent={'div' as C}
      className={className}
    />
  );
}

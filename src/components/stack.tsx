import clsx from 'clsx';
import type { ElementType } from 'react';

import { type ComponentProps } from '../types';
import type { Breakpoint, Responsive } from '../types';
import { Box } from './box';
import type { BoxProps } from './box';

export type StackDirection = 'horizontal' | 'vertical';

type StackOwnProps = {
  direction?: Responsive<StackDirection> | undefined;
};

export type StackProps<C extends ElementType = 'div'> = StackOwnProps &
  Omit<ComponentProps<C>, keyof StackOwnProps>;

const breakpoints: readonly Breakpoint[] = ['xs', 'sm', 'md', 'lg', 'xl', '2xl'];

function directionClass(direction: StackDirection) {
  return direction === 'horizontal' ? 'hstack' : 'vstack';
}

function getStackClass(direction: Responsive<StackDirection> | undefined) {
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
    <Box<C>
      {...(props as BoxProps<C>)}
      component={component ?? ('div' as C)}
      classNameBefore={clsx(getStackClass(direction), props.classNameBefore)}
      className={className}
    />
  );
}

export type StackContainerProps<C extends ElementType = 'div'> = ComponentProps<C>;

export function StackContainer<C extends ElementType = 'div'>({
  component,
  className,
  ...props
}: StackContainerProps<C>) {
  return (
    <Box<C>
      {...(props as BoxProps<C>)}
      component={component ?? ('div' as C)}
      classNameBefore={clsx('stack-container', props.classNameBefore)}
      className={className}
    />
  );
}

import clsx from 'clsx';
import type { ElementType } from 'react';

import { Box } from './box';
import type { BoxProps } from './box';

export type ContainerBreakpoint = 'sm' | 'md' | 'lg' | 'xl' | '2xl';

type ContainerOwnProps = {
  fluid?: boolean | ContainerBreakpoint | undefined;
};

export type ContainerProps<C extends ElementType = 'div'> = ContainerOwnProps &
  Omit<BoxProps<C>, keyof ContainerOwnProps>;

export function Container<C extends ElementType = 'div'>({
  fluid,
  className,
  classNameBefore,
  ...props
}: ContainerProps<C>) {
  let containerClass = 'container';
  if (fluid === true) {
    containerClass = 'container-fluid';
  } else if (typeof fluid === 'string') {
    containerClass = `${fluid}:container`;
  }

  const boxProps = {
    ...props,
    classNameBefore: clsx(containerClass, classNameBefore),
    className,
  } as BoxProps<C>;

  return <Box<C> {...boxProps} />;
}

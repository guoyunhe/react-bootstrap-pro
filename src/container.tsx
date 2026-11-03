import clsx from 'clsx';
import type { HTMLAttributes } from 'react';

export type ContainerBreakpoint = 'sm' | 'md' | 'lg' | 'xl' | '2xl';

export type ContainerProps = HTMLAttributes<HTMLDivElement> & {
  fluid?: boolean | ContainerBreakpoint;
};

export function Container({ fluid, className, ...props }: ContainerProps) {
  let containerClass = 'container';
  if (fluid === true) {
    containerClass = 'container-fluid';
  } else if (typeof fluid === 'string') {
    containerClass = `${fluid}:container`;
  }

  const classes = clsx(containerClass, className);

  return <div {...props} className={classes} />;
}

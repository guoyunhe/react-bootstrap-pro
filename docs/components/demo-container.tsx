import clsx from 'clsx';
import type { HTMLAttributes } from 'react';

export type DemoContainerProps = HTMLAttributes<HTMLDivElement>;

export function DemoContainer({ className, ...props }: DemoContainerProps) {
  const classes = clsx('border', 'rounded', 'p-5', 'my-5', className);

  return <div {...props} className={classes} />;
}

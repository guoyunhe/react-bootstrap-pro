import type { HTMLAttributes } from 'react';

export type DemoContainerProps = HTMLAttributes<HTMLDivElement>;

export function DemoContainer({ className, ...props }: DemoContainerProps) {
  const classes = ['border', 'rounded', 'p-3', 'my-3', className].filter(Boolean).join(' ');

  return <div {...props} className={classes} />;
}

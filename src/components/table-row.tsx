import clsx from 'clsx';
import type { ElementType } from 'react';

import { Box } from './box';
import { type ComponentProps } from './shared';

export type TableRowProps<C extends ElementType = 'tr'> = ComponentProps<
  C,
  { active?: boolean | undefined }
>;

export function TableRow<C extends ElementType = 'tr'>({
  component,
  className,
  active,
  ...props
}: TableRowProps<C>) {
  return (
    <Box<C>
      {...props}
      component={component ?? ('tr' as C)}
      classNameBefore={clsx(active && 'table-active', props.classNameBefore)}
      className={className}
    />
  );
}

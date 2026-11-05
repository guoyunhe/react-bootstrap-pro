import clsx from 'clsx';
import type { ElementType } from 'react';

import { Box } from './box';
import { type ComponentProps } from './shared';

export type TableHeadProps<C extends ElementType = 'thead'> = ComponentProps<
  C,
  { divider?: boolean | undefined }
>;

export function TableHead<C extends ElementType = 'thead'>({
  component,
  className,
  divider,
  ...props
}: TableHeadProps<C>) {
  return (
    <Box<C>
      {...props}
      component={component ?? ('thead' as C)}
      classNameBefore={clsx(divider ? 'table-group-divider' : '', props.classNameBefore)}
      className={className}
    />
  );
}

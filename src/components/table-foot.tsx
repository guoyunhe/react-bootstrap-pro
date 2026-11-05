import clsx from 'clsx';
import type { ElementType } from 'react';

import { Box } from './box';
import { type ComponentProps } from './shared';

export type TableFootProps<C extends ElementType = 'tfoot'> = ComponentProps<
  C,
  { divider?: boolean | undefined }
>;

export function TableFoot<C extends ElementType = 'tfoot'>({
  component,
  className,
  divider,
  ...props
}: TableFootProps<C>) {
  return (
    <Box<C>
      {...props}
      component={component ?? ('tfoot' as C)}
      classNameBefore={clsx(divider ? 'table-group-divider' : '', props.classNameBefore)}
      className={className}
    />
  );
}

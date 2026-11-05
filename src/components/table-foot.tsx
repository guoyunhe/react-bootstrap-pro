import clsx from 'clsx';
import type { ElementType } from 'react';

import { Box } from './box';
import type { BoxProps } from './box';
import { type ComponentProps } from './shared';

export type TableFootProps<C extends ElementType = 'tfoot'> = ComponentProps<
  C,
  { divider?: boolean | undefined }
>;

export function TableFoot<C extends ElementType = 'tfoot'>(props: TableFootProps<C>) {
  const { divider, ...boxProps } = props;

  return (
    <Box<C>
      {...(boxProps as BoxProps<C>)}
      component={props.component ?? ('tfoot' as C)}
      classNameBefore={clsx(divider ? 'table-group-divider' : '', props.classNameBefore)}
    />
  );
}

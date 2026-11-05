import clsx from 'clsx';
import type { ElementType } from 'react';

import { Box } from './box';
import type { BoxProps } from './box';

export type TableFootProps<C extends ElementType = 'tfoot'> = Omit<
  BoxProps<C>,
  keyof { divider?: boolean | undefined }
> & { divider?: boolean | undefined };

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

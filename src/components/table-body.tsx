import clsx from 'clsx';
import type { ElementType } from 'react';

import { Box } from './box';
import type { BoxProps } from './box';
import { type ComponentProps } from './shared';

export type TableBodyProps<C extends ElementType = 'tbody'> = ComponentProps<
  C,
  { divider?: boolean | undefined }
>;

export function TableBody<C extends ElementType = 'tbody'>({
  component,
  className,
  divider,
  ...props
}: TableBodyProps<C>) {
  return (
    <Box<C>
      {...(props as BoxProps<C>)}
      component={component ?? ('tbody' as C)}
      classNameBefore={clsx(divider ? 'table-group-divider' : '', props.classNameBefore)}
      className={className}
    />
  );
}

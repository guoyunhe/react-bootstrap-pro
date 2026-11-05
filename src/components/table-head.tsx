import clsx from 'clsx';
import type { ElementType } from 'react';

import { Box } from './box';
import type { BoxProps } from './box';

export type TableHeadProps<C extends ElementType = 'thead'> = Omit<
  BoxProps<C>,
  keyof { divider?: boolean | undefined }
> & { divider?: boolean | undefined };

export function TableHead<C extends ElementType = 'thead'>({
  component,
  className,
  divider,
  ...props
}: TableHeadProps<C>) {
  return (
    <Box<C>
      {...(props as BoxProps<C>)}
      component={component ?? ('thead' as C)}
      classNameBefore={clsx(divider ? 'table-group-divider' : '', props.classNameBefore)}
      className={className}
    />
  );
}

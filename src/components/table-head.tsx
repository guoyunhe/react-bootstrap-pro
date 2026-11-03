import type { ElementType } from 'react';

import { ClassedBox, type BoxComponentProps } from './shared';

export type TableHeadProps<C extends ElementType = 'thead'> = BoxComponentProps<
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
    <ClassedBox<C>
      {...props}
      baseClass={divider ? 'table-group-divider' : ''}
      component={component}
      defaultComponent={'thead' as C}
      className={className}
    />
  );
}

import clsx from 'clsx';
import type { ElementType } from 'react';

import { ClassedBox, type ComponentProps } from './shared';

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
    <ClassedBox<C>
      {...props}
      baseClass={clsx(active && 'table-active')}
      component={component}
      defaultComponent={'tr' as C}
      className={className}
    />
  );
}

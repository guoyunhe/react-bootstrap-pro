import clsx from 'clsx';
import type { ElementType } from 'react';

import { ClassedBox, type ComponentProps } from './shared';

export type CollapseProps<C extends ElementType = 'div'> = ComponentProps<
  C,
  { horizontal?: boolean | undefined; show?: boolean | undefined }
>;

export function Collapse<C extends ElementType = 'div'>({
  component,
  className,
  horizontal,
  show,
  ...props
}: CollapseProps<C>) {
  return (
    <ClassedBox<C>
      {...props}
      baseClass={clsx('collapse', horizontal && 'collapse-horizontal', show && 'show')}
      component={component}
      defaultComponent={'div' as C}
      className={className}
    />
  );
}

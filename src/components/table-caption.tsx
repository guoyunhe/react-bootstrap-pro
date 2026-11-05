import type { ElementType } from 'react';

import { ClassedBox, type ComponentProps } from './shared';

export type TableCaptionProps<C extends ElementType = 'caption'> = ComponentProps<C>;

export function TableCaption<C extends ElementType = 'caption'>({
  component,
  className,
  ...props
}: TableCaptionProps<C>) {
  return (
    <ClassedBox<C>
      {...props}
      baseClass=''
      component={component}
      defaultComponent={'caption' as C}
      className={className}
    />
  );
}

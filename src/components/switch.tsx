import clsx from 'clsx';
import type { ElementType } from 'react';

import { ClassedBox, type ComponentProps } from './shared';

export type SwitchSize = 'sm' | 'lg';

export type SwitchProps<C extends ElementType = 'div'> = ComponentProps<
  C,
  { size?: SwitchSize | undefined }
>;

export function Switch<C extends ElementType = 'div'>({
  component,
  className,
  size,
  ...props
}: SwitchProps<C>) {
  return (
    <ClassedBox<C>
      {...props}
      baseClass={clsx('switch', size && `switch-${size}`)}
      component={component}
      defaultComponent={'div' as C}
      className={className}
    />
  );
}

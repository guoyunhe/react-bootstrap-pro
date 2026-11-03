import clsx from 'clsx';
import type { ElementType } from 'react';

import { ClassedBox, type BoxComponentProps } from './shared';

export type SwitchSize = 'sm' | 'lg';

export type SwitchProps<C extends ElementType = 'div'> = BoxComponentProps<
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

import clsx from 'clsx';
import type { ElementType } from 'react';

import { Box } from './box';
import { type ComponentProps } from './shared';

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
    <Box<C>
      {...props}
      component={component ?? ('div' as C)}
      classNameBefore={clsx('switch', size && `switch-${size}`, props.classNameBefore)}
      className={className}
    />
  );
}

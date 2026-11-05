import clsx from 'clsx';
import type { ElementType } from 'react';

import { Box } from './box';
import type { BoxProps } from './box';

export type InputGroupSize = 'sm' | 'lg';

export type InputGroupProps<C extends ElementType = 'div'> = Omit<
  BoxProps<C>,
  keyof { size?: InputGroupSize | undefined }
> & { size?: InputGroupSize | undefined };

export function InputGroup<C extends ElementType = 'div'>({
  component,
  className,
  size,
  ...props
}: InputGroupProps<C>) {
  return (
    <Box<C>
      {...(props as BoxProps<C>)}
      component={component ?? ('div' as C)}
      classNameBefore={clsx('input-group', size && `input-group-${size}`, props.classNameBefore)}
      className={className}
    />
  );
}

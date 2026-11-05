import clsx from 'clsx';
import type { ElementType } from 'react';

import { Box } from './box';
import type { BoxProps } from './box';
import { type ComponentProps } from './shared';

export type InputGroupTextProps<C extends ElementType = 'span'> = ComponentProps<C>;

export function InputGroupText<C extends ElementType = 'span'>({
  component,
  className,
  ...props
}: InputGroupTextProps<C>) {
  return (
    <Box<C>
      {...(props as BoxProps<C>)}
      component={component ?? ('span' as C)}
      classNameBefore={clsx('input-group-text', props.classNameBefore)}
      className={className}
    />
  );
}

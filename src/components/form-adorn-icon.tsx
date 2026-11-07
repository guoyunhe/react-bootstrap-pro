import clsx from 'clsx';
import type { ElementType } from 'react';

import { Box } from './box';
import type { BoxProps } from './box';

export type FormAdornIconProps<C extends ElementType = 'div'> = BoxProps<C>;

export function FormAdornIcon<C extends ElementType = 'div'>({
  component,
  className,
  ...props
}: FormAdornIconProps<C>) {
  return (
    <Box<C>
      {...(props as BoxProps<C>)}
      component={component ?? ('div' as C)}
      classNameBefore={clsx('form-adorn-icon', props.classNameBefore)}
      className={className}
    />
  );
}

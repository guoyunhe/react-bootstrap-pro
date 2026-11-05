import clsx from 'clsx';
import type { ElementType } from 'react';

import { Box } from './box';
import { type ComponentProps } from './shared';

export type FormTextProps<C extends ElementType = 'div'> = ComponentProps<C>;

export function FormText<C extends ElementType = 'div'>({
  component,
  className,
  ...props
}: FormTextProps<C>) {
  return (
    <Box<C>
      {...props}
      component={component ?? ('div' as C)}
      classNameBefore={clsx('form-text', props.classNameBefore)}
      className={className}
    />
  );
}

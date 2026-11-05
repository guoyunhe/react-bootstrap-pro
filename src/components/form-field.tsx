import clsx from 'clsx';
import type { ElementType } from 'react';

import { Box } from './box';
import type { BoxProps } from './box';

export type FormFieldProps<C extends ElementType = 'div'> = BoxProps<C>;

export function FormField<C extends ElementType = 'div'>({
  component,
  className,
  ...props
}: FormFieldProps<C>) {
  return (
    <Box<C>
      {...(props as BoxProps<C>)}
      component={component ?? ('div' as C)}
      classNameBefore={clsx('form-field', props.classNameBefore)}
      className={className}
    />
  );
}

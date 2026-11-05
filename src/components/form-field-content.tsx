import clsx from 'clsx';
import type { ElementType } from 'react';

import { type ComponentProps } from '../types';
import { Box } from './box';
import type { BoxProps } from './box';

export type FormFieldContentProps<C extends ElementType = 'div'> = ComponentProps<C>;

export function FormFieldContent<C extends ElementType = 'div'>({
  component,
  className,
  ...props
}: FormFieldContentProps<C>) {
  return (
    <Box<C>
      {...(props as BoxProps<C>)}
      component={component ?? ('div' as C)}
      classNameBefore={clsx('form-field-content', props.classNameBefore)}
      className={className}
    />
  );
}

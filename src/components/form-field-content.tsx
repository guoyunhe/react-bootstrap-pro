import clsx from 'clsx';
import type { ElementType } from 'react';

import { Box } from './box';
import { type ComponentProps } from './shared';

export type FormFieldContentProps<C extends ElementType = 'div'> = ComponentProps<C>;

export function FormFieldContent<C extends ElementType = 'div'>({
  component,
  className,
  ...props
}: FormFieldContentProps<C>) {
  return (
    <Box<C>
      {...props}
      component={component ?? ('div' as C)}
      classNameBefore={clsx('form-field-content', props.classNameBefore)}
      className={className}
    />
  );
}

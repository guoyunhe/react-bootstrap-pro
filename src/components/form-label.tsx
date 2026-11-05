import clsx from 'clsx';
import type { ElementType } from 'react';

import { Box } from './box';
import type { BoxProps } from './box';
import { type ComponentProps } from './shared';

export type FormLabelCol = 'sm' | 'lg';

export type FormLabelProps<C extends ElementType = 'label'> = ComponentProps<
  C,
  {
    /** Renders a `.col-form-label` for horizontal forms; `'sm'` and `'lg'` match the control size. */
    col?: boolean | FormLabelCol | undefined;
  }
>;

export function FormLabel<C extends ElementType = 'label'>({
  component,
  className,
  col,
  ...props
}: FormLabelProps<C>) {
  let colClass;

  if (col) {
    colClass = clsx('col-form-label', col !== true && `col-form-label-${col}`);
  }

  return (
    <Box<C>
      {...(props as BoxProps<C>)}
      component={component ?? ('label' as C)}
      classNameBefore={clsx('form-label', colClass, props.classNameBefore)}
      className={className}
    />
  );
}

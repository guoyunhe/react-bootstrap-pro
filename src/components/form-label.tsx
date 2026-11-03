import clsx from 'clsx';
import type { ElementType } from 'react';

import { ClassedBox, type BoxComponentProps } from './shared';

export type FormLabelCol = 'sm' | 'lg';

export type FormLabelProps<C extends ElementType = 'label'> = BoxComponentProps<
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
    <ClassedBox<C>
      {...props}
      baseClass={clsx('form-label', colClass)}
      component={component}
      defaultComponent={'label' as C}
      className={className}
    />
  );
}

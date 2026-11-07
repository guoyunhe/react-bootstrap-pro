import clsx from 'clsx';
import type { ElementType } from 'react';

import type { ValidationState } from '../types';
import { Box } from './box';
import type { BoxProps } from './box';
import { getControlClassName, type ControlSize } from './control-styles';

type FormControlOwnProps = {
  adorn?: boolean | undefined;
  adornEnd?: boolean | undefined;
  size?: ControlSize | undefined;
  validation?: ValidationState | undefined;
};

export type FormControlProps<C extends ElementType = 'div'> = Omit<
  BoxProps<C>,
  keyof FormControlOwnProps
> &
  FormControlOwnProps;

export function FormControl<C extends ElementType = 'div'>({
  component,
  className,
  classNameBefore,
  adorn,
  adornEnd,
  size,
  validation,
  ...props
}: FormControlProps<C>) {
  return (
    <Box<C>
      {...(props as BoxProps<C>)}
      component={component ?? ('div' as C)}
      classNameBefore={getControlClassName(
        'form-control',
        size,
        'form-control',
        validation,
        clsx((adorn || adornEnd) && 'form-adorn', adornEnd && 'form-adorn-end', classNameBefore),
      )}
      className={className}
    />
  );
}

import type { ValidationState } from '../types';
import { Box } from './box';
import type { BoxProps } from './box';
import { getControlClassName } from './control-styles';

type SelectOwnProps = {
  size?: 'sm' | 'lg' | undefined;
  validation?: ValidationState | undefined;
};

export type SelectProps = Omit<BoxProps<'select'>, keyof SelectOwnProps | 'component'> &
  SelectOwnProps;

export function Select({ className, classNameBefore, size, validation, ...props }: SelectProps) {
  return (
    <Box<'select'>
      {...props}
      component='select'
      classNameBefore={getControlClassName(
        'form-select',
        size,
        'form-select',
        validation,
        classNameBefore,
      )}
      className={className}
    />
  );
}

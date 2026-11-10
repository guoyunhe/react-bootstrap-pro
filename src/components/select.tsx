import type { ValidationState } from '../types';
import { Box } from './box';
import type { BoxProps } from './box';
import { getControlClassName } from './control-styles';

type SelectOwnProps = {
  htmlSize?: number | undefined;
  size?: 'sm' | 'lg' | undefined;
  validation?: ValidationState | undefined;
};

export type SelectProps = Omit<BoxProps<'select'>, keyof SelectOwnProps | 'component'> &
  SelectOwnProps;

export function Select({
  className,
  classNameBefore,
  htmlSize,
  size,
  validation,
  ...props
}: SelectProps) {
  return (
    <Box<'select'>
      {...props}
      component='select'
      size={htmlSize}
      classNameBefore={getControlClassName(
        'form-control',
        size,
        'form-control',
        validation,
        classNameBefore,
      )}
      className={className}
    />
  );
}

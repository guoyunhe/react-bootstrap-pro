import type { ValidationState } from '../types';
import { Box } from './box';
import type { BoxProps } from './box';
import { getControlClassName } from './control-styles';

type InputOwnProps = {
  size?: 'sm' | 'lg' | undefined;
  plaintext?: boolean | undefined;
  ghost?: boolean | undefined;
  validation?: ValidationState | undefined;
};

export type InputProps = Omit<BoxProps<'input'>, keyof InputOwnProps | 'component'> & InputOwnProps;

export function Input({
  className,
  classNameBefore,
  size,
  plaintext,
  ghost,
  validation,
  ...props
}: InputProps) {
  const baseClass = ghost ? 'form-ghost' : plaintext ? 'form-control-plaintext' : 'form-control';

  return (
    <Box<'input'>
      {...props}
      component='input'
      classNameBefore={getControlClassName(
        baseClass,
        size,
        'form-control',
        validation,
        classNameBefore,
      )}
      className={className}
    />
  );
}

import type { ValidationState } from '../types';
import { Box } from './box';
import type { BoxProps } from './box';
import { getControlClassName } from './control-styles';

type TextareaOwnProps = {
  size?: 'sm' | 'lg' | undefined;
  plaintext?: boolean | undefined;
  validation?: ValidationState | undefined;
};

export type TextareaProps = Omit<BoxProps<'textarea'>, keyof TextareaOwnProps | 'component'> &
  TextareaOwnProps;

export function Textarea({
  className,
  classNameBefore,
  size,
  plaintext,
  validation,
  ...props
}: TextareaProps) {
  return (
    <Box<'textarea'>
      {...props}
      component='textarea'
      classNameBefore={getControlClassName(
        plaintext ? 'form-control-plaintext' : 'form-control',
        size,
        'form-control',
        validation,
        classNameBefore,
      )}
      className={className}
    />
  );
}

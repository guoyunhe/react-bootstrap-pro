import clsx from 'clsx';
import type { ElementType } from 'react';

import { type ValidationState } from '../types';
import { Box } from './box';
import type { BoxProps } from './box';

export type RadioSize = 'sm' | 'lg';

export type RadioProps<C extends ElementType = 'input'> = Omit<
  BoxProps<C>,
  keyof { size?: RadioSize | undefined; validation?: ValidationState | undefined }
> & { size?: RadioSize | undefined; validation?: ValidationState | undefined };

export function Radio<C extends ElementType = 'input'>({
  component,
  className,
  size,
  validation,
  type,
  ...props
}: RadioProps<C>) {
  return (
    <Box<C>
      {...(props as BoxProps<C>)}
      component={component ?? ('input' as C)}
      classNameBefore={clsx(
        'radio',
        size && `radio-${size}`,
        validation && `is-${validation}`,
        props.classNameBefore,
      )}
      className={className}
      type={type ?? 'radio'}
    />
  );
}

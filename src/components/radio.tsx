import clsx from 'clsx';
import type { ElementType } from 'react';

import { Box } from './box';
import type { BoxProps } from './box';
import { type ComponentProps, type ValidationState } from './shared';

export type RadioSize = 'sm' | 'lg';

export type RadioProps<C extends ElementType = 'input'> = ComponentProps<
  C,
  { size?: RadioSize | undefined; validation?: ValidationState | undefined }
>;

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

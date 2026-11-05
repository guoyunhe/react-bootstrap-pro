import clsx from 'clsx';
import type { ElementType } from 'react';

import { Box } from './box';
import type { BoxProps } from './box';
import { type ComponentProps, type ValidationState } from './shared';

export type CheckboxSize = 'sm' | 'lg';

export type CheckboxProps<C extends ElementType = 'input'> = ComponentProps<
  C,
  { size?: CheckboxSize | undefined; validation?: ValidationState | undefined }
>;

export function Checkbox<C extends ElementType = 'input'>({
  component,
  className,
  size,
  validation,
  type,
  ...props
}: CheckboxProps<C>) {
  return (
    <Box<C>
      {...(props as BoxProps<C>)}
      component={component ?? ('input' as C)}
      classNameBefore={clsx(
        'check',
        size && `check-${size}`,
        validation && `is-${validation}`,
        props.classNameBefore,
      )}
      className={className}
      type={type ?? 'checkbox'}
    />
  );
}

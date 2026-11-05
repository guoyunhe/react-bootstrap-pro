import clsx from 'clsx';
import type { ElementType } from 'react';

import { Box } from './box';
import type { BoxProps } from './box';

export type FormFloatingProps<C extends ElementType = 'div'> = Omit<
  BoxProps<C>,
  keyof { always?: boolean | undefined }
> & { always?: boolean | undefined };

export function FormFloating<C extends ElementType = 'div'>({
  component,
  className,
  always,
  ...props
}: FormFloatingProps<C>) {
  return (
    <Box<C>
      {...(props as BoxProps<C>)}
      component={component ?? ('div' as C)}
      classNameBefore={clsx(
        'form-floating',
        always && 'form-floating-always',
        props.classNameBefore,
      )}
      className={className}
    />
  );
}

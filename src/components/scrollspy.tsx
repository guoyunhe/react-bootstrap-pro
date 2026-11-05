import clsx from 'clsx';
import type { ElementType } from 'react';

import { Box } from './box';
import type { BoxProps } from './box';

export type ScrollspyProps<C extends ElementType = 'div'> = Omit<
  BoxProps<C>,
  keyof { target?: string | undefined }
> & { target?: string | undefined };

export function Scrollspy<C extends ElementType = 'div'>({
  component,
  className,
  target,
  ...props
}: ScrollspyProps<C>) {
  return (
    <Box<C>
      {...(props as BoxProps<C>)}
      component={component ?? ('div' as C)}
      classNameBefore={clsx('', props.classNameBefore)}
      className={className}
      data-bs-spy={props['data-bs-spy'] ?? 'scroll'}
      data-bs-target={target ?? props['data-bs-target']}
      tabIndex={props['tabIndex'] ?? 0}
    />
  );
}

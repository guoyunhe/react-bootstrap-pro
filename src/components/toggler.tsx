import clsx from 'clsx';
import type { ElementType } from 'react';

import { Box } from './box';
import type { BoxProps } from './box';
import { type ComponentProps } from './shared';

export type TogglerProps<C extends ElementType = 'button'> = ComponentProps<
  C,
  { attribute?: string | undefined; target?: string | undefined; value?: string | undefined }
>;

export function Toggler<C extends ElementType = 'button'>({
  component,
  className,
  attribute,
  target,
  value,
  type,
  ...props
}: TogglerProps<C>) {
  return (
    <Box<C>
      {...(props as BoxProps<C>)}
      component={component ?? ('button' as C)}
      classNameBefore={clsx('', props.classNameBefore)}
      className={className}
      type={type ?? 'button'}
      data-bs-toggle={props['data-bs-toggle'] ?? 'toggler'}
      data-bs-attribute={attribute ?? props['data-bs-attribute']}
      data-bs-target={target ?? props['data-bs-target']}
      data-bs-value={value ?? props['data-bs-value']}
    />
  );
}

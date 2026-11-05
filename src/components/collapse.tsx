import clsx from 'clsx';
import type { ElementType } from 'react';

import { Box } from './box';
import type { BoxProps } from './box';
import { type ComponentProps } from './shared';

export type CollapseProps<C extends ElementType = 'div'> = ComponentProps<
  C,
  { horizontal?: boolean | undefined; show?: boolean | undefined }
>;

export function Collapse<C extends ElementType = 'div'>({
  component,
  className,
  horizontal,
  show,
  ...props
}: CollapseProps<C>) {
  return (
    <Box<C>
      {...(props as BoxProps<C>)}
      component={component ?? ('div' as C)}
      classNameBefore={clsx(
        'collapse',
        horizontal && 'collapse-horizontal',
        show && 'show',
        props.classNameBefore,
      )}
      className={className}
    />
  );
}

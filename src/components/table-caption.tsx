import clsx from 'clsx';
import type { ElementType } from 'react';

import { type ComponentProps } from '../types';
import { Box } from './box';
import type { BoxProps } from './box';

export type TableCaptionProps<C extends ElementType = 'caption'> = ComponentProps<C>;

export function TableCaption<C extends ElementType = 'caption'>({
  component,
  className,
  ...props
}: TableCaptionProps<C>) {
  return (
    <Box<C>
      {...(props as BoxProps<C>)}
      component={component ?? ('caption' as C)}
      classNameBefore={clsx('', props.classNameBefore)}
      className={className}
    />
  );
}

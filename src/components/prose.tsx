import clsx from 'clsx';
import type { ElementType } from 'react';

import { Box } from './box';
import type { BoxProps } from './box';

export type ProseProps<C extends ElementType = 'div'> = BoxProps<C>;

export function Prose<C extends ElementType = 'div'>({
  component,
  className,
  ...props
}: ProseProps<C>) {
  return (
    <Box<C>
      {...(props as BoxProps<C>)}
      component={component ?? ('div' as C)}
      classNameBefore={clsx('prose', props.classNameBefore)}
      className={className}
    />
  );
}

export type NotProseProps<C extends ElementType = 'div'> = BoxProps<C>;

export function NotProse<C extends ElementType = 'div'>({
  component,
  className,
  ...props
}: NotProseProps<C>) {
  return (
    <Box<C>
      {...(props as BoxProps<C>)}
      component={component ?? ('div' as C)}
      classNameBefore={clsx('not-prose', props.classNameBefore)}
      className={className}
    />
  );
}

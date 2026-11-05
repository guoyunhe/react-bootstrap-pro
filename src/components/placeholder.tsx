import clsx from 'clsx';
import type { ElementType } from 'react';

import { type ComponentProps } from '../types';
import { Box } from './box';
import type { BoxProps } from './box';

export type PlaceholderProps<C extends ElementType = 'span'> = ComponentProps<
  C,
  { size?: 'xs' | 'sm' | 'lg' | undefined }
>;

export function Placeholder<C extends ElementType = 'span'>({
  component,
  className,
  size,
  ...props
}: PlaceholderProps<C>) {
  return (
    <Box<C>
      {...(props as BoxProps<C>)}
      component={component ?? ('span' as C)}
      classNameBefore={clsx('placeholder', size && `placeholder-${size}`, props.classNameBefore)}
      className={className}
      aria-hidden={props['aria-hidden'] ?? true}
    />
  );
}

export type PlaceholderGroupProps<C extends ElementType = 'span'> = ComponentProps<
  C,
  { animation?: 'glow' | 'pulse' | 'wave' | undefined }
>;

export function PlaceholderGroup<C extends ElementType = 'span'>({
  component,
  className,
  animation,
  ...props
}: PlaceholderGroupProps<C>) {
  return (
    <Box<C>
      {...(props as BoxProps<C>)}
      component={component ?? ('span' as C)}
      classNameBefore={clsx(animation ? `placeholder-${animation}` : '', props.classNameBefore)}
      className={className}
      aria-hidden={props['aria-hidden'] ?? true}
    />
  );
}

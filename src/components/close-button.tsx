import clsx from 'clsx';
import type { ElementType } from 'react';

import { type ComponentProps } from '../types';
import { Box } from './box';
import type { BoxProps } from './box';

export type CloseButtonProps<C extends ElementType = 'button'> = ComponentProps<
  C,
  { label?: string | undefined }
>;

export function CloseButton<C extends ElementType = 'button'>({
  component,
  className,
  label = 'Close',
  type,
  ...props
}: CloseButtonProps<C>) {
  return (
    <Box<C>
      {...(props as BoxProps<C>)}
      component={component ?? ('button' as C)}
      classNameBefore={clsx('btn-close', props.classNameBefore)}
      className={className}
      type={type ?? 'button'}
      aria-label={props['aria-label'] ?? label}
    />
  );
}

import clsx from 'clsx';
import type { ElementType } from 'react';

import { type ComponentProps } from '../types';
import { Box } from './box';
import type { BoxProps } from './box';

export type ButtonGroupProps<C extends ElementType = 'div'> = ComponentProps<
  C,
  {
    divider?: boolean | undefined;
    orientation?: 'horizontal' | 'vertical' | undefined;
    size?: 'sm' | 'lg' | undefined;
  }
>;

export function ButtonGroup<C extends ElementType = 'div'>({
  component,
  className,
  divider,
  orientation,
  size,
  role,
  ...props
}: ButtonGroupProps<C>) {
  return (
    <Box<C>
      {...(props as BoxProps<C>)}
      component={component ?? ('div' as C)}
      classNameBefore={clsx(
        orientation === 'vertical' ? 'btn-group-vertical' : 'btn-group',
        divider && 'btn-group-divider',
        size && `btn-group-${size}`,
        props.classNameBefore,
      )}
      className={className}
      role={role ?? 'group'}
    />
  );
}

export type ButtonToolbarProps<C extends ElementType = 'div'> = BoxProps<C>;

export function ButtonToolbar<C extends ElementType = 'div'>({
  component,
  className,
  role,
  ...props
}: ButtonToolbarProps<C>) {
  return (
    <Box<C>
      {...(props as BoxProps<C>)}
      component={component ?? ('div' as C)}
      classNameBefore={clsx('btn-toolbar', props.classNameBefore)}
      className={className}
      role={role ?? 'toolbar'}
    />
  );
}

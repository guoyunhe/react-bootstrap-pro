import clsx from 'clsx';
import type { ElementType } from 'react';

import { type ComponentProps } from '../types';
import { Box } from './box';
import type { BoxProps } from './box';

export type PopoverProps<C extends ElementType = 'div'> = ComponentProps<
  C,
  {
    instant?: boolean | undefined;
    placement?: 'top' | 'end' | 'bottom' | 'start' | undefined;
    show?: boolean | undefined;
  }
>;

export function Popover<C extends ElementType = 'div'>({
  component,
  className,
  instant,
  placement = 'top',
  show = false,
  ...props
}: PopoverProps<C>) {
  return (
    <Box<C>
      {...(props as BoxProps<C>)}
      component={component ?? ('div' as C)}
      classNameBefore={clsx(
        'popover',
        `bs-popover-${placement}`,
        instant && 'popover-instant',
        show && 'show',
        props.classNameBefore,
      )}
      className={className}
    />
  );
}

export type PopoverHeaderProps<C extends ElementType = 'h3'> = BoxProps<C>;

export function PopoverHeader<C extends ElementType = 'h3'>({
  component,
  className,
  ...props
}: PopoverHeaderProps<C>) {
  return (
    <Box<C>
      {...(props as BoxProps<C>)}
      component={component ?? ('h3' as C)}
      classNameBefore={clsx('popover-header', props.classNameBefore)}
      className={className}
    />
  );
}

export type PopoverBodyProps<C extends ElementType = 'div'> = BoxProps<C>;

export function PopoverBody<C extends ElementType = 'div'>({
  component,
  className,
  ...props
}: PopoverBodyProps<C>) {
  return (
    <Box<C>
      {...(props as BoxProps<C>)}
      component={component ?? ('div' as C)}
      classNameBefore={clsx('popover-body', props.classNameBefore)}
      className={className}
    />
  );
}

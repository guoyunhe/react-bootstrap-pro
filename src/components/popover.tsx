import clsx from 'clsx';
import type { ElementType } from 'react';

import type { BoxProps } from './box';
import { ClassedBox, type ComponentProps } from './shared';

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
    <ClassedBox<C>
      {...props}
      baseClass={clsx(
        'popover',
        `bs-popover-${placement}`,
        instant && 'popover-instant',
        show && 'show',
      )}
      component={component}
      defaultComponent={'div' as C}
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
    <ClassedBox<C>
      {...props}
      baseClass='popover-header'
      component={component}
      defaultComponent={'h3' as C}
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
    <ClassedBox<C>
      {...props}
      baseClass='popover-body'
      component={component}
      defaultComponent={'div' as C}
      className={className}
    />
  );
}

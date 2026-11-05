import clsx from 'clsx';
import type { ElementType } from 'react';

import { Box } from './box';
import type { BoxProps } from './box';
import { type ComponentProps } from './shared';

export type DrawerProps<C extends ElementType = 'dialog'> = ComponentProps<
  C,
  {
    fullscreen?: boolean | undefined;
    instant?: boolean | undefined;
    placement?: 'start' | 'end' | 'top' | 'bottom' | undefined;
    sheet?: boolean | undefined;
    translucent?: boolean | undefined;
  }
>;

export function Drawer<C extends ElementType = 'dialog'>({
  component,
  className,
  fullscreen,
  instant,
  placement = 'end',
  sheet,
  translucent,
  ...props
}: DrawerProps<C>) {
  return (
    <Box<C>
      {...props}
      component={component ?? ('dialog' as C)}
      classNameBefore={clsx(
        'drawer',
        `drawer-${placement}`,
        fullscreen && 'drawer-fullscreen',
        instant && 'drawer-instant',
        sheet && 'drawer-sheet',
        translucent && 'drawer-translucent',
        props.classNameBefore,
      )}
      className={className}
    />
  );
}

export type DrawerHeaderProps<C extends ElementType = 'div'> = BoxProps<C>;

export function DrawerHeader<C extends ElementType = 'div'>({
  component,
  className,
  ...props
}: DrawerHeaderProps<C>) {
  return (
    <Box<C>
      {...props}
      component={component ?? ('div' as C)}
      classNameBefore={clsx('drawer-header', props.classNameBefore)}
      className={className}
    />
  );
}

export type DrawerTitleProps<C extends ElementType = 'h5'> = BoxProps<C>;

export function DrawerTitle<C extends ElementType = 'h5'>({
  component,
  className,
  ...props
}: DrawerTitleProps<C>) {
  return (
    <Box<C>
      {...props}
      component={component ?? ('h5' as C)}
      classNameBefore={clsx('drawer-title', props.classNameBefore)}
      className={className}
    />
  );
}

export type DrawerBodyProps<C extends ElementType = 'div'> = BoxProps<C>;

export function DrawerBody<C extends ElementType = 'div'>({
  component,
  className,
  ...props
}: DrawerBodyProps<C>) {
  return (
    <Box<C>
      {...props}
      component={component ?? ('div' as C)}
      classNameBefore={clsx('drawer-body', props.classNameBefore)}
      className={className}
    />
  );
}

export type DrawerFooterProps<C extends ElementType = 'div'> = BoxProps<C>;

export function DrawerFooter<C extends ElementType = 'div'>({
  component,
  className,
  ...props
}: DrawerFooterProps<C>) {
  return (
    <Box<C>
      {...props}
      component={component ?? ('div' as C)}
      classNameBefore={clsx('drawer-footer', props.classNameBefore)}
      className={className}
    />
  );
}

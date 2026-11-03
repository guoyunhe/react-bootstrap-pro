import clsx from 'clsx';
import type { ElementType } from 'react';

import type { BoxProps } from './box';
import { ClassedBox, type BoxComponentProps } from './shared';

export type DrawerProps<C extends ElementType = 'dialog'> = BoxComponentProps<
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
    <ClassedBox<C>
      {...props}
      baseClass={clsx(
        'drawer',
        `drawer-${placement}`,
        fullscreen && 'drawer-fullscreen',
        instant && 'drawer-instant',
        sheet && 'drawer-sheet',
        translucent && 'drawer-translucent',
      )}
      component={component}
      defaultComponent={'dialog' as C}
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
    <ClassedBox<C>
      {...props}
      baseClass='drawer-header'
      component={component}
      defaultComponent={'div' as C}
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
    <ClassedBox<C>
      {...props}
      baseClass='drawer-title'
      component={component}
      defaultComponent={'h5' as C}
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
    <ClassedBox<C>
      {...props}
      baseClass='drawer-body'
      component={component}
      defaultComponent={'div' as C}
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
    <ClassedBox<C>
      {...props}
      baseClass='drawer-footer'
      component={component}
      defaultComponent={'div' as C}
      className={className}
    />
  );
}

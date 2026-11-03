import clsx from 'clsx';
import type { ElementType } from 'react';

import type { BoxProps } from './box';
import { ClassedBox, type BoxComponentProps } from './shared';

export type DialogProps<C extends ElementType = 'dialog'> = BoxComponentProps<
  C,
  {
    fullscreen?: boolean | undefined;
    instant?: boolean | undefined;
    nonmodal?: boolean | undefined;
    scrollable?: boolean | undefined;
    size?: 'sm' | 'lg' | 'xl' | undefined;
    slide?: 'down' | 'up' | undefined;
  }
>;

export function Dialog<C extends ElementType = 'dialog'>({
  component,
  className,
  fullscreen,
  instant,
  nonmodal,
  scrollable,
  size,
  slide,
  ...props
}: DialogProps<C>) {
  return (
    <ClassedBox<C>
      {...props}
      baseClass={clsx(
        'dialog',
        fullscreen && 'dialog-fullscreen',
        instant && 'dialog-instant',
        nonmodal && 'dialog-nonmodal',
        scrollable && 'dialog-scrollable',
        size && `dialog-${size}`,
        slide && `dialog-slide-${slide}`,
      )}
      component={component}
      defaultComponent={'dialog' as C}
      className={className}
    />
  );
}

export type DialogHeaderProps<C extends ElementType = 'div'> = BoxProps<C>;

export function DialogHeader<C extends ElementType = 'div'>({
  component,
  className,
  ...props
}: DialogHeaderProps<C>) {
  return (
    <ClassedBox<C>
      {...props}
      baseClass='dialog-header'
      component={component}
      defaultComponent={'div' as C}
      className={className}
    />
  );
}

export type DialogTitleProps<C extends ElementType = 'h1'> = BoxProps<C>;

export function DialogTitle<C extends ElementType = 'h1'>({
  component,
  className,
  ...props
}: DialogTitleProps<C>) {
  return (
    <ClassedBox<C>
      {...props}
      baseClass='dialog-title'
      component={component}
      defaultComponent={'h1' as C}
      className={className}
    />
  );
}

export type DialogBodyProps<C extends ElementType = 'div'> = BoxProps<C>;

export function DialogBody<C extends ElementType = 'div'>({
  component,
  className,
  ...props
}: DialogBodyProps<C>) {
  return (
    <ClassedBox<C>
      {...props}
      baseClass='dialog-body'
      component={component}
      defaultComponent={'div' as C}
      className={className}
    />
  );
}

export type DialogFooterProps<C extends ElementType = 'div'> = BoxProps<C>;

export function DialogFooter<C extends ElementType = 'div'>({
  component,
  className,
  ...props
}: DialogFooterProps<C>) {
  return (
    <ClassedBox<C>
      {...props}
      baseClass='dialog-footer'
      component={component}
      defaultComponent={'div' as C}
      className={className}
    />
  );
}

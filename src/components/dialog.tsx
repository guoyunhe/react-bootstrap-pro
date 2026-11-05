import clsx from 'clsx';
import type { ElementType } from 'react';

import { Box } from './box';
import type { BoxProps } from './box';
import { type ComponentProps } from './shared';

export type DialogProps<C extends ElementType = 'dialog'> = ComponentProps<
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
    <Box<C>
      {...props}
      component={component ?? ('dialog' as C)}
      classNameBefore={clsx(
        'dialog',
        fullscreen && 'dialog-fullscreen',
        instant && 'dialog-instant',
        nonmodal && 'dialog-nonmodal',
        scrollable && 'dialog-scrollable',
        size && `dialog-${size}`,
        slide && `dialog-slide-${slide}`,
        props.classNameBefore,
      )}
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
    <Box<C>
      {...props}
      component={component ?? ('div' as C)}
      classNameBefore={clsx('dialog-header', props.classNameBefore)}
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
    <Box<C>
      {...props}
      component={component ?? ('h1' as C)}
      classNameBefore={clsx('dialog-title', props.classNameBefore)}
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
    <Box<C>
      {...props}
      component={component ?? ('div' as C)}
      classNameBefore={clsx('dialog-body', props.classNameBefore)}
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
    <Box<C>
      {...props}
      component={component ?? ('div' as C)}
      classNameBefore={clsx('dialog-footer', props.classNameBefore)}
      className={className}
    />
  );
}

import clsx from 'clsx';
import type { ElementType } from 'react';

import { Box } from './box';
import type { BoxProps } from './box';
import { IconButton, type IconButtonProps } from './icon-button';
import { type ComponentProps } from './shared';

export type CarouselProps<C extends ElementType = 'div'> = ComponentProps<
  C,
  {
    auto?: boolean | undefined;
    center?: boolean | undefined;
    fade?: boolean | undefined;
    overlay?: boolean | undefined;
  }
>;

export function Carousel<C extends ElementType = 'div'>({
  component,
  className,
  auto,
  center,
  fade,
  overlay,
  ...props
}: CarouselProps<C>) {
  return (
    <Box<C>
      {...(props as BoxProps<C>)}
      component={component ?? ('div' as C)}
      classNameBefore={clsx(
        'carousel',
        auto && 'carousel-auto',
        center && 'carousel-center',
        fade && 'carousel-fade',
        overlay && 'carousel-overlay',
        props.classNameBefore,
      )}
      className={className}
    />
  );
}

export type CarouselInnerProps<C extends ElementType = 'div'> = BoxProps<C>;

export function CarouselInner<C extends ElementType = 'div'>({
  component,
  className,
  ...props
}: CarouselInnerProps<C>) {
  return (
    <Box<C>
      {...(props as BoxProps<C>)}
      component={component ?? ('div' as C)}
      classNameBefore={clsx('carousel-inner', props.classNameBefore)}
      className={className}
    />
  );
}

export type CarouselItemProps<C extends ElementType = 'div'> = ComponentProps<
  C,
  { active?: boolean | undefined }
>;

export function CarouselItem<C extends ElementType = 'div'>({
  component,
  className,
  active,
  ...props
}: CarouselItemProps<C>) {
  return (
    <Box<C>
      {...(props as BoxProps<C>)}
      component={component ?? ('div' as C)}
      classNameBefore={clsx('carousel-item', active && 'active', props.classNameBefore)}
      className={className}
    />
  );
}

export type CarouselIndicatorsProps<C extends ElementType = 'div'> = BoxProps<C>;

export function CarouselIndicators<C extends ElementType = 'div'>({
  component,
  className,
  ...props
}: CarouselIndicatorsProps<C>) {
  return (
    <Box<C>
      {...(props as BoxProps<C>)}
      component={component ?? ('div' as C)}
      classNameBefore={clsx('carousel-indicators', props.classNameBefore)}
      className={className}
    />
  );
}

export type CarouselIndicatorProps<C extends ElementType = 'button'> = ComponentProps<
  C,
  { active?: boolean | undefined; index: number; target: string }
>;

export function CarouselIndicator<C extends ElementType = 'button'>({
  component,
  className,
  active,
  index,
  target,
  type,
  ...props
}: CarouselIndicatorProps<C>) {
  return (
    <Box<C>
      {...(props as BoxProps<C>)}
      component={component ?? ('button' as C)}
      classNameBefore={clsx(active && 'active', className, props.classNameBefore)}
      className={undefined}
      type={type ?? 'button'}
      aria-current={active || undefined}
      aria-label={`Slide ${index + 1}`}
      data-bs-slide-to={index}
      data-bs-target={target}
    />
  );
}

export type CarouselControlProps<C extends ElementType = 'button'> = ComponentProps<
  C,
  {
    direction: 'next' | 'previous';
    size?: 'xs' | 'sm' | 'lg' | undefined;
    target: string;
    variant?: 'solid' | 'outline' | 'subtle' | undefined;
  }
>;

export function CarouselControl<C extends ElementType = 'button'>({
  component,
  className,
  direction,
  size,
  target,
  type,
  variant,
  ...props
}: CarouselControlProps<C>) {
  const action = direction === 'previous' ? 'prev' : 'next';
  const iconButtonProps = {
    ...props,
    ...(component ? { component } : {}),
    size,
    variant,
    ...(className === undefined ? {} : { className }),
    type: type ?? 'button',
    'aria-label': props['aria-label'] ?? (direction === 'previous' ? 'Previous' : 'Next'),
    'data-bs-slide': action,
    'data-bs-target': target,
  } as IconButtonProps<C>;

  return (
    <IconButton<C> {...iconButtonProps}>
      <span className={`carousel-icon-${action}`} aria-hidden='true' />
    </IconButton>
  );
}

export type CarouselOverlayControlsProps<C extends ElementType = 'div'> = BoxProps<C>;

export function CarouselOverlayControls<C extends ElementType = 'div'>({
  component,
  className,
  ...props
}: CarouselOverlayControlsProps<C>) {
  return (
    <Box<C>
      {...(props as BoxProps<C>)}
      component={component ?? ('div' as C)}
      classNameBefore={clsx('carousel-overlay-controls', props.classNameBefore)}
      className={className}
    />
  );
}

export type CarouselCaptionProps<C extends ElementType = 'div'> = BoxProps<C>;

export function CarouselCaption<C extends ElementType = 'div'>({
  component,
  className,
  ...props
}: CarouselCaptionProps<C>) {
  return (
    <Box<C>
      {...(props as BoxProps<C>)}
      component={component ?? ('div' as C)}
      classNameBefore={clsx('carousel-caption', props.classNameBefore)}
      className={className}
    />
  );
}

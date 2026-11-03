import clsx from 'clsx';
import type { ElementType } from 'react';

import type { BoxProps } from './box';
import { ClassedBox, type BoxComponentProps } from './shared';

export type CarouselProps<C extends ElementType = 'div'> = BoxComponentProps<
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
    <ClassedBox<C>
      {...props}
      baseClass={clsx(
        'carousel',
        auto && 'carousel-auto',
        center && 'carousel-center',
        fade && 'carousel-fade',
        overlay && 'carousel-overlay',
      )}
      component={component}
      defaultComponent={'div' as C}
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
    <ClassedBox<C>
      {...props}
      baseClass='carousel-inner'
      component={component}
      defaultComponent={'div' as C}
      className={className}
    />
  );
}

export type CarouselItemProps<C extends ElementType = 'div'> = BoxComponentProps<
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
    <ClassedBox<C>
      {...props}
      baseClass={clsx('carousel-item', active && 'active')}
      component={component}
      defaultComponent={'div' as C}
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
    <ClassedBox<C>
      {...props}
      baseClass='carousel-indicators'
      component={component}
      defaultComponent={'div' as C}
      className={className}
    />
  );
}

export type CarouselIndicatorProps<C extends ElementType = 'button'> = BoxComponentProps<
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
    <ClassedBox<C>
      {...props}
      baseClass={clsx(active && 'active', className)}
      component={component}
      defaultComponent={'button' as C}
      className={undefined}
      type={type ?? 'button'}
      aria-current={active || undefined}
      aria-label={`Slide ${index + 1}`}
      data-bs-slide-to={index}
      data-bs-target={target}
    />
  );
}

export type CarouselControlProps<C extends ElementType = 'button'> = BoxComponentProps<
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
  return (
    <ClassedBox<C>
      {...props}
      baseClass={clsx('btn-icon', size && `btn-${size}`, variant && `btn-${variant}`)}
      component={component}
      defaultComponent={'button' as C}
      className={className}
      type={type ?? 'button'}
      aria-label={props['aria-label'] ?? (direction === 'previous' ? 'Previous' : 'Next')}
      data-bs-slide={action}
      data-bs-target={target}
    >
      <span className={`carousel-icon-${action}`} aria-hidden='true' />
    </ClassedBox>
  );
}

export type CarouselOverlayControlsProps<C extends ElementType = 'div'> = BoxProps<C>;

export function CarouselOverlayControls<C extends ElementType = 'div'>({
  component,
  className,
  ...props
}: CarouselOverlayControlsProps<C>) {
  return (
    <ClassedBox<C>
      {...props}
      baseClass='carousel-overlay-controls'
      component={component}
      defaultComponent={'div' as C}
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
    <ClassedBox<C>
      {...props}
      baseClass='carousel-caption'
      component={component}
      defaultComponent={'div' as C}
      className={className}
    />
  );
}

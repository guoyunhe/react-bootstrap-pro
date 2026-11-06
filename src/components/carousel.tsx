import clsx from 'clsx';
import { createContext, useContext, useId, type CSSProperties, type ElementType } from 'react';

import { Box } from './box';
import type { BoxProps } from './box';
import { IconButton, type IconButtonProps } from './icon-button';

export type CarouselEffect = 'slide' | 'fade';
export type CarouselEnds = 'loop' | 'wrap' | 'stop';
export type CarouselColorMode = 'light' | 'dark';

const CarouselTargetContext = createContext<string | undefined>(undefined);

function useCarouselTarget() {
  const target = useContext(CarouselTargetContext);

  if (!target) {
    throw new Error('Carousel controls must be rendered inside a Carousel.');
  }

  return target;
}

function createCarouselId(reactId: string) {
  const id = reactId.replaceAll(
    /[^a-zA-Z0-9_-]/g,
    (char) => `_${char.charCodeAt(0).toString(16)}_`,
  );

  return `carousel-${id}`;
}

export type CarouselProps<C extends ElementType = 'div'> = Omit<
  BoxProps<C>,
  keyof {
    auto?: boolean | undefined;
    autoplay?: boolean | undefined;
    center?: boolean | undefined;
    colorMode?: CarouselColorMode | undefined;
    effect?: CarouselEffect | undefined;
    ends?: CarouselEnds | undefined;
    itemsGap?: CSSProperties['gap'] | undefined;
    itemsPeek?: CSSProperties['width'] | undefined;
    overlay?: boolean | undefined;
  }
> & {
  auto?: boolean | undefined;
  autoplay?: boolean | undefined;
  center?: boolean | undefined;
  colorMode?: CarouselColorMode | undefined;
  effect?: CarouselEffect | undefined;
  ends?: CarouselEnds | undefined;
  itemsGap?: CSSProperties['gap'] | undefined;
  itemsPeek?: CSSProperties['width'] | undefined;
  overlay?: boolean | undefined;
};

export function Carousel<C extends ElementType = 'div'>({
  component,
  className,
  id: externalId,
  auto,
  autoplay,
  center,
  colorMode,
  effect = 'slide',
  ends,
  itemsGap,
  itemsPeek,
  overlay,
  ...props
}: CarouselProps<C>) {
  const reactId = useId();
  const id = externalId || createCarouselId(reactId);
  const style: CSSProperties | undefined =
    itemsGap === undefined && itemsPeek === undefined
      ? props.style
      : {
          ...props.style,
          ...(itemsGap === undefined
            ? {}
            : {
                '--bs-carousel-items-gap':
                  typeof itemsGap === 'number' ? `${itemsGap}px` : itemsGap,
              }),
          ...(itemsPeek === undefined
            ? {}
            : {
                '--bs-carousel-items-peek':
                  typeof itemsPeek === 'number' ? `${itemsPeek}px` : itemsPeek,
              }),
        };

  return (
    <CarouselTargetContext.Provider value={`#${id}`}>
      <Box<C>
        {...(props as BoxProps<C>)}
        component={component ?? ('div' as C)}
        id={id}
        style={style}
        data-bs-autoplay={autoplay ? 'true' : undefined}
        data-bs-ends={ends}
        data-bs-theme={colorMode}
        classNameBefore={clsx(
          'carousel',
          auto && 'carousel-auto',
          center && 'carousel-center',
          effect === 'fade' ? 'carousel-fade' : 'slide',
          overlay && 'carousel-overlay',
          props.classNameBefore,
        )}
        className={className}
      />
    </CarouselTargetContext.Provider>
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

export type CarouselItemProps<C extends ElementType = 'div'> = Omit<
  BoxProps<C>,
  keyof { active?: boolean | undefined; interval?: number | undefined }
> & { active?: boolean | undefined; interval?: number | undefined };

export function CarouselItem<C extends ElementType = 'div'>({
  component,
  className,
  active,
  interval,
  ...props
}: CarouselItemProps<C>) {
  return (
    <Box<C>
      {...(props as BoxProps<C>)}
      component={component ?? ('div' as C)}
      data-bs-interval={interval}
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

export type CarouselIndicatorProps<C extends ElementType = 'button'> = Omit<
  BoxProps<C>,
  keyof { active?: boolean | undefined; index: number } | 'target'
> & { active?: boolean | undefined; index: number };

export function CarouselIndicator<C extends ElementType = 'button'>({
  component,
  className,
  active,
  index,
  type,
  ...props
}: CarouselIndicatorProps<C>) {
  const target = useCarouselTarget();

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

export type CarouselControlProps<C extends ElementType = 'button'> = Omit<
  BoxProps<C>,
  | keyof {
      direction: 'next' | 'previous';
      size?: 'xs' | 'sm' | 'lg' | undefined;
      variant?: 'solid' | 'outline' | 'subtle' | undefined;
    }
  | 'target'
> & {
  direction: 'next' | 'previous';
  size?: 'xs' | 'sm' | 'lg' | undefined;
  variant?: 'solid' | 'outline' | 'subtle' | undefined;
};

export function CarouselControl<C extends ElementType = 'button'>({
  component,
  className,
  direction,
  size,
  type,
  variant,
  ...props
}: CarouselControlProps<C>) {
  const target = useCarouselTarget();
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

type CarouselPlayPauseOwnProps = {
  pauseLabel?: string | undefined;
  playLabel?: string | undefined;
};

export type CarouselPlayPauseProps<C extends ElementType = 'button'> = Omit<
  IconButtonProps<C>,
  keyof CarouselPlayPauseOwnProps | 'children' | 'target'
> &
  CarouselPlayPauseOwnProps;

export function CarouselPlayPause<C extends ElementType = 'button'>({
  component,
  className,
  pauseLabel = 'Pause',
  playLabel = 'Play',
  type,
  'aria-label': ariaLabel,
  ...props
}: CarouselPlayPauseProps<C>) {
  const target = useCarouselTarget();
  const iconButtonProps = {
    ...props,
    ...(component ? { component } : {}),
    className: clsx('carousel-control-play-pause', className),
    type: type ?? 'button',
    'aria-label': ariaLabel ?? pauseLabel,
    'data-bs-target': target,
    'data-bs-pause-label': pauseLabel,
    'data-bs-play-label': playLabel,
  } as IconButtonProps<C>;

  return (
    <IconButton<C> {...iconButtonProps}>
      <span className='carousel-icon-pause' aria-hidden='true' />
      <span className='carousel-icon-play' aria-hidden='true' />
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

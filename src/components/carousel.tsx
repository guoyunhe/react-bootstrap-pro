import clsx from 'clsx';
import {
  createContext,
  useContext,
  useId,
  useImperativeHandle,
  useRef,
  type ComponentRef,
  type CSSProperties,
  type ElementType,
  type KeyboardEvent,
  type MouseEvent,
} from 'react';

import { Box } from './box';
import type { BoxProps } from './box';
import { IconButton, type IconButtonProps } from './icon-button';
import { useCarousel } from './use-carousel';

export type CarouselEffect = 'slide' | 'fade';
export type CarouselEnds = 'loop' | 'wrap' | 'stop';
export type CarouselColorMode = 'light' | 'dark';

type CarouselContextValue = ReturnType<typeof useCarousel> & {
  target: string;
  ends: CarouselEnds;
};
const CarouselTargetContext = createContext<CarouselContextValue | undefined>(undefined);

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
    items?: number | undefined;
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
  items?: number | undefined;
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
  items,
  itemsGap,
  itemsPeek,
  overlay,
  ref: forwardedRef,
  onKeyDown,
  ...props
}: CarouselProps<C>) {
  const reactId = useId();
  const id = typeof externalId === 'string' && externalId ? externalId : createCarouselId(reactId);
  const rootRef = useRef<ComponentRef<C>>(null);
  useImperativeHandle(forwardedRef, () => rootRef.current!);
  const carousel = useCarousel(rootRef, {
    autoplay,
    center,
    auto,
    items,
    itemsPeek,
    effect,
    ends: ends ?? 'loop',
  });
  const customStyle = Reflect.get(props, 'style') as CSSProperties | undefined;
  const target = /^[a-zA-Z_][\w-]*$/.test(id)
    ? `#${id}`
    : `[id="${id.replaceAll('\\', '\\\\').replaceAll('"', '\\"')}"]`;
  const style: CSSProperties | undefined =
    items === undefined && itemsGap === undefined && itemsPeek === undefined
      ? customStyle
      : {
          ...customStyle,
          ...(items === undefined ? {} : { '--bs-carousel-items': String(items) }),
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
    <CarouselTargetContext.Provider value={{ ...carousel, target, ends: ends ?? 'loop' }}>
      <Box<C>
        {...(props as BoxProps<C>)}
        ref={rootRef}
        component={component ?? ('div' as C)}
        id={id}
        style={style}
        data-bs-autoplay={autoplay ? 'true' : undefined}
        data-bs-ends={ends}
        data-bs-theme={colorMode}
        onKeyDown={(event: KeyboardEvent<HTMLElement>) => {
          if (typeof onKeyDown === 'function') onKeyDown(event);
          if (
            event.defaultPrevented ||
            (event.target instanceof Element &&
              event.target.closest('.carousel') !== event.currentTarget) ||
            (event.target instanceof HTMLElement &&
              (event.target.isContentEditable ||
                /^(INPUT|TEXTAREA|SELECT)$/.test(event.target.tagName)))
          )
            return;
          if (event.key === 'ArrowLeft' || event.key === 'ArrowRight') {
            event.preventDefault();
            const rtl = getComputedStyle(event.currentTarget).direction === 'rtl';
            const next = (event.key === 'ArrowRight') !== rtl;
            carousel.navigate((carousel.index ?? 0) + (next ? 1 : -1), true);
          }
        }}
        classNameBefore={clsx(
          'carousel',
          carousel.running && 'carousel-playing',
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
  children,
  ...props
}: CarouselIndicatorsProps<C>) {
  const carousel = useContext(CarouselTargetContext);
  if (children === undefined && !carousel) {
    throw new Error('Carousel indicators must be rendered inside a Carousel.');
  }

  return (
    <Box<C>
      {...(props as BoxProps<C>)}
      component={component ?? ('div' as C)}
      classNameBefore={clsx('carousel-indicators', props.classNameBefore)}
      className={className}
    >
      {children === undefined
        ? Array.from({ length: carousel?.count ?? 0 }, (_, index) => (
            <CarouselIndicator key={index} index={index} />
          ))
        : children}
    </Box>
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
  onClick,
  ...props
}: CarouselIndicatorProps<C>) {
  const carousel = useCarouselTarget();
  const selected = carousel.index === null ? active : carousel.index === index;

  return (
    <Box<C>
      {...(props as BoxProps<C>)}
      component={component ?? ('button' as C)}
      classNameBefore={clsx(selected && 'active', className, props.classNameBefore)}
      className={undefined}
      type={type ?? 'button'}
      aria-current={selected || undefined}
      aria-label={`Slide ${index + 1}`}
      data-bs-slide-to={index}
      data-bs-target={carousel.target}
      onClick={(event: MouseEvent<HTMLElement>) => {
        if (typeof onClick === 'function') onClick(event);
        if (!event.defaultPrevented) carousel.navigate(index, true);
      }}
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
  disabled,
  onClick,
  ...props
}: CarouselControlProps<C>) {
  const carousel = useCarouselTarget();
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
    'data-bs-target': carousel.target,
    disabled:
      disabled ||
      (carousel.ends === 'stop' &&
        carousel.index !== null &&
        (direction === 'previous' ? carousel.index <= 0 : carousel.index >= carousel.lastIndex)),
    onClick: (event: MouseEvent<HTMLElement>) => {
      if (typeof onClick === 'function') onClick(event);
      if (!event.defaultPrevented)
        carousel.navigate((carousel.index ?? 0) + (direction === 'previous' ? -1 : 1), true);
    },
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
  onClick,
  ...props
}: CarouselPlayPauseProps<C>) {
  const carousel = useCarouselTarget();
  const iconButtonProps = {
    ...props,
    ...(component ? { component } : {}),
    className: clsx('carousel-control-play-pause', !carousel.playing && 'paused', className),
    type: type ?? 'button',
    'aria-label': ariaLabel ?? (carousel.playing ? pauseLabel : playLabel),
    'data-bs-target': carousel.target,
    'data-bs-pause-label': pauseLabel,
    'data-bs-play-label': playLabel,
    onClick: (event: MouseEvent<HTMLElement>) => {
      if (typeof onClick === 'function') onClick(event);
      if (!event.defaultPrevented) carousel.setPlaying((playing) => !playing);
    },
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

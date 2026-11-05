import clsx from 'clsx';
import type { ElementType } from 'react';

import { Box, type BoxProps } from './box';
import { type ComponentProps } from './shared';

export type CardProps<C extends ElementType = 'div'> = ComponentProps<
  C,
  { variant?: 'subtle' | 'translucent' | undefined }
>;

export function Card<C extends ElementType = 'div'>({
  component,
  className,
  variant,
  ...props
}: CardProps<C>) {
  return (
    <Box<C>
      {...props}
      component={component ?? ('div' as C)}
      classNameBefore={clsx('card', variant && `card-${variant}`, props.classNameBefore)}
      className={className}
    />
  );
}

type CardPartProps<C extends ElementType> = BoxProps<C>;
type CardPartRenderProps<C extends ElementType> = CardPartProps<C> & {
  baseClass: string;
  defaultComponent: C;
};

function CardPart<C extends ElementType>({
  baseClass,
  defaultComponent,
  component,
  className,
  classNameBefore,
  ...props
}: CardPartRenderProps<C>) {
  return (
    <Box<C>
      {...props}
      component={component ?? defaultComponent}
      classNameBefore={clsx(baseClass, classNameBefore)}
      className={className}
    />
  );
}

export type CardBodyProps<C extends ElementType = 'div'> = CardPartProps<C>;

export function CardBody<C extends ElementType = 'div'>(props: CardBodyProps<C>) {
  return <CardPart<C> {...props} baseClass='card-body' defaultComponent={'div' as C} />;
}

export type CardHeaderProps<C extends ElementType = 'div'> = CardPartProps<C>;

export function CardHeader<C extends ElementType = 'div'>(props: CardHeaderProps<C>) {
  return <CardPart<C> {...props} baseClass='card-header' defaultComponent={'div' as C} />;
}

export type CardFooterProps<C extends ElementType = 'div'> = CardPartProps<C>;

export function CardFooter<C extends ElementType = 'div'>(props: CardFooterProps<C>) {
  return <CardPart<C> {...props} baseClass='card-footer' defaultComponent={'div' as C} />;
}

export type CardTitleProps<C extends ElementType = 'h5'> = CardPartProps<C>;

export function CardTitle<C extends ElementType = 'h5'>(props: CardTitleProps<C>) {
  return <CardPart<C> {...props} baseClass='card-title' defaultComponent={'h5' as C} />;
}

export type CardSubtitleProps<C extends ElementType = 'h6'> = CardPartProps<C>;

export function CardSubtitle<C extends ElementType = 'h6'>(props: CardSubtitleProps<C>) {
  return <CardPart<C> {...props} baseClass='card-subtitle' defaultComponent={'h6' as C} />;
}

export type CardTextProps<C extends ElementType = 'p'> = CardPartProps<C>;

export function CardText<C extends ElementType = 'p'>(props: CardTextProps<C>) {
  return <CardPart<C> {...props} baseClass='card-text' defaultComponent={'p' as C} />;
}

export type CardImageProps<C extends ElementType = 'img'> = ComponentProps<
  C,
  { placement?: 'top' | 'bottom' | undefined }
>;

export function CardImage<C extends ElementType = 'img'>({
  component,
  className,
  placement,
  ...props
}: CardImageProps<C>) {
  return (
    <Box<C>
      {...props}
      component={component ?? ('img' as C)}
      classNameBefore={clsx(
        placement ? `card-img-${placement}` : 'card-img-top',
        props.classNameBefore,
      )}
      className={className}
    />
  );
}

export type CardImageOverlayProps<C extends ElementType = 'div'> = CardPartProps<C>;

export function CardImageOverlay<C extends ElementType = 'div'>(props: CardImageOverlayProps<C>) {
  return <CardPart<C> {...props} baseClass='card-img-overlay' defaultComponent={'div' as C} />;
}

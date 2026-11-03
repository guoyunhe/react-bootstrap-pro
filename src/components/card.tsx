import clsx from 'clsx';
import type { ElementType } from 'react';

import type { BoxProps } from './box';
import { ClassedBox, type BoxComponentProps, type ClassedBoxProps } from './shared';

export type CardProps<C extends ElementType = 'div'> = BoxComponentProps<
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
    <ClassedBox<C>
      {...props}
      baseClass={clsx('card', variant && `card-${variant}`)}
      component={component}
      defaultComponent={'div' as C}
      className={className}
    />
  );
}

type CardPartProps<C extends ElementType> = BoxProps<C>;

function CardPart<C extends ElementType>({
  baseClass,
  defaultComponent,
  component,
  className,
  ...props
}: ClassedBoxProps<C, BoxProps<C>>) {
  return (
    <ClassedBox<C>
      {...props}
      baseClass={baseClass}
      component={component}
      defaultComponent={defaultComponent}
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

export type CardImageProps<C extends ElementType = 'img'> = BoxComponentProps<
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
    <ClassedBox<C>
      {...props}
      baseClass={clsx(placement ? `card-img-${placement}` : 'card-img-top')}
      component={component}
      defaultComponent={'img' as C}
      className={className}
    />
  );
}

export type CardImageOverlayProps<C extends ElementType = 'div'> = CardPartProps<C>;

export function CardImageOverlay<C extends ElementType = 'div'>(props: CardImageOverlayProps<C>) {
  return <CardPart<C> {...props} baseClass='card-img-overlay' defaultComponent={'div' as C} />;
}

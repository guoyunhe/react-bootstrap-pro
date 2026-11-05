import clsx from 'clsx';
import type { ElementType } from 'react';

import { ClassedBox, type ComponentProps } from './shared';

type ImageOwnProps = {
  fluid?: boolean | undefined;
  thumbnail?: boolean | undefined;
};

export type ImageProps<C extends ElementType = 'img'> = ComponentProps<C, ImageOwnProps>;

export function Image<C extends ElementType = 'img'>({
  component,
  className,
  fluid,
  thumbnail,
  ...props
}: ImageProps<C>) {
  return (
    <ClassedBox<C>
      {...props}
      baseClass={clsx(fluid && 'img-fluid', thumbnail && 'img-thumbnail')}
      component={component}
      defaultComponent={'img' as C}
      className={className}
    />
  );
}

export type FigureProps<C extends ElementType = 'figure'> = ComponentProps<C>;

export function Figure<C extends ElementType = 'figure'>({
  component,
  className,
  ...props
}: FigureProps<C>) {
  return (
    <ClassedBox<C>
      {...props}
      baseClass='figure'
      component={component}
      defaultComponent={'figure' as C}
      className={className}
    />
  );
}

export type FigureCaptionProps<C extends ElementType = 'figcaption'> = ComponentProps<C>;

export function FigureCaption<C extends ElementType = 'figcaption'>({
  component,
  className,
  ...props
}: FigureCaptionProps<C>) {
  return (
    <ClassedBox<C>
      {...props}
      baseClass='figure-caption'
      component={component}
      defaultComponent={'figcaption' as C}
      className={className}
    />
  );
}

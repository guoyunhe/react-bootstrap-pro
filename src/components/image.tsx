import clsx from 'clsx';
import type { ElementType } from 'react';

import { Box } from './box';
import { type ComponentProps } from './shared';

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
    <Box<C>
      {...props}
      component={component ?? ('img' as C)}
      classNameBefore={clsx(
        fluid && 'img-fluid',
        thumbnail && 'img-thumbnail',
        props.classNameBefore,
      )}
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
    <Box<C>
      {...props}
      component={component ?? ('figure' as C)}
      classNameBefore={clsx('figure', props.classNameBefore)}
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
    <Box<C>
      {...props}
      component={component ?? ('figcaption' as C)}
      classNameBefore={clsx('figure-caption', props.classNameBefore)}
      className={className}
    />
  );
}

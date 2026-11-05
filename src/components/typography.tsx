import clsx from 'clsx';
import type { ElementType } from 'react';

import { Box } from './box';
import type { BoxProps } from './box';

export type HeadingLevel = 1 | 2 | 3 | 4 | 5 | 6;

type HeadingOwnProps = {
  /** Semantic heading level. Also determines the visual size unless `size` is provided. */
  level?: HeadingLevel | undefined;
  /** Visual heading size, independent of the semantic level. */
  size?: HeadingLevel | undefined;
};

export type HeadingProps<C extends ElementType = 'h1'> = Omit<BoxProps<C>, keyof HeadingOwnProps> &
  HeadingOwnProps;

export function Heading<C extends ElementType = 'h1'>({
  component,
  className,
  level = 1,
  size = level,
  ...props
}: HeadingProps<C>) {
  return (
    <Box<C>
      {...(props as BoxProps<C>)}
      component={component ?? (`h${level}` as C)}
      classNameBefore={clsx(`h${size}`, props.classNameBefore)}
      className={className}
    />
  );
}

type DisplayHeadingOwnProps = {
  size?: HeadingLevel | undefined;
};

export type DisplayHeadingProps<C extends ElementType = 'h1'> = Omit<
  BoxProps<C>,
  keyof DisplayHeadingOwnProps
> &
  DisplayHeadingOwnProps;

export function DisplayHeading<C extends ElementType = 'h1'>({
  component,
  className,
  size = 1,
  ...props
}: DisplayHeadingProps<C>) {
  return (
    <Box<C>
      {...(props as BoxProps<C>)}
      component={component ?? ('h1' as C)}
      classNameBefore={clsx(`display-${size}`, props.classNameBefore)}
      className={className}
    />
  );
}

export type LeadProps<C extends ElementType = 'p'> = BoxProps<C>;

export function Lead<C extends ElementType = 'p'>({
  component,
  className,
  ...props
}: LeadProps<C>) {
  return (
    <Box<C>
      {...(props as BoxProps<C>)}
      component={component ?? ('p' as C)}
      classNameBefore={clsx('lead', props.classNameBefore)}
      className={className}
    />
  );
}

export type BlockquoteProps<C extends ElementType = 'blockquote'> = BoxProps<C>;

export function Blockquote<C extends ElementType = 'blockquote'>({
  component,
  className,
  ...props
}: BlockquoteProps<C>) {
  return (
    <Box<C>
      {...(props as BoxProps<C>)}
      component={component ?? ('blockquote' as C)}
      classNameBefore={clsx('blockquote', props.classNameBefore)}
      className={className}
    />
  );
}

export type BlockquoteFooterProps<C extends ElementType = 'footer'> = BoxProps<C>;

export function BlockquoteFooter<C extends ElementType = 'footer'>({
  component,
  className,
  ...props
}: BlockquoteFooterProps<C>) {
  return (
    <Box<C>
      {...(props as BoxProps<C>)}
      component={component ?? ('footer' as C)}
      classNameBefore={clsx('blockquote-footer', props.classNameBefore)}
      className={className}
    />
  );
}

type AbbrOwnProps = {
  initialism?: boolean | undefined;
};

export type AbbrProps<C extends ElementType = 'abbr'> = Omit<BoxProps<C>, keyof AbbrOwnProps> &
  AbbrOwnProps;

export function Abbr<C extends ElementType = 'abbr'>({
  component,
  className,
  initialism,
  ...props
}: AbbrProps<C>) {
  return (
    <Box<C>
      {...(props as BoxProps<C>)}
      component={component ?? ('abbr' as C)}
      classNameBefore={clsx(initialism && 'initialism', props.classNameBefore)}
      className={className}
    />
  );
}

export type UnstyledListProps<C extends ElementType = 'ul'> = BoxProps<C>;

export function UnstyledList<C extends ElementType = 'ul'>({
  component,
  className,
  ...props
}: UnstyledListProps<C>) {
  return (
    <Box<C>
      {...(props as BoxProps<C>)}
      component={component ?? ('ul' as C)}
      classNameBefore={clsx('list-unstyled', props.classNameBefore)}
      className={className}
    />
  );
}

export type InlineListProps<C extends ElementType = 'ul'> = BoxProps<C>;

export function InlineList<C extends ElementType = 'ul'>({
  component,
  className,
  ...props
}: InlineListProps<C>) {
  return (
    <Box<C>
      {...(props as BoxProps<C>)}
      component={component ?? ('ul' as C)}
      classNameBefore={clsx('list-inline', props.classNameBefore)}
      className={className}
    />
  );
}

export type InlineListItemProps<C extends ElementType = 'li'> = BoxProps<C>;

export function InlineListItem<C extends ElementType = 'li'>({
  component,
  className,
  ...props
}: InlineListItemProps<C>) {
  return (
    <Box<C>
      {...(props as BoxProps<C>)}
      component={component ?? ('li' as C)}
      classNameBefore={clsx('list-inline-item', props.classNameBefore)}
      className={className}
    />
  );
}

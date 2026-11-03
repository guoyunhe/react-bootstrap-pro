import clsx from 'clsx';
import type { ElementType } from 'react';

import { ClassedBox, type BoxComponentProps } from './shared';

export type HeadingLevel = 1 | 2 | 3 | 4 | 5 | 6;

type HeadingOwnProps = {
  /** Semantic heading level. Also determines the visual size unless `size` is provided. */
  level?: HeadingLevel | undefined;
  /** Visual heading size, independent of the semantic level. */
  size?: HeadingLevel | undefined;
};

export type HeadingProps<C extends ElementType = 'h1'> = BoxComponentProps<C, HeadingOwnProps>;

export function Heading<C extends ElementType = 'h1'>({
  component,
  className,
  level = 1,
  size = level,
  ...props
}: HeadingProps<C>) {
  return (
    <ClassedBox<C>
      {...props}
      baseClass={`h${size}`}
      component={component}
      defaultComponent={`h${level}` as C}
      className={className}
    />
  );
}

type DisplayHeadingOwnProps = {
  size?: HeadingLevel | undefined;
};

export type DisplayHeadingProps<C extends ElementType = 'h1'> = BoxComponentProps<
  C,
  DisplayHeadingOwnProps
>;

export function DisplayHeading<C extends ElementType = 'h1'>({
  component,
  className,
  size = 1,
  ...props
}: DisplayHeadingProps<C>) {
  return (
    <ClassedBox<C>
      {...props}
      baseClass={`display-${size}`}
      component={component}
      defaultComponent={'h1' as C}
      className={className}
    />
  );
}

export type LeadProps<C extends ElementType = 'p'> = BoxComponentProps<C>;

export function Lead<C extends ElementType = 'p'>({
  component,
  className,
  ...props
}: LeadProps<C>) {
  return (
    <ClassedBox<C>
      {...props}
      baseClass='lead'
      component={component}
      defaultComponent={'p' as C}
      className={className}
    />
  );
}

export type BlockquoteProps<C extends ElementType = 'blockquote'> = BoxComponentProps<C>;

export function Blockquote<C extends ElementType = 'blockquote'>({
  component,
  className,
  ...props
}: BlockquoteProps<C>) {
  return (
    <ClassedBox<C>
      {...props}
      baseClass='blockquote'
      component={component}
      defaultComponent={'blockquote' as C}
      className={className}
    />
  );
}

export type BlockquoteFooterProps<C extends ElementType = 'footer'> = BoxComponentProps<C>;

export function BlockquoteFooter<C extends ElementType = 'footer'>({
  component,
  className,
  ...props
}: BlockquoteFooterProps<C>) {
  return (
    <ClassedBox<C>
      {...props}
      baseClass='blockquote-footer'
      component={component}
      defaultComponent={'footer' as C}
      className={className}
    />
  );
}

type AbbrOwnProps = {
  initialism?: boolean | undefined;
};

export type AbbrProps<C extends ElementType = 'abbr'> = BoxComponentProps<C, AbbrOwnProps>;

export function Abbr<C extends ElementType = 'abbr'>({
  component,
  className,
  initialism,
  ...props
}: AbbrProps<C>) {
  return (
    <ClassedBox<C>
      {...props}
      baseClass={clsx(initialism && 'initialism')}
      component={component}
      defaultComponent={'abbr' as C}
      className={className}
    />
  );
}

export type UnstyledListProps<C extends ElementType = 'ul'> = BoxComponentProps<C>;

export function UnstyledList<C extends ElementType = 'ul'>({
  component,
  className,
  ...props
}: UnstyledListProps<C>) {
  return (
    <ClassedBox<C>
      {...props}
      baseClass='list-unstyled'
      component={component}
      defaultComponent={'ul' as C}
      className={className}
    />
  );
}

export type InlineListProps<C extends ElementType = 'ul'> = BoxComponentProps<C>;

export function InlineList<C extends ElementType = 'ul'>({
  component,
  className,
  ...props
}: InlineListProps<C>) {
  return (
    <ClassedBox<C>
      {...props}
      baseClass='list-inline'
      component={component}
      defaultComponent={'ul' as C}
      className={className}
    />
  );
}

export type InlineListItemProps<C extends ElementType = 'li'> = BoxComponentProps<C>;

export function InlineListItem<C extends ElementType = 'li'>({
  component,
  className,
  ...props
}: InlineListItemProps<C>) {
  return (
    <ClassedBox<C>
      {...props}
      baseClass='list-inline-item'
      component={component}
      defaultComponent={'li' as C}
      className={className}
    />
  );
}

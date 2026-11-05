import clsx from 'clsx';
import type { ElementType } from 'react';

import { type ComponentProps } from '../types';
import { Box } from './box';
import type { BoxProps } from './box';

export type BreadcrumbProps<C extends ElementType = 'ol'> = BoxProps<C>;

export function Breadcrumb<C extends ElementType = 'ol'>({
  component,
  className,
  ...props
}: BreadcrumbProps<C>) {
  return (
    <Box<C>
      {...(props as BoxProps<C>)}
      component={component ?? ('ol' as C)}
      classNameBefore={clsx('breadcrumb', props.classNameBefore)}
      className={className}
    />
  );
}

export type BreadcrumbItemProps<C extends ElementType = 'li'> = BoxProps<C>;

export function BreadcrumbItem<C extends ElementType = 'li'>({
  component,
  className,
  ...props
}: BreadcrumbItemProps<C>) {
  return (
    <Box<C>
      {...(props as BoxProps<C>)}
      component={component ?? ('li' as C)}
      classNameBefore={clsx('breadcrumb-item', props.classNameBefore)}
      className={className}
    />
  );
}

export type BreadcrumbLinkProps<C extends ElementType = 'a'> = ComponentProps<
  C,
  { active?: boolean | undefined }
>;

export function BreadcrumbLink<C extends ElementType = 'a'>({
  component,
  className,
  active,
  ...props
}: BreadcrumbLinkProps<C>) {
  return (
    <Box<C>
      {...(props as BoxProps<C>)}
      component={component ?? ('a' as C)}
      classNameBefore={clsx('breadcrumb-link', active && 'active', props.classNameBefore)}
      className={className}
      aria-current={active ? 'page' : props['aria-current']}
    />
  );
}

export type BreadcrumbDividerProps<C extends ElementType = 'li'> = BoxProps<C>;

export function BreadcrumbDivider<C extends ElementType = 'li'>({
  component,
  className,
  ...props
}: BreadcrumbDividerProps<C>) {
  return (
    <Box<C>
      {...(props as BoxProps<C>)}
      component={component ?? ('li' as C)}
      classNameBefore={clsx('breadcrumb-divider', props.classNameBefore)}
      className={className}
      aria-hidden={props['aria-hidden'] ?? true}
    />
  );
}

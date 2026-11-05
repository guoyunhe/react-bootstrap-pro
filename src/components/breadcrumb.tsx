import clsx from 'clsx';
import type { ElementType } from 'react';

import type { BoxProps } from './box';
import { ClassedBox, type ComponentProps } from './shared';

export type BreadcrumbProps<C extends ElementType = 'ol'> = BoxProps<C>;

export function Breadcrumb<C extends ElementType = 'ol'>({
  component,
  className,
  ...props
}: BreadcrumbProps<C>) {
  return (
    <ClassedBox<C>
      {...props}
      baseClass='breadcrumb'
      component={component}
      defaultComponent={'ol' as C}
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
    <ClassedBox<C>
      {...props}
      baseClass='breadcrumb-item'
      component={component}
      defaultComponent={'li' as C}
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
    <ClassedBox<C>
      {...props}
      baseClass={clsx('breadcrumb-link', active && 'active')}
      component={component}
      defaultComponent={'a' as C}
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
    <ClassedBox<C>
      {...props}
      baseClass='breadcrumb-divider'
      component={component}
      defaultComponent={'li' as C}
      className={className}
      aria-hidden={props['aria-hidden'] ?? true}
    />
  );
}

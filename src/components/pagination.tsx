import clsx from 'clsx';
import type { ElementType } from 'react';

import { ClassedBox, type BoxComponentProps } from './shared';

export type PaginationProps<C extends ElementType = 'ul'> = BoxComponentProps<
  C,
  { size?: 'sm' | 'lg' | undefined }
>;

export function Pagination<C extends ElementType = 'ul'>({
  component,
  className,
  size,
  ...props
}: PaginationProps<C>) {
  return (
    <ClassedBox<C>
      {...props}
      baseClass={clsx('pagination', size && `pagination-${size}`)}
      component={component}
      defaultComponent={'ul' as C}
      className={className}
    />
  );
}

export type PaginationItemProps<C extends ElementType = 'li'> = BoxComponentProps<
  C,
  { active?: boolean | undefined; disabled?: boolean | undefined }
>;

export function PaginationItem<C extends ElementType = 'li'>({
  component,
  className,
  active,
  disabled,
  ...props
}: PaginationItemProps<C>) {
  return (
    <ClassedBox<C>
      {...props}
      baseClass={clsx('page-item', active && 'active', disabled && 'disabled')}
      component={component}
      defaultComponent={'li' as C}
      className={className}
      aria-current={active ? (props['aria-current'] ?? 'page') : props['aria-current']}
      aria-disabled={disabled || props['aria-disabled']}
    />
  );
}

export type PageLinkProps<C extends ElementType = 'a'> = BoxComponentProps<
  C,
  { active?: boolean | undefined }
>;

export function PageLink<C extends ElementType = 'a'>({
  component,
  className,
  active,
  ...props
}: PageLinkProps<C>) {
  return (
    <ClassedBox<C>
      {...props}
      baseClass={clsx('page-link', active && 'active')}
      component={component}
      defaultComponent={'a' as C}
      className={className}
      aria-current={active ? (props['aria-current'] ?? 'page') : props['aria-current']}
    />
  );
}

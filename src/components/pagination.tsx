import clsx from 'clsx';
import type { ElementType } from 'react';

import { type ComponentProps } from '../types';
import { Box } from './box';
import type { BoxProps } from './box';

export type PaginationProps<C extends ElementType = 'ul'> = ComponentProps<
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
    <Box<C>
      {...(props as BoxProps<C>)}
      component={component ?? ('ul' as C)}
      classNameBefore={clsx('pagination', size && `pagination-${size}`, props.classNameBefore)}
      className={className}
    />
  );
}

export type PaginationItemProps<C extends ElementType = 'li'> = ComponentProps<
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
    <Box<C>
      {...(props as BoxProps<C>)}
      component={component ?? ('li' as C)}
      classNameBefore={clsx(
        'page-item',
        active && 'active',
        disabled && 'disabled',
        props.classNameBefore,
      )}
      className={className}
      aria-current={active ? (props['aria-current'] ?? 'page') : props['aria-current']}
      aria-disabled={disabled || props['aria-disabled']}
    />
  );
}

export type PageLinkProps<C extends ElementType = 'a'> = ComponentProps<
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
    <Box<C>
      {...(props as BoxProps<C>)}
      component={component ?? ('a' as C)}
      classNameBefore={clsx('page-link', active && 'active', props.classNameBefore)}
      className={className}
      aria-current={active ? (props['aria-current'] ?? 'page') : props['aria-current']}
    />
  );
}

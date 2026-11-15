import clsx from 'clsx';
import { useContext, useMemo } from 'react';
import type { ElementType, ReactNode } from 'react';

import { BreadcrumbContext } from '../contexts/breadcrumb';
import type { BreadcrumbEntry } from '../contexts/breadcrumb';
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

export type BreadcrumbLinkProps<C extends ElementType = 'a'> = Omit<
  BoxProps<C>,
  keyof { active?: boolean | undefined }
> & { active?: boolean | undefined };

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

export type BreadcrumbProviderProps = {
  children?: ReactNode | undefined;
  /** Entries appended after the entries inherited from ancestor providers. */
  items?: readonly BreadcrumbEntry[] | undefined;
  /** Ignores inherited entries and starts a new trail. */
  root?: boolean | undefined;
};

/**
 * Adds entries to the breadcrumb trail of its descendants, so nested route components can stack
 * their own prefixes. Set `root` to start a new trail without inheriting ancestor entries.
 *
 * The provider renders no markup. Read the assembled entries with `useBreadcrumb`.
 */
export function BreadcrumbProvider({ children, items, root = false }: BreadcrumbProviderProps) {
  const inheritedEntries = useContext(BreadcrumbContext);
  const entries = useMemo(
    () => [...(root ? [] : inheritedEntries), ...(items ?? [])],
    [inheritedEntries, items, root],
  );

  return <BreadcrumbContext.Provider value={entries}>{children}</BreadcrumbContext.Provider>;
}

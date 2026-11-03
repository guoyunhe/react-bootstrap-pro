import clsx from 'clsx';
import type { ElementType } from 'react';

import type { BoxProps } from './box';
import { ClassedBox, type BoxComponentProps } from './shared';

export type TabListProps<C extends ElementType = 'ul'> = BoxProps<C>;

export function TabList<C extends ElementType = 'ul'>({
  component,
  className,
  ...props
}: TabListProps<C>) {
  return (
    <ClassedBox<C>
      {...props}
      baseClass='nav nav-tabs'
      component={component}
      defaultComponent={'ul' as C}
      className={className}
      role={props['role'] ?? 'tablist'}
    />
  );
}

export type TabItemProps<C extends ElementType = 'li'> = BoxProps<C>;

export function TabItem<C extends ElementType = 'li'>({
  component,
  className,
  role,
  ...props
}: TabItemProps<C>) {
  return (
    <ClassedBox<C>
      {...props}
      baseClass='nav-item'
      component={component}
      defaultComponent={'li' as C}
      className={className}
      role={role ?? 'presentation'}
    />
  );
}

export type TabProps<C extends ElementType = 'button'> = BoxComponentProps<
  C,
  { active?: boolean | undefined; targetId?: string | undefined }
>;

export function Tab<C extends ElementType = 'button'>({
  component,
  className,
  active,
  targetId,
  type,
  ...props
}: TabProps<C>) {
  const target = targetId ? `#${targetId}` : undefined;
  return (
    <ClassedBox<C>
      {...props}
      baseClass={clsx('nav-link', active && 'active')}
      component={component}
      defaultComponent={'button' as C}
      className={className}
      type={type ?? 'button'}
      role={props['role'] ?? 'tab'}
      aria-selected={active ?? false}
      aria-controls={targetId ?? props['aria-controls']}
      data-bs-toggle={props['data-bs-toggle'] ?? 'tab'}
      data-bs-target={target ?? props['data-bs-target']}
    />
  );
}

export type TabContentProps<C extends ElementType = 'div'> = BoxProps<C>;

export function TabContent<C extends ElementType = 'div'>({
  component,
  className,
  ...props
}: TabContentProps<C>) {
  return (
    <ClassedBox<C>
      {...props}
      baseClass='tab-content'
      component={component}
      defaultComponent={'div' as C}
      className={className}
    />
  );
}

export type TabPaneProps<C extends ElementType = 'div'> = BoxComponentProps<
  C,
  { active?: boolean | undefined }
>;

export function TabPane<C extends ElementType = 'div'>({
  component,
  className,
  active,
  ...props
}: TabPaneProps<C>) {
  return (
    <ClassedBox<C>
      {...props}
      baseClass={clsx('tab-pane', active && 'active')}
      component={component}
      defaultComponent={'div' as C}
      className={className}
      role={props['role'] ?? 'tabpanel'}
      hidden={!active}
    />
  );
}

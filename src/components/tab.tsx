import clsx from 'clsx';
import type { ElementType } from 'react';

import { Box } from './box';
import type { BoxProps } from './box';

export type TabListProps<C extends ElementType = 'ul'> = BoxProps<C>;

export function TabList<C extends ElementType = 'ul'>({
  component,
  className,
  ...props
}: TabListProps<C>) {
  return (
    <Box<C>
      {...(props as BoxProps<C>)}
      component={component ?? ('ul' as C)}
      classNameBefore={clsx('nav nav-tabs', props.classNameBefore)}
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
    <Box<C>
      {...(props as BoxProps<C>)}
      component={component ?? ('li' as C)}
      classNameBefore={clsx('nav-item', props.classNameBefore)}
      className={className}
      role={role ?? 'presentation'}
    />
  );
}

export type TabProps<C extends ElementType = 'button'> = Omit<
  BoxProps<C>,
  keyof { active?: boolean | undefined; targetId?: string | undefined }
> & { active?: boolean | undefined; targetId?: string | undefined };

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
    <Box<C>
      {...(props as BoxProps<C>)}
      component={component ?? ('button' as C)}
      classNameBefore={clsx('nav-link', active && 'active', props.classNameBefore)}
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
    <Box<C>
      {...(props as BoxProps<C>)}
      component={component ?? ('div' as C)}
      classNameBefore={clsx('tab-content', props.classNameBefore)}
      className={className}
    />
  );
}

export type TabPaneProps<C extends ElementType = 'div'> = Omit<
  BoxProps<C>,
  keyof { active?: boolean | undefined }
> & { active?: boolean | undefined };

export function TabPane<C extends ElementType = 'div'>({
  component,
  className,
  active,
  ...props
}: TabPaneProps<C>) {
  return (
    <Box<C>
      {...(props as BoxProps<C>)}
      component={component ?? ('div' as C)}
      classNameBefore={clsx('tab-pane', active && 'active', props.classNameBefore)}
      className={className}
      role={props['role'] ?? 'tabpanel'}
      hidden={!active}
    />
  );
}

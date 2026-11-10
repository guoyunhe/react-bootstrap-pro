import clsx from 'clsx';
import type { ElementType } from 'react';

import { Box } from './box';
import type { BoxProps } from './box';

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

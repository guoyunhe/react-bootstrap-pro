import clsx from 'clsx';
import { createContext, useContext, type ElementType } from 'react';

import { Box } from './box';
import type { BoxProps } from './box';
import type { NavValue } from './nav';

const TabContentContext = createContext<{ value: NavValue } | undefined>(undefined);

type TabContentOwnProps = {
  value?: NavValue | undefined;
};

export type TabContentProps<C extends ElementType = 'div'> = Omit<
  BoxProps<C>,
  keyof TabContentOwnProps
> &
  TabContentOwnProps;

export function TabContent<C extends ElementType = 'div'>({
  component,
  className,
  value,
  ...props
}: TabContentProps<C>) {
  return (
    <TabContentContext.Provider value={value === undefined ? undefined : { value }}>
      <Box<C>
        {...(props as BoxProps<C>)}
        component={component ?? ('div' as C)}
        classNameBefore={clsx('tab-content', props.classNameBefore)}
        className={className}
      />
    </TabContentContext.Provider>
  );
}

type TabPaneOwnProps = {
  active?: boolean | undefined;
  value?: NavValue | undefined;
};

export type TabPaneProps<C extends ElementType = 'div'> = Omit<BoxProps<C>, keyof TabPaneOwnProps> &
  TabPaneOwnProps;

export function TabPane<C extends ElementType = 'div'>({
  component,
  className,
  active,
  value,
  ...props
}: TabPaneProps<C>) {
  const content = useContext(TabContentContext);
  const isActive = content === undefined ? active : content.value === value;

  return (
    <Box<C>
      {...(props as BoxProps<C>)}
      component={component ?? ('div' as C)}
      classNameBefore={clsx('tab-pane', isActive && 'active', props.classNameBefore)}
      className={className}
      role={props['role'] ?? 'tabpanel'}
      hidden={!isActive}
    />
  );
}

import type { ElementType } from 'react';

import { ClassedBox, type ComponentProps } from './shared';

export type ProseProps<C extends ElementType = 'div'> = ComponentProps<C>;

export function Prose<C extends ElementType = 'div'>({
  component,
  className,
  ...props
}: ProseProps<C>) {
  return (
    <ClassedBox<C>
      {...props}
      baseClass='prose'
      component={component}
      defaultComponent={'div' as C}
      className={className}
    />
  );
}

export type NotProseProps<C extends ElementType = 'div'> = ComponentProps<C>;

export function NotProse<C extends ElementType = 'div'>({
  component,
  className,
  ...props
}: NotProseProps<C>) {
  return (
    <ClassedBox<C>
      {...props}
      baseClass='not-prose'
      component={component}
      defaultComponent={'div' as C}
      className={className}
    />
  );
}

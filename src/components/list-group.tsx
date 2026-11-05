import clsx from 'clsx';
import type { ElementType } from 'react';

import { ClassedBox, type ComponentProps } from './shared';

export type ListGroupProps<C extends ElementType = 'ul'> = ComponentProps<
  C,
  {
    flush?: boolean | undefined;
    horizontal?: boolean | 'sm' | 'md' | 'lg' | 'xl' | '2xl' | undefined;
    numbered?: boolean | undefined;
  }
>;

export function ListGroup<C extends ElementType = 'ul'>({
  component,
  className,
  flush,
  horizontal,
  numbered,
  ...props
}: ListGroupProps<C>) {
  return (
    <ClassedBox<C>
      {...props}
      baseClass={clsx(
        'list-group',
        flush && 'list-group-flush',
        horizontal &&
          (horizontal === true ? 'list-group-horizontal' : `list-group-horizontal-${horizontal}`),
        numbered && 'list-group-numbered',
      )}
      component={component}
      defaultComponent={'ul' as C}
      className={className}
    />
  );
}

export type ListGroupItemProps<C extends ElementType = 'li'> = ComponentProps<
  C,
  { action?: boolean | undefined; active?: boolean | undefined }
>;

export function ListGroupItem<C extends ElementType = 'li'>({
  component,
  className,
  action,
  active,
  ...props
}: ListGroupItemProps<C>) {
  return (
    <ClassedBox<C>
      {...props}
      baseClass={clsx('list-group-item', action && 'list-group-item-action', active && 'active')}
      component={component}
      defaultComponent={'li' as C}
      className={className}
    />
  );
}

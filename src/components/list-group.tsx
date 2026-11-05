import clsx from 'clsx';
import type { ElementType } from 'react';

import { Box } from './box';
import type { BoxProps } from './box';
import { type ComponentProps } from './shared';

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
    <Box<C>
      {...(props as BoxProps<C>)}
      component={component ?? ('ul' as C)}
      classNameBefore={clsx(
        'list-group',
        flush && 'list-group-flush',
        horizontal &&
          (horizontal === true ? 'list-group-horizontal' : `list-group-horizontal-${horizontal}`),
        numbered && 'list-group-numbered',
        props.classNameBefore,
      )}
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
    <Box<C>
      {...(props as BoxProps<C>)}
      component={component ?? ('li' as C)}
      classNameBefore={clsx(
        'list-group-item',
        action && 'list-group-item-action',
        active && 'active',
        props.classNameBefore,
      )}
      className={className}
    />
  );
}

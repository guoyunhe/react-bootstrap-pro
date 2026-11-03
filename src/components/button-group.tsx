import clsx from 'clsx';
import type { ElementType } from 'react';

import type { BoxProps } from './box';
import { ClassedBox, type BoxComponentProps } from './shared';

export type ButtonGroupProps<C extends ElementType = 'div'> = BoxComponentProps<
  C,
  {
    divider?: boolean | undefined;
    orientation?: 'horizontal' | 'vertical' | undefined;
    size?: 'sm' | 'lg' | undefined;
  }
>;

export function ButtonGroup<C extends ElementType = 'div'>({
  component,
  className,
  divider,
  orientation,
  size,
  role,
  ...props
}: ButtonGroupProps<C>) {
  return (
    <ClassedBox<C>
      {...props}
      baseClass={clsx(
        orientation === 'vertical' ? 'btn-group-vertical' : 'btn-group',
        divider && 'btn-group-divider',
        size && `btn-group-${size}`,
      )}
      component={component}
      defaultComponent={'div' as C}
      className={className}
      role={role ?? 'group'}
    />
  );
}

export type ButtonToolbarProps<C extends ElementType = 'div'> = BoxProps<C>;

export function ButtonToolbar<C extends ElementType = 'div'>({
  component,
  className,
  role,
  ...props
}: ButtonToolbarProps<C>) {
  return (
    <ClassedBox<C>
      {...props}
      baseClass='btn-toolbar'
      component={component}
      defaultComponent={'div' as C}
      className={className}
      role={role ?? 'toolbar'}
    />
  );
}

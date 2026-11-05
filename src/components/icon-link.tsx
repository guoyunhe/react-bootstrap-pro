import clsx from 'clsx';
import type { ElementType } from 'react';

import { ClassedBox, type ComponentProps } from './shared';

type IconLinkOwnProps = {
  hover?: boolean | undefined;
};

export type IconLinkProps<C extends ElementType = 'a'> = ComponentProps<C, IconLinkOwnProps>;

export function IconLink<C extends ElementType = 'a'>({
  component,
  className,
  hover,
  ...props
}: IconLinkProps<C>) {
  return (
    <ClassedBox<C>
      {...props}
      baseClass={clsx('icon-link', hover && 'icon-link-hover')}
      component={component}
      defaultComponent={'a' as C}
      className={className}
    />
  );
}

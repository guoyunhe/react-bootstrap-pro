import clsx from 'clsx';
import type { ElementType } from 'react';

import { Box } from './box';
import { type ComponentProps } from './shared';

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
    <Box<C>
      {...props}
      component={component ?? ('a' as C)}
      classNameBefore={clsx('icon-link', hover && 'icon-link-hover', props.classNameBefore)}
      className={className}
    />
  );
}

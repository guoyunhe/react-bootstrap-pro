import clsx from 'clsx';
import type { ElementType } from 'react';

import { Box } from './box';
import type { BoxProps } from './box';

type IconLinkOwnProps = {
  hover?: boolean | undefined;
};

export type IconLinkProps<C extends ElementType = 'a'> = Omit<BoxProps<C>, keyof IconLinkOwnProps> &
  IconLinkOwnProps;

export function IconLink<C extends ElementType = 'a'>({
  component,
  className,
  hover,
  ...props
}: IconLinkProps<C>) {
  return (
    <Box<C>
      {...(props as BoxProps<C>)}
      component={component ?? ('a' as C)}
      classNameBefore={clsx('icon-link', hover && 'icon-link-hover', props.classNameBefore)}
      className={className}
    />
  );
}

import clsx from 'clsx';
import type { ComponentPropsWithRef, ElementType } from 'react';

import { Box, type BoxProps } from './box';

export type BoxComponentProps<C extends ElementType, OwnProps extends object = object> = OwnProps &
  Omit<BoxProps<C>, keyof OwnProps>;

export type ClassedBoxProps<C extends ElementType, P extends object> = P & {
  baseClass: string;
  defaultComponent: C;
  component?: C | undefined;
  className?: string | undefined;
  ref?: ComponentPropsWithRef<C>['ref'] | undefined;
};

export function ClassedBox<C extends ElementType, P extends object = object>({
  baseClass,
  defaultComponent,
  component,
  className,
  ...props
}: ClassedBoxProps<C, P>) {
  const boxProps = {
    ...props,
    component: component ?? defaultComponent,
    className: clsx(baseClass, className),
  } as BoxProps<C>;

  return <Box<C> {...boxProps} />;
}

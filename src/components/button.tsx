import clsx from 'clsx';
import type { ElementType, MouseEvent } from 'react';

import { Box } from './box';
import type { BoxProps } from './box';
import type { Theme } from './types';

export type ButtonTheme = Theme;

export type ButtonVariant = 'solid' | 'outline' | 'subtle' | 'text' | 'link';

type ButtonOwnProps = {
  variant?: ButtonVariant | undefined;
  theme?: ButtonTheme | undefined;
  size?: 'xs' | 'sm' | 'lg' | undefined;
  active?: boolean | undefined;
  styled?: boolean | undefined;
  disabled?: boolean | undefined;
  check?: boolean | undefined;
};

export type ButtonProps<C extends ElementType = 'button'> = ButtonOwnProps &
  Omit<BoxProps<C>, keyof ButtonOwnProps>;

export function Button<C extends ElementType = 'button'>({
  component,
  variant,
  theme,
  size,
  active,
  styled,
  disabled,
  check,
  classNameBefore,
  className,
  ...props
}: ButtonProps<C>) {
  const Component = component ?? 'button';
  const isDisabledAnchor = Component === 'a' && disabled;
  const classes = clsx(
    'btn',
    variant ? `btn-${variant}` : undefined,
    size && `btn-${size}`,
    active && 'active',
    styled && 'btn-styled',
    check && 'btn-check',
    isDisabledAnchor && 'disabled',
    classNameBefore,
    className,
  );

  const boxProps = {
    ...(Component === 'button' ? { type: 'button' as const } : {}),
    ...props,
    ...(Component === 'a' ? {} : { disabled }),
    ...(isDisabledAnchor
      ? {
          'aria-disabled': true,
          tabIndex: -1,
          onClick: (event: MouseEvent<HTMLElement>) => event.preventDefault(),
        }
      : {}),
    component: Component,
    theme,
    classNameBefore: classes,
  } as BoxProps<C>;

  return <Box {...boxProps} />;
}

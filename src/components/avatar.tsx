import clsx from 'clsx';
import type { ElementType } from 'react';

import { type ComponentProps } from '../types';
import { Box } from './box';
import type { BoxProps } from './box';

export type AvatarProps<C extends ElementType = 'span'> = ComponentProps<
  C,
  { size?: 'xs' | 'sm' | 'lg' | 'xl' | undefined; subtle?: boolean | undefined }
>;

export function Avatar<C extends ElementType = 'span'>({
  component,
  className,
  size,
  subtle,
  ...props
}: AvatarProps<C>) {
  return (
    <Box<C>
      {...(props as BoxProps<C>)}
      component={component ?? ('span' as C)}
      classNameBefore={clsx(
        'avatar',
        size && `avatar-${size}`,
        subtle && 'avatar-subtle',
        props.classNameBefore,
      )}
      className={className}
    />
  );
}

export type AvatarImageProps<C extends ElementType = 'img'> = BoxProps<C>;

export function AvatarImage<C extends ElementType = 'img'>({
  component,
  className,
  ...props
}: AvatarImageProps<C>) {
  return (
    <Box<C>
      {...(props as BoxProps<C>)}
      component={component ?? ('img' as C)}
      classNameBefore={clsx('avatar-img', props.classNameBefore)}
      className={className}
    />
  );
}

export type AvatarStatusProps<C extends ElementType = 'span'> = ComponentProps<
  C,
  { status?: 'online' | 'offline' | 'busy' | 'away' | undefined }
>;

export function AvatarStatus<C extends ElementType = 'span'>({
  component,
  className,
  status,
  ...props
}: AvatarStatusProps<C>) {
  return (
    <Box<C>
      {...(props as BoxProps<C>)}
      component={component ?? ('span' as C)}
      classNameBefore={clsx('avatar-status', status && `status-${status}`, props.classNameBefore)}
      className={className}
      aria-hidden={props['aria-hidden'] ?? true}
    />
  );
}

export type AvatarStackProps<C extends ElementType = 'div'> = BoxProps<C>;

export function AvatarStack<C extends ElementType = 'div'>({
  component,
  className,
  ...props
}: AvatarStackProps<C>) {
  return (
    <Box<C>
      {...(props as BoxProps<C>)}
      component={component ?? ('div' as C)}
      classNameBefore={clsx('avatar-stack', props.classNameBefore)}
      className={className}
    />
  );
}

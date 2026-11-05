import clsx from 'clsx';
import type { ElementType } from 'react';

import type { BoxProps } from './box';
import { ClassedBox, type ComponentProps } from './shared';

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
    <ClassedBox<C>
      {...props}
      baseClass={clsx('avatar', size && `avatar-${size}`, subtle && 'avatar-subtle')}
      component={component}
      defaultComponent={'span' as C}
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
    <ClassedBox<C>
      {...props}
      baseClass='avatar-img'
      component={component}
      defaultComponent={'img' as C}
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
    <ClassedBox<C>
      {...props}
      baseClass={clsx('avatar-status', status && `status-${status}`)}
      component={component}
      defaultComponent={'span' as C}
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
    <ClassedBox<C>
      {...props}
      baseClass='avatar-stack'
      component={component}
      defaultComponent={'div' as C}
      className={className}
    />
  );
}

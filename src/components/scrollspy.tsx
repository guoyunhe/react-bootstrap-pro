import type { ElementType } from 'react';

import { ClassedBox, type ComponentProps } from './shared';

export type ScrollspyProps<C extends ElementType = 'div'> = ComponentProps<
  C,
  { target?: string | undefined }
>;

export function Scrollspy<C extends ElementType = 'div'>({
  component,
  className,
  target,
  ...props
}: ScrollspyProps<C>) {
  return (
    <ClassedBox<C>
      {...props}
      baseClass=''
      component={component}
      defaultComponent={'div' as C}
      className={className}
      data-bs-spy={props['data-bs-spy'] ?? 'scroll'}
      data-bs-target={target ?? props['data-bs-target']}
      tabIndex={props['tabIndex'] ?? 0}
    />
  );
}

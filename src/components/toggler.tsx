import type { ElementType } from 'react';

import { ClassedBox, type BoxComponentProps } from './shared';

export type TogglerProps<C extends ElementType = 'button'> = BoxComponentProps<
  C,
  { attribute?: string | undefined; target?: string | undefined; value?: string | undefined }
>;

export function Toggler<C extends ElementType = 'button'>({
  component,
  className,
  attribute,
  target,
  value,
  type,
  ...props
}: TogglerProps<C>) {
  return (
    <ClassedBox<C>
      {...props}
      baseClass=''
      component={component}
      defaultComponent={'button' as C}
      className={className}
      type={type ?? 'button'}
      data-bs-toggle={props['data-bs-toggle'] ?? 'toggler'}
      data-bs-attribute={attribute ?? props['data-bs-attribute']}
      data-bs-target={target ?? props['data-bs-target']}
      data-bs-value={value ?? props['data-bs-value']}
    />
  );
}

import clsx from 'clsx';
import type { ElementType } from 'react';

import { ClassedBox, type BoxComponentProps } from './shared';

export type RadioSize = 'sm' | 'lg';

export type RadioProps<C extends ElementType = 'input'> = BoxComponentProps<
  C,
  { size?: RadioSize | undefined }
>;

export function Radio<C extends ElementType = 'input'>({
  component,
  className,
  size,
  type,
  ...props
}: RadioProps<C>) {
  return (
    <ClassedBox<C>
      {...props}
      baseClass={clsx('radio', size && `radio-${size}`)}
      component={component}
      defaultComponent={'input' as C}
      className={className}
      type={type ?? 'radio'}
    />
  );
}

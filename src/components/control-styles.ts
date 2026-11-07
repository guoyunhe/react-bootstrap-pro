import clsx from 'clsx';

import type { ValidationState } from '../types';

export type ControlSize = 'sm' | 'lg';

export function getControlClassName(
  baseClass: string,
  size: ControlSize | undefined,
  sizePrefix: 'form-control',
  validation: ValidationState | undefined,
  classNameBefore: string | undefined,
) {
  return clsx(
    baseClass,
    size && `${sizePrefix}-${size}`,
    validation && `is-${validation}`,
    classNameBefore,
  );
}

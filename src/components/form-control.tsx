import clsx from 'clsx';
import type { ElementType } from 'react';

import { ClassedBox, type BoxComponentProps } from './shared';

export type FormControlSize = 'sm' | 'lg';

export type FormControlProps<C extends ElementType = 'input'> = BoxComponentProps<
  C,
  {
    size?: FormControlSize | undefined;
    plaintext?: boolean | undefined;
    ghost?: boolean | undefined;
    adorn?: boolean | undefined;
    adornEnd?: boolean | undefined;
  }
>;

export function FormControl<C extends ElementType = 'input'>({
  component,
  className,
  size,
  plaintext,
  ghost,
  adorn,
  adornEnd,
  ...props
}: FormControlProps<C>) {
  const isAdorn = Boolean(adorn || adornEnd);
  let baseClass = 'form-control';

  if (plaintext) {
    baseClass = 'form-control-plaintext';
  }

  if (ghost) {
    baseClass = 'form-ghost';
  }

  return (
    <ClassedBox<C>
      {...props}
      baseClass={clsx(
        baseClass,
        size && `form-control-${size}`,
        isAdorn && 'form-adorn',
        adornEnd && 'form-adorn-end',
      )}
      component={component}
      defaultComponent={'input' as C}
      className={className}
    />
  );
}

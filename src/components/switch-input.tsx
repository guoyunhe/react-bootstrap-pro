/* oxlint-disable jsx-a11y/role-has-required-aria-props --
 * Native checkboxes expose their checked state, so a static aria-checked would
 * duplicate it and go stale for uncontrolled switches.
 */
import type { ElementType } from 'react';

import { ClassedBox, type BoxComponentProps } from './shared';

export type SwitchInputProps<C extends ElementType = 'input'> = BoxComponentProps<C>;

export function SwitchInput<C extends ElementType = 'input'>({
  component,
  className,
  type,
  ...props
}: SwitchInputProps<C>) {
  return (
    <ClassedBox<C>
      {...props}
      baseClass=''
      component={component}
      defaultComponent={'input' as C}
      className={className}
      type={type ?? 'checkbox'}
      role='switch'
      {...{ switch: '' }}
    />
  );
}

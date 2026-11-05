/* oxlint-disable jsx-a11y/role-has-required-aria-props --
 * Native checkboxes expose their checked state, so a static aria-checked would
 * duplicate it and go stale for uncontrolled switches.
 */
import clsx from 'clsx';
import type { ElementType } from 'react';

import { Box } from './box';
import { type ComponentProps, type ValidationState } from './shared';

export type SwitchInputProps<C extends ElementType = 'input'> = ComponentProps<
  C,
  { validation?: ValidationState | undefined }
>;

export function SwitchInput<C extends ElementType = 'input'>({
  component,
  className,
  validation,
  type,
  ...props
}: SwitchInputProps<C>) {
  return (
    <Box<C>
      {...props}
      component={component ?? ('input' as C)}
      classNameBefore={clsx('', props.classNameBefore)}
      className={clsx(validation && `is-${validation}`, className)}
      type={type ?? 'checkbox'}
      role='switch'
      {...{ switch: '' }}
    />
  );
}

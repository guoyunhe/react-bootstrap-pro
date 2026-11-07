import clsx from 'clsx';
import type { ElementType } from 'react';

import { Button, type ButtonProps } from './button';

export type InputGroupButtonProps<C extends ElementType = 'button'> = ButtonProps<C>;

export function InputGroupButton<C extends ElementType = 'button'>(
  props: InputGroupButtonProps<C>,
) {
  return <Button<C> {...props} className={clsx('input-group-btn', props.className)} />;
}

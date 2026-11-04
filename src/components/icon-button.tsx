import clsx from 'clsx';
import type { ElementType } from 'react';

import { Button, type ButtonProps } from './button';

export type IconButtonProps<C extends ElementType = 'button'> = ButtonProps<C>;

export function IconButton<C extends ElementType = 'button'>(props: IconButtonProps<C>) {
  return <Button<C> {...props} className={clsx('btn-icon', props.className)} />;
}

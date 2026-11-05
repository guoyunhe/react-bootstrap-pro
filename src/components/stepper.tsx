import clsx from 'clsx';
import type { ElementType } from 'react';

import { type ComponentProps } from '../types';
import { Box } from './box';
import type { BoxProps } from './box';

export type StepperProps<C extends ElementType = 'ol'> = ComponentProps<
  C,
  {
    horizontal?: boolean | 'sm' | 'md' | 'lg' | 'xl' | '2xl' | undefined;
    overflow?: boolean | undefined;
  }
>;

export function Stepper<C extends ElementType = 'ol'>({
  component,
  className,
  horizontal,
  overflow,
  ...props
}: StepperProps<C>) {
  return (
    <Box<C>
      {...(props as BoxProps<C>)}
      component={component ?? ('ol' as C)}
      classNameBefore={clsx(
        'stepper',
        overflow && 'stepper-overflow',
        horizontal &&
          (horizontal === true ? 'stepper-horizontal' : `${horizontal}:stepper-horizontal`),
        props.classNameBefore,
      )}
      className={className}
    />
  );
}

export type StepperItemProps<C extends ElementType = 'li'> = ComponentProps<
  C,
  { active?: boolean | undefined }
>;

export function StepperItem<C extends ElementType = 'li'>({
  component,
  className,
  active,
  ...props
}: StepperItemProps<C>) {
  return (
    <Box<C>
      {...(props as BoxProps<C>)}
      component={component ?? ('li' as C)}
      classNameBefore={clsx('stepper-item', active && 'active', props.classNameBefore)}
      className={className}
      aria-current={active ? (props['aria-current'] ?? 'step') : props['aria-current']}
    />
  );
}

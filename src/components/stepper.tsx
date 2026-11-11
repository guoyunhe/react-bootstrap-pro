import clsx from 'clsx';
import type { ElementType } from 'react';

import { Box } from './box';
import type { BoxProps } from './box';

export type StepperProps<C extends ElementType = 'ol'> = Omit<
  BoxProps<C>,
  keyof {
    horizontal?: boolean | 'sm' | 'md' | 'lg' | 'xl' | '2xl' | undefined;
    overflow?: boolean | undefined;
  }
> & {
  horizontal?: boolean | 'sm' | 'md' | 'lg' | 'xl' | '2xl' | undefined;
  overflow?: boolean | undefined;
};

export function Stepper<C extends ElementType = 'ol'>({
  component,
  className,
  horizontal,
  overflow,
  ...props
}: StepperProps<C>) {
  const stepper = (
    <Box<C>
      {...(props as BoxProps<C>)}
      component={component ?? ('ol' as C)}
      classNameBefore={clsx(
        'stepper',
        horizontal &&
          (horizontal === true ? 'stepper-horizontal' : `${horizontal}:stepper-horizontal`),
        props.classNameBefore,
      )}
      className={className}
    />
  );

  // Bootstrap applies `.stepper-overflow` to a scroll container around the list.
  return overflow ? <div className='stepper-overflow'>{stepper}</div> : stepper;
}

export type StepperItemProps<C extends ElementType = 'li'> = Omit<
  BoxProps<C>,
  keyof { active?: boolean | undefined }
> & { active?: boolean | undefined };

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

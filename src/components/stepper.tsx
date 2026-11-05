import clsx from 'clsx';
import type { ElementType } from 'react';

import { ClassedBox, type ComponentProps } from './shared';

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
    <ClassedBox<C>
      {...props}
      baseClass={clsx(
        'stepper',
        overflow && 'stepper-overflow',
        horizontal &&
          (horizontal === true ? 'stepper-horizontal' : `${horizontal}:stepper-horizontal`),
      )}
      component={component}
      defaultComponent={'ol' as C}
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
    <ClassedBox<C>
      {...props}
      baseClass={clsx('stepper-item', active && 'active')}
      component={component}
      defaultComponent={'li' as C}
      className={className}
      aria-current={active ? (props['aria-current'] ?? 'step') : props['aria-current']}
    />
  );
}

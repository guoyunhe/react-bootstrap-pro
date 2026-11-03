import clsx from 'clsx';
import type { ElementType } from 'react';

import { ClassedBox, type BoxComponentProps } from './shared';

export type AlertProps<C extends ElementType = 'div'> = BoxComponentProps<
  C,
  { instant?: boolean | undefined }
>;

export function Alert<C extends ElementType = 'div'>({
  component,
  className,
  instant,
  role,
  ...props
}: AlertProps<C>) {
  return (
    <ClassedBox<C>
      {...props}
      baseClass={clsx('alert', instant && 'alert-instant')}
      component={component}
      defaultComponent={'div' as C}
      className={className}
      role={role ?? 'alert'}
    />
  );
}

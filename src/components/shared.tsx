import type { ElementType } from 'react';

import type { BoxProps } from './box';

/** Server-side validation state applied as `.is-valid` or `.is-invalid`. */
export type ValidationState = 'valid' | 'invalid';

export type ComponentProps<C extends ElementType, ExtraProps extends object = object> = ExtraProps &
  Omit<BoxProps<C>, keyof ExtraProps>;

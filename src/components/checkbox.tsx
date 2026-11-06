import clsx from 'clsx';
import {
  useCallback,
  useImperativeHandle,
  useRef,
  type ComponentRef,
  type ElementType,
} from 'react';

import { type ValidationState } from '../types';
import { Box } from './box';
import type { BoxProps } from './box';

export type CheckboxSize = 'sm' | 'lg';

type CheckboxOwnProps = {
  indeterminate?: boolean | undefined;
  size?: CheckboxSize | undefined;
  validation?: ValidationState | undefined;
};

export type CheckboxProps<C extends ElementType = 'input'> = Omit<
  BoxProps<C>,
  keyof CheckboxOwnProps
> &
  CheckboxOwnProps;

export function Checkbox<C extends ElementType = 'input'>({
  component,
  className,
  indeterminate = false,
  ref: forwardedRef,
  size,
  validation,
  type,
  ...props
}: CheckboxProps<C>) {
  const inputRef = useRef<ComponentRef<C>>(null);
  const setRef = useCallback(
    (node: ComponentRef<C> | null) => {
      inputRef.current = node;

      if (node instanceof HTMLInputElement) {
        node.indeterminate = indeterminate;
      }
    },
    [indeterminate],
  );

  useImperativeHandle(forwardedRef, () => inputRef.current!);

  return (
    <Box<C>
      {...(props as BoxProps<C>)}
      ref={setRef}
      component={component ?? ('input' as C)}
      classNameBefore={clsx(
        'check',
        size && `check-${size}`,
        validation && `is-${validation}`,
        props.classNameBefore,
      )}
      className={className}
      type={type ?? 'checkbox'}
    />
  );
}

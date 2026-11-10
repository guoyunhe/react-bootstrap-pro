import clsx from 'clsx';
import type {
  ChangeEventHandler,
  CSSProperties,
  ElementType,
  FocusEventHandler,
  FormEventHandler,
  Ref,
} from 'react';

import type { ValidationState } from '../types';
import { Box } from './box';
import type { BoxProps } from './box';

export type SwitchSize = 'sm' | 'lg';

type SwitchOwnProps = {
  'aria-describedby'?: string | undefined;
  'aria-label'?: string | undefined;
  'aria-labelledby'?: string | undefined;
  autoComplete?: string | undefined;
  checked?: boolean | undefined;
  defaultChecked?: boolean | undefined;
  disabled?: boolean | undefined;
  form?: string | undefined;
  id?: string | undefined;
  indicatorWidth?: CSSProperties['width'] | undefined;
  inputRef?: Ref<HTMLInputElement> | undefined;
  name?: string | undefined;
  onBlur?: FocusEventHandler<HTMLInputElement> | undefined;
  onChange?: ChangeEventHandler<HTMLInputElement> | undefined;
  onFocus?: FocusEventHandler<HTMLInputElement> | undefined;
  onInput?: FormEventHandler<HTMLInputElement> | undefined;
  readOnly?: boolean | undefined;
  required?: boolean | undefined;
  size?: SwitchSize | undefined;
  validation?: ValidationState | undefined;
  value?: string | number | readonly string[] | undefined;
  width?: CSSProperties['width'] | undefined;
};

export type SwitchProps = Omit<
  BoxProps<'div'>,
  keyof SwitchOwnProps | 'children' | 'component' | 'role' | 'type'
> & {
  component?: ElementType | undefined;
} & SwitchOwnProps;

export function Switch({
  component,
  className,
  style,
  size,
  validation,
  width,
  indicatorWidth,
  id,
  name,
  value,
  checked,
  defaultChecked,
  disabled,
  required,
  readOnly,
  autoComplete,
  form,
  inputRef,
  onChange,
  onInput,
  onBlur,
  onFocus,
  'aria-label': ariaLabel,
  'aria-describedby': ariaDescribedBy,
  'aria-labelledby': ariaLabelledBy,
  ...props
}: SwitchProps) {
  const trackStyle: CSSProperties | undefined =
    width === undefined && indicatorWidth === undefined
      ? style
      : {
          ...style,
          ...(width === undefined
            ? {}
            : { '--bs-switch-width': typeof width === 'number' ? `${width}px` : width }),
          ...(indicatorWidth === undefined
            ? {}
            : {
                '--bs-switch-indicator-width':
                  typeof indicatorWidth === 'number' ? `${indicatorWidth}px` : indicatorWidth,
              }),
        };

  return (
    <Box<'div'>
      {...(props as BoxProps<'div'>)}
      component={(component ?? 'div') as 'div'}
      classNameBefore={clsx('switch', size && `switch-${size}`, props.classNameBefore)}
      className={className}
      style={trackStyle}
    >
      <input
        ref={inputRef}
        type='checkbox'
        role='switch'
        {...{ switch: '' }}
        className={clsx(validation && `is-${validation}`)}
        id={id}
        name={name}
        value={value}
        checked={checked}
        defaultChecked={defaultChecked}
        disabled={disabled}
        required={required}
        readOnly={readOnly}
        autoComplete={autoComplete}
        form={form}
        onChange={onChange}
        onInput={onInput}
        onBlur={onBlur}
        onFocus={onFocus}
        aria-label={ariaLabel}
        aria-describedby={ariaDescribedBy}
        aria-labelledby={ariaLabelledBy}
      />
    </Box>
  );
}

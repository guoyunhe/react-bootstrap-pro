import type { FormEvent, FormEventHandler } from 'react';

import { Box, type BoxProps } from './box';

export type FormValidation = boolean | 'valid';

type FormOwnProps = {
  /**
   * Opts in to Bootstrap's `:user-invalid` styling through `data-bs-validate`. Pass `'valid'` to
   * also style valid fields.
   */
  validation?: FormValidation | undefined;
  onSubmit?: FormEventHandler<HTMLFormElement> | undefined;
  onInput?: FormEventHandler<HTMLFormElement> | undefined;
};

export type FormProps = FormOwnProps & Omit<BoxProps<'form'>, keyof FormOwnProps>;

function syncAriaInvalid(form: HTMLFormElement) {
  for (const control of form.elements) {
    if (control instanceof HTMLElement && 'willValidate' in control && control.willValidate) {
      const field = control as HTMLInputElement;
      field.setAttribute('aria-invalid', String(!field.validity.valid));
    }
  }
}

export function Form({ validation, noValidate, onSubmit, onInput, ...props }: FormProps) {
  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    if (validation !== undefined) {
      const form = event.currentTarget;
      syncAriaInvalid(form);

      if (!form.checkValidity()) {
        event.preventDefault();
        event.stopPropagation();
      }
    }

    onSubmit?.(event);
  };

  // Keep `aria-invalid` in sync as users correct individual fields.
  const handleInput = (event: FormEvent<HTMLFormElement>) => {
    const control = event.target;

    if (
      control instanceof HTMLElement &&
      'willValidate' in control &&
      control.hasAttribute('aria-invalid')
    ) {
      const field = control as HTMLInputElement;
      field.setAttribute('aria-invalid', String(!field.validity.valid));
    }

    onInput?.(event);
  };

  let validateAttribute: string | undefined;

  if (validation === true) {
    validateAttribute = '';
  } else if (validation === 'valid') {
    validateAttribute = 'valid';
  }

  return (
    <Box
      {...props}
      component='form'
      data-bs-validate={validateAttribute}
      noValidate={noValidate ?? validation !== undefined}
      onSubmit={handleSubmit}
      onInput={handleInput}
    />
  );
}

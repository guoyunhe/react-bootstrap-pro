import { expect, test } from 'vitest';
import { render } from 'vitest-browser-react';

import { FormControl, FormField, FormLabel, FormText } from '../src';

test('composes form fields, labels and help text', async () => {
  const screen = await render(
    <FormField data-testid='field'>
      <FormLabel htmlFor='form-email' data-testid='label'>
        Email address
      </FormLabel>
      <FormControl
        id='form-email'
        type='email'
        aria-describedby='form-email-help'
        data-testid='control'
      />
      <FormText id='form-email-help' data-testid='text'>
        We’ll never share your email with anyone else.
      </FormText>
    </FormField>,
  );

  expect(screen.getByTestId('field')).toHaveClass('form-field');
  expect(screen.getByTestId('label')).toHaveClass('form-label');
  expect(screen.getByTestId('label').element()).toHaveAttribute('for', 'form-email');
  expect(screen.getByTestId('control')).toHaveClass('form-control');
  expect(screen.getByTestId('text')).toHaveClass('form-text');
});

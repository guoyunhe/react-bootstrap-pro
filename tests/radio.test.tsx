import { expect, test } from 'vitest';
import { render } from 'vitest-browser-react';

import { FormField, FormFieldContent, FormLabel, FormText, Radio } from '../src';

test('renders radios with sizes, themes and field content', async () => {
  const screen = await render(
    <FormField data-testid='field'>
      <Radio
        id='radio-group-1'
        name='radio-group'
        size='lg'
        theme='primary'
        defaultChecked
        data-testid='radio'
      />
      <FormFieldContent data-testid='content'>
        <FormLabel htmlFor='radio-group-1'>Example radio</FormLabel>
        <FormText component='small' id='radio-group-1-help'>
          Supporting description
        </FormText>
      </FormFieldContent>
    </FormField>,
  );

  expect(screen.getByTestId('field')).toHaveClass('form-field');
  expect(screen.getByTestId('radio')).toHaveClass('radio', 'radio-lg', 'theme-primary');
  expect(screen.getByTestId('radio').element()).toHaveAttribute('type', 'radio');
  expect(screen.getByTestId('radio').element()).toHaveAttribute('name', 'radio-group');
  expect(screen.getByTestId('content')).toHaveClass('form-field-content');
  expect(screen.getByTestId('content').element().querySelector('small')).toHaveClass('form-text');
});

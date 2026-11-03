import { expect, test } from 'vitest';
import { render } from 'vitest-browser-react';

import { FormLabel } from '../src';

test('renders a form label', async () => {
  const screen = await render(<FormLabel htmlFor='field'>Email</FormLabel>);
  const label = screen.container.querySelector('label');

  expect(label).toHaveClass('form-label');
  expect(label).not.toHaveClass('col-form-label');
  expect(label?.getAttribute('for')).toBe('field');
});

test('renders a column label for horizontal forms', async () => {
  const screen = await render(<FormLabel col>Email</FormLabel>);

  expect(screen.container.querySelector('label')).toHaveClass('form-label', 'col-form-label');
});

test('matches the size of the control', async () => {
  const screen = await render(<FormLabel col='sm'>Email</FormLabel>);
  expect(screen.container.querySelector('label')).toHaveClass(
    'col-form-label',
    'col-form-label-sm',
  );

  await screen.rerender(<FormLabel col='lg'>Email</FormLabel>);
  expect(screen.container.querySelector('label')).toHaveClass(
    'col-form-label',
    'col-form-label-lg',
  );
});

test('renders a legend when requested', async () => {
  const screen = await render(
    <FormLabel component='legend' col>
      Radios
    </FormLabel>,
  );

  expect(screen.container.querySelector('legend')).toHaveClass('form-label', 'col-form-label');
});

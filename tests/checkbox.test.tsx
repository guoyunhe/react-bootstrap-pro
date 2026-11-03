import { createRef } from 'react';
import { expect, test } from 'vitest';
import { render } from 'vitest-browser-react';

import { Checkbox } from '../src';

test('renders checkbox size modifiers', async () => {
  const screen = await render(<Checkbox id='form-remember' size='sm' data-testid='check' />);

  expect(screen.getByTestId('check')).toHaveClass('check', 'check-sm');
  expect(screen.getByTestId('check').element()).toHaveAttribute('type', 'checkbox');
});

test('forwards refs to the underlying control', async () => {
  const ref = createRef<HTMLInputElement>();
  const screen = await render(<Checkbox ref={ref} data-testid='checkbox' defaultChecked />);

  await expect
    .poll(() => ref.current)
    .toBe(screen.getByTestId('checkbox').element() as HTMLInputElement);
  expect(ref.current?.type).toBe('checkbox');
  expect(ref.current?.checked).toBe(true);

  if (ref.current) {
    ref.current.indeterminate = true;
  }
  expect(ref.current?.indeterminate).toBe(true);
});

test('applies a validation state', async () => {
  const screen = await render(<Checkbox aria-label='Agree' validation='invalid' />);

  expect(screen.container.querySelector('input')).toHaveClass('check', 'is-invalid');
});

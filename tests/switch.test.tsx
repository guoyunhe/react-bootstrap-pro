import { expect, test } from 'vitest';
import { render } from 'vitest-browser-react';

import { FormField, Switch, SwitchInput } from '../src';

test('renders switches with a hidden checkbox control', async () => {
  const screen = await render(
    <FormField>
      <Switch theme='primary' size='lg' data-testid='switch'>
        <SwitchInput id='switch-test' defaultChecked data-testid='switch-input' />
      </Switch>
      <label htmlFor='switch-test'>Notifications</label>
    </FormField>,
  );

  const input = screen.getByTestId('switch-input').element() as HTMLInputElement;
  expect(screen.getByTestId('switch')).toHaveClass('switch', 'switch-lg', 'theme-primary');
  expect(input.type).toBe('checkbox');
  expect(input.checked).toBe(true);
  expect(input.getAttribute('role')).toBe('switch');
  expect(input.hasAttribute('switch')).toBe(true);
  expect(screen.container.querySelector('label')?.control).toBe(input);
});

test('applies a validation state to the input', async () => {
  const screen = await render(
    <Switch>
      <SwitchInput aria-label='Subscribe' validation='invalid' />
    </Switch>,
  );

  expect(screen.container.querySelector('input')).toHaveClass('is-invalid');
});

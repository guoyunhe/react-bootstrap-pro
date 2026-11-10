import { createRef } from 'react';
import { expect, test } from 'vitest';
import { render } from 'vitest-browser-react';

import { FormField, Switch } from '../src';

test('renders a switch with a hidden checkbox control', async () => {
  const screen = await render(
    <FormField>
      <Switch
        id='switch-test'
        theme='primary'
        size='lg'
        defaultChecked
        aria-describedby='switch-help'
        data-testid='switch'
      />
      <label htmlFor='switch-test'>Notifications</label>
    </FormField>,
  );

  const wrapper = screen.getByTestId('switch').element();
  const input = wrapper.querySelector('input') as HTMLInputElement;

  expect(wrapper).toHaveClass('switch', 'switch-lg', 'theme-primary');
  expect(input.type).toBe('checkbox');
  expect(input.checked).toBe(true);
  expect(input.getAttribute('role')).toBe('switch');
  expect(input.hasAttribute('switch')).toBe(true);
  expect(input.getAttribute('aria-describedby')).toBe('switch-help');
  expect(screen.container.querySelector('label')?.control).toBe(input);
});

test('applies a validation state to the input', async () => {
  const screen = await render(<Switch aria-label='Subscribe' validation='invalid' />);

  expect(screen.container.querySelector('input')).toHaveClass('is-invalid');
});

test('maps width props to track custom properties', async () => {
  const screen = await render(
    <Switch
      aria-label='Notifications'
      width='2.75rem'
      indicatorWidth={24}
      style={{ marginTop: 4 }}
    />,
  );

  const track = screen.container.querySelector('.switch') as HTMLElement;

  expect(track.style.getPropertyValue('--bs-switch-width')).toBe('2.75rem');
  expect(track.style.getPropertyValue('--bs-switch-indicator-width')).toBe('24px');
  expect(track.style.marginTop).toBe('4px');
});

test('forwards native input props and the input ref', async () => {
  const inputRef = createRef<HTMLInputElement>();
  const changes: boolean[] = [];
  const screen = await render(
    <Switch
      aria-label='Notifications'
      name='notifications'
      value='on'
      inputRef={inputRef}
      onChange={(event) => changes.push(event.currentTarget.checked)}
    />,
  );

  const input = screen.getByRole('switch', { name: 'Notifications' });

  expect(input.element()).toHaveAttribute('name', 'notifications');
  expect(input.element()).toHaveAttribute('value', 'on');

  await input.click();

  expect(changes).toEqual([true]);
  expect(inputRef.current).toBe(input.element());
});

import { expect, test, vi } from 'vitest';
import { render } from 'vitest-browser-react';

import { Form, FormFeedback, FormLabel, Input } from '../src';

function setNativeValue(input: HTMLInputElement, value: string) {
  Object.getOwnPropertyDescriptor(HTMLInputElement.prototype, 'value')?.set?.call(input, value);
  input.dispatchEvent(new Event('input', { bubbles: true }));
}

function ValidationForm({ onSubmit }: { onSubmit: (event: SubmitEvent) => void }) {
  return (
    <Form validation onSubmit={onSubmit}>
      <FormLabel htmlFor='validation-name'>Name</FormLabel>
      <Input id='validation-name' required aria-describedby='validation-name-feedback' />
      <FormFeedback id='validation-name-feedback'>Full name is required</FormFeedback>
      <button type='submit'>Submit</button>
    </Form>
  );
}

test('opts in to client-side validation', async () => {
  const screen = await render(
    <Form validation data-testid='form'>
      <Input aria-label='Name' required />
    </Form>,
  );
  const form = screen.getByTestId('form').element() as HTMLFormElement;

  expect(form.hasAttribute('data-bs-validate')).toBe(true);
  expect(form.getAttribute('data-bs-validate')).toBe('');
  expect(form.noValidate).toBe(true);
});

test('can also style valid fields', async () => {
  const screen = await render(<Form validation='valid' data-testid='form' />);
  const form = screen.getByTestId('form').element();

  expect(form.getAttribute('data-bs-validate')).toBe('valid');
});

test('leaves native validation alone by default', async () => {
  const screen = await render(<Form data-testid='form' />);
  const form = screen.getByTestId('form').element() as HTMLFormElement;

  expect(form.hasAttribute('data-bs-validate')).toBe(false);
  expect(form.noValidate).toBe(false);
});

test('blocks an invalid submit and marks the fields', async () => {
  const prevented: boolean[] = [];
  const onSubmit = vi.fn((event: SubmitEvent) => {
    prevented.push(event.defaultPrevented);
    event.preventDefault();
  });
  const screen = await render(<ValidationForm onSubmit={onSubmit} />);
  const form = screen.container.querySelector('form') as HTMLFormElement;
  const input = screen.container.querySelector('input') as HTMLInputElement;

  form.requestSubmit();

  await expect.poll(() => onSubmit.mock.calls.length).toBe(1);
  expect(input.getAttribute('aria-invalid')).toBe('true');
  expect(prevented[0]).toBe(true);
});

test('allows a valid submit and clears the invalid state', async () => {
  const prevented: boolean[] = [];
  const onSubmit = vi.fn((event: SubmitEvent) => {
    prevented.push(event.defaultPrevented);
    event.preventDefault();
  });
  const screen = await render(<ValidationForm onSubmit={onSubmit} />);
  const form = screen.container.querySelector('form') as HTMLFormElement;
  const input = screen.container.querySelector('input') as HTMLInputElement;

  form.requestSubmit();
  await expect.poll(() => input.getAttribute('aria-invalid')).toBe('true');

  setNativeValue(input, 'Mark Otto');
  await expect.poll(() => input.getAttribute('aria-invalid')).toBe('false');

  form.requestSubmit();
  await expect.poll(() => onSubmit.mock.calls.length).toBe(2);
  expect(prevented[1]).toBe(false);
});

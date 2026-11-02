import { expect, test } from 'vitest';
import { render } from 'vitest-browser-react';

import { Button } from '../src';

test('renders a primary Bootstrap button by default', async () => {
  const screen = await render(<Button>Save</Button>);
  const button = screen.getByRole('button', { name: 'Save' });

  expect(button).toHaveClass('btn', 'btn-primary');
  expect(button).toHaveAttribute('type', 'button');
});

test('supports variants, sizes, native props, and custom classes', async () => {
  const screen = await render(
    <Button variant='outline-secondary' size='lg' className='custom-button' disabled type='submit'>
      Cancel
    </Button>,
  );
  const button = screen.getByRole('button', { name: 'Cancel' });

  expect(button).toHaveClass('btn', 'btn-outline-secondary', 'btn-lg', 'custom-button');
  expect(button).toBeDisabled();
  expect(button).toHaveAttribute('type', 'submit');
});

test('forwards click handlers', async () => {
  let clickCount = 0;
  const screen = await render(<Button onClick={() => clickCount++}>Click me</Button>);

  await screen.getByRole('button', { name: 'Click me' }).click();

  expect(clickCount).toBe(1);
});

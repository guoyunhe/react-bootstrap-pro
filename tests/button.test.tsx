import { expect, test } from 'vitest';
import { render } from 'vitest-browser-react';

import { Button } from '../src';

test('renders only the Bootstrap base class by default', async () => {
  const screen = await render(<Button>Save</Button>);
  const button = screen.getByRole('button', { name: 'Save' });

  expect(button).toHaveAttribute('class', 'btn');
  expect(button).toHaveAttribute('type', 'button');
});

test('does not infer a variant or theme when only one is provided', async () => {
  const screen = await render(
    <>
      <Button variant='outline'>Outline</Button>
      <Button theme='secondary'>Secondary</Button>
    </>,
  );

  expect(screen.getByRole('button', { name: 'Outline' })).toHaveClass('btn', 'btn-outline');
  expect(screen.getByRole('button', { name: 'Outline' })).not.toHaveClass('theme-primary');
  expect(screen.getByRole('button', { name: 'Secondary' })).toHaveClass('btn', 'theme-secondary');
  expect(screen.getByRole('button', { name: 'Secondary' })).not.toHaveClass('btn-solid');
});

test('supports variants, sizes, native props, and custom classes', async () => {
  const screen = await render(
    <Button
      variant='outline'
      theme='secondary'
      size='lg'
      className='custom-button'
      disabled
      type='submit'
    >
      Cancel
    </Button>,
  );
  const button = screen.getByRole('button', { name: 'Cancel' });

  expect(button).toHaveClass('btn', 'btn-outline', 'theme-secondary', 'btn-lg', 'custom-button');
  expect(button).toBeDisabled();
  expect(button).toHaveAttribute('type', 'submit');
});

test('supports Bootstrap 6 variants and themes', async () => {
  const screen = await render(
    <>
      <Button variant='subtle' theme='accent'>
        Subtle
      </Button>
      <Button variant='text' theme='info'>
        Text
      </Button>
      <Button variant='link' theme='primary'>
        Link
      </Button>
      <Button variant='link'>Default link</Button>
    </>,
  );

  expect(screen.getByRole('button', { name: 'Subtle' })).toHaveClass('btn-subtle', 'theme-accent');
  expect(screen.getByRole('button', { name: 'Text' })).toHaveClass('btn-text', 'theme-info');
  expect(screen.getByRole('button', { name: 'Link' })).toHaveClass('btn-link', 'theme-primary');
  expect(screen.getByRole('button', { name: 'Default link' })).toHaveClass('btn-link');
  expect(screen.getByRole('button', { name: 'Default link' })).not.toHaveClass('theme-primary');
});

test('forwards click handlers', async () => {
  let clickCount = 0;
  const screen = await render(<Button onClick={() => clickCount++}>Click me</Button>);

  await screen.getByRole('button', { name: 'Click me' }).click();

  expect(clickCount).toBe(1);
});

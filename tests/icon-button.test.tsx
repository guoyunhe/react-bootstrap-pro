import { expect, test } from 'vitest';
import { render } from 'vitest-browser-react';

import { IconButton } from '../src';

test('renders a button with the icon class and accessible name', async () => {
  const screen = await render(
    <IconButton aria-label='Add item' variant='solid' theme='primary'>
      +
    </IconButton>,
  );
  const button = screen.getByRole('button', { name: 'Add item' });

  expect(button).toHaveClass('btn', 'btn-icon', 'btn-solid', 'theme-primary');
  expect(button).toHaveAttribute('type', 'button');
});

test('supports sizes, custom classes, and polymorphic button props', async () => {
  const screen = await render(
    <IconButton
      component='a'
      href='/settings'
      aria-label='Settings'
      size='sm'
      className='custom-icon-button'
    >
      S
    </IconButton>,
  );
  const link = screen.getByRole('link', { name: 'Settings' });

  expect(link).toHaveClass('btn', 'btn-icon', 'btn-sm', 'custom-icon-button');
  expect(link).toHaveAttribute('href', '/settings');
  expect(link).not.toHaveAttribute('type');
});

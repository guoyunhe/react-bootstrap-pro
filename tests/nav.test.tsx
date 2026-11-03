import { expect, test } from 'vitest';
import { render } from 'vitest-browser-react';

import { Nav, NavLink } from '../src';

test('renders nav variants and marks the active link', async () => {
  const screen = await render(
    <Nav variant='pills' data-testid='nav'>
      <NavLink active href='/current'>
        Current
      </NavLink>
    </Nav>,
  );

  expect(screen.getByTestId('nav')).toHaveClass('nav', 'nav-pills');
  expect(screen.getByRole('link', { name: 'Current' })).toHaveAttribute('aria-current', 'page');
});

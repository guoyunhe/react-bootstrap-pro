import { expect, test } from 'vitest';
import { render } from 'vitest-browser-react';

import { IconLink } from '../src';

test('renders an anchor with the icon link helper', async () => {
  const screen = await render(
    <IconLink href='/docs' data-testid='icon-link'>
      <span aria-hidden='true'>icon</span>
      Read more
    </IconLink>,
  );

  expect(screen.getByTestId('icon-link').element().tagName).toBe('A');
  expect(screen.getByTestId('icon-link')).toHaveClass('icon-link');
  expect(screen.getByTestId('icon-link')).not.toHaveClass('icon-link-hover');
  expect(screen.getByTestId('icon-link').element()).toHaveAttribute('href', '/docs');
});

test('adds the icon hover helper when requested', async () => {
  const screen = await render(
    <IconLink href='/docs' hover data-testid='icon-link'>
      Read more
    </IconLink>,
  );

  expect(screen.getByTestId('icon-link')).toHaveClass('icon-link', 'icon-link-hover');
});

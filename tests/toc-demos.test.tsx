import 'bootstrap/dist/css/bootstrap.css';
import { expect, test } from 'vitest';
import { render } from 'vitest-browser-react';

import { TocActiveDemo } from '../docs/components/toc/demos/active';
import { TocBasicDemo } from '../docs/components/toc/demos/basic';
import { TocDrawerDemo } from '../docs/components/toc/demos/drawer';

test('renders the basic outline with nested links', async () => {
  const screen = await render(<TocBasicDemo />);
  const nav = screen.getByRole('navigation', { name: 'Table of contents' });

  await expect.element(nav.getByRole('link', { name: 'Using npm' })).toHaveClass('active');
  expect(nav.element().querySelectorAll('a.nav-link')).toHaveLength(8);
});

test('collects the headings from the sample content', async () => {
  const screen = await render(<TocActiveDemo />);
  const nav = screen.getByRole('navigation', { name: 'Table of contents' });

  await expect.element(nav.getByRole('link', { name: 'Overview' })).toBeVisible();
  await expect.element(nav.getByRole('link', { name: 'Usage' })).toBeVisible();
  await expect.element(nav.getByRole('link', { name: 'Options' })).toBeVisible();
});

test('opens the outline in a drawer and closes it after navigation', async () => {
  const screen = await render(<TocDrawerDemo />);
  await screen.getByRole('button', { name: 'On this page…' }).click();

  const dialog = screen.getByRole('dialog', { name: 'On this page' });
  await expect.element(dialog.getByRole('link', { name: 'CDN' })).toHaveClass('active');

  await dialog.getByRole('link', { name: 'Install' }).click();
  await expect.poll(() => dialog.element().hasAttribute('open')).toBe(false);
});

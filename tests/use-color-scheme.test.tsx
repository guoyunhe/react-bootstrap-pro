import { afterEach, expect, test } from 'vitest';
import { render } from 'vitest-browser-react';

import { useColorScheme } from '../src';

function ColorSchemeProbe() {
  const colorScheme = useColorScheme();

  return <span data-testid='scheme'>{colorScheme}</span>;
}

const browserColorScheme = window.matchMedia('(prefers-color-scheme: dark)').matches
  ? 'dark'
  : 'light';

afterEach(() => {
  delete document.documentElement.dataset.bsTheme;
});

test('falls back to the browser color scheme', async () => {
  const screen = await render(<ColorSchemeProbe />);

  await expect.element(screen.getByTestId('scheme')).toHaveTextContent(browserColorScheme);
});

test('follows the data-bs-theme attribute on the document element', async () => {
  document.documentElement.dataset.bsTheme = browserColorScheme === 'dark' ? 'light' : 'dark';
  const screen = await render(<ColorSchemeProbe />);
  const explicitColorScheme = browserColorScheme === 'dark' ? 'light' : 'dark';

  await expect.element(screen.getByTestId('scheme')).toHaveTextContent(explicitColorScheme);

  document.documentElement.dataset.bsTheme = browserColorScheme;

  await expect.element(screen.getByTestId('scheme')).toHaveTextContent(browserColorScheme);
});

test('treats auto as the browser color scheme', async () => {
  document.documentElement.dataset.bsTheme = 'auto';
  const screen = await render(<ColorSchemeProbe />);

  await expect.element(screen.getByTestId('scheme')).toHaveTextContent(browserColorScheme);

  document.documentElement.dataset.bsTheme = browserColorScheme === 'dark' ? 'light' : 'dark';

  await expect
    .element(screen.getByTestId('scheme'))
    .toHaveTextContent(browserColorScheme === 'dark' ? 'light' : 'dark');
});

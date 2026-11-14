import { afterEach, expect, test } from 'vitest';
import { render } from 'vitest-browser-react';

import { ColorSchemeProvider, useColorScheme } from '../src';

function ColorSchemeProbe() {
  const { colorScheme, computedColorScheme, setColorScheme } = useColorScheme();

  return (
    <div>
      <span data-testid='scheme'>{computedColorScheme}</span>
      <span data-testid='selected'>{colorScheme}</span>
      <button onClick={() => setColorScheme('dark')}>dark</button>
      <button onClick={() => setColorScheme('light')}>light</button>
      <button onClick={() => setColorScheme('auto')}>auto</button>
    </div>
  );
}

async function renderProbe() {
  return render(
    <ColorSchemeProvider>
      <ColorSchemeProbe />
    </ColorSchemeProvider>,
  );
}

const browserColorScheme = window.matchMedia('(prefers-color-scheme: dark)').matches
  ? 'dark'
  : 'light';
const oppositeColorScheme = browserColorScheme === 'dark' ? 'light' : 'dark';

afterEach(() => {
  delete document.documentElement.dataset['bsTheme'];
  localStorage.clear();
});

test('falls back to the browser color scheme', async () => {
  const screen = await renderProbe();

  await expect.element(screen.getByTestId('scheme')).toHaveTextContent(browserColorScheme);
  await expect.element(screen.getByTestId('selected')).toHaveTextContent('auto');
});

test('follows the data-bs-theme attribute on the document element', async () => {
  document.documentElement.dataset['bsTheme'] = oppositeColorScheme;
  const screen = await renderProbe();

  await expect.element(screen.getByTestId('scheme')).toHaveTextContent(oppositeColorScheme);
  await expect.element(screen.getByTestId('selected')).toHaveTextContent('auto');

  document.documentElement.dataset['bsTheme'] = browserColorScheme;

  await expect.element(screen.getByTestId('scheme')).toHaveTextContent(browserColorScheme);
});

test('treats auto as the browser color scheme', async () => {
  document.documentElement.dataset['bsTheme'] = 'auto';
  const screen = await renderProbe();

  await expect.element(screen.getByTestId('scheme')).toHaveTextContent(browserColorScheme);

  document.documentElement.dataset['bsTheme'] = oppositeColorScheme;

  await expect.element(screen.getByTestId('scheme')).toHaveTextContent(oppositeColorScheme);
});

test('applies and persists a scheme selected with the setter', async () => {
  const screen = await renderProbe();

  await screen.getByRole('button', { name: oppositeColorScheme }).click();

  await expect.element(screen.getByTestId('scheme')).toHaveTextContent(oppositeColorScheme);
  await expect.element(screen.getByTestId('selected')).toHaveTextContent(oppositeColorScheme);
  expect(document.documentElement.dataset['bsTheme']).toBe(oppositeColorScheme);
  expect(localStorage.getItem('colorScheme')).toBe(JSON.stringify(oppositeColorScheme));
});

test('restores the stored scheme on mount', async () => {
  localStorage.setItem('colorScheme', JSON.stringify(oppositeColorScheme));
  const screen = await renderProbe();

  await expect.element(screen.getByTestId('scheme')).toHaveTextContent(oppositeColorScheme);
  await expect.element(screen.getByTestId('selected')).toHaveTextContent(oppositeColorScheme);
  await expect.poll(() => document.documentElement.dataset['bsTheme']).toBe(oppositeColorScheme);
});

test('applies the stored scheme without rendering a consumer', async () => {
  localStorage.setItem('colorScheme', JSON.stringify(oppositeColorScheme));

  await render(
    <ColorSchemeProvider>
      <div />
    </ColorSchemeProvider>,
  );

  await expect.poll(() => document.documentElement.dataset['bsTheme']).toBe(oppositeColorScheme);
});

test('auto removes the explicit scheme and follows the browser', async () => {
  localStorage.setItem('colorScheme', JSON.stringify(oppositeColorScheme));
  const screen = await renderProbe();

  await screen.getByRole('button', { name: 'auto' }).click();

  await expect.element(screen.getByTestId('scheme')).toHaveTextContent(browserColorScheme);
  await expect.element(screen.getByTestId('selected')).toHaveTextContent('auto');
  expect(document.documentElement.dataset['bsTheme']).toBeUndefined();
  expect(localStorage.getItem('colorScheme')).toBe(JSON.stringify('auto'));
});

test('keeps an explicit data-bs-theme that is already present on mount', async () => {
  document.documentElement.dataset['bsTheme'] = oppositeColorScheme;
  localStorage.setItem('colorScheme', JSON.stringify(browserColorScheme));
  const screen = await renderProbe();

  await expect.element(screen.getByTestId('scheme')).toHaveTextContent(oppositeColorScheme);
  await expect.element(screen.getByTestId('selected')).toHaveTextContent(browserColorScheme);
  expect(document.documentElement.dataset['bsTheme']).toBe(oppositeColorScheme);
});

test('ignores an invalid stored scheme', async () => {
  localStorage.setItem('colorScheme', JSON.stringify('invalid'));
  const screen = await renderProbe();

  await expect.element(screen.getByTestId('scheme')).toHaveTextContent(browserColorScheme);
  await expect.element(screen.getByTestId('selected')).toHaveTextContent('auto');
  expect(document.documentElement.dataset['bsTheme']).toBeUndefined();
});

test('follows scheme changes made in another tab', async () => {
  const screen = await renderProbe();
  const storedValue = JSON.stringify(oppositeColorScheme);

  localStorage.setItem('colorScheme', storedValue);
  window.dispatchEvent(
    new StorageEvent('storage', {
      key: 'colorScheme',
      newValue: storedValue,
      oldValue: null,
      storageArea: localStorage,
      url: window.location.href,
    }),
  );

  await expect.element(screen.getByTestId('scheme')).toHaveTextContent(oppositeColorScheme);
  await expect.element(screen.getByTestId('selected')).toHaveTextContent(oppositeColorScheme);
  await expect.poll(() => document.documentElement.dataset['bsTheme']).toBe(oppositeColorScheme);
});

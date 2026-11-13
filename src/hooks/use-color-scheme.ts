import { useSyncExternalStore } from 'react';

import type { ColorScheme } from '../types';

/** The light or dark color scheme that is currently in effect. */
export type ResolvedColorScheme = Exclude<ColorScheme, 'auto'>;

const darkColorSchemeQuery = '(prefers-color-scheme: dark)';

function getBrowserColorScheme(): ResolvedColorScheme {
  return window.matchMedia(darkColorSchemeQuery).matches ? 'dark' : 'light';
}

function readColorScheme(): ResolvedColorScheme {
  if (typeof document === 'undefined') {
    return 'light';
  }

  const theme = document.documentElement.getAttribute('data-bs-theme');
  return theme === 'light' || theme === 'dark' ? theme : getBrowserColorScheme();
}

function subscribe(onStoreChange: () => void) {
  const observer = new MutationObserver(onStoreChange);
  observer.observe(document.documentElement, {
    attributes: true,
    attributeFilter: ['data-bs-theme'],
  });

  const media = window.matchMedia(darkColorSchemeQuery);
  media.addEventListener('change', onStoreChange);

  return () => {
    observer.disconnect();
    media.removeEventListener('change', onStoreChange);
  };
}

/**
 * Returns the light or dark color scheme that Bootstrap currently resolves for the document,
 * following the `data-bs-theme` attribute on `<html>` and the browser color scheme preference.
 */
export function useColorScheme(): ResolvedColorScheme {
  return useSyncExternalStore(subscribe, readColorScheme, () => 'light');
}

import { useLocalStorage } from '@guoyunhe/react-storage';
import { useCallback, useEffect, useRef, useSyncExternalStore } from 'react';
import type { Dispatch, SetStateAction } from 'react';

import type { ColorScheme } from '../types';

/** The light or dark color scheme that is currently in effect. */
export type ResolvedColorScheme = Exclude<ColorScheme, 'auto'>;

/** Selects the color scheme and persists it for future visits. */
export type SetColorScheme = (scheme: ColorScheme) => void;

/** The `localStorage` key used to persist the selected color scheme. */
export const colorSchemeStorageKey = 'colorScheme';
const darkColorSchemeQuery = '(prefers-color-scheme: dark)';

function canUseStorage() {
  try {
    return typeof localStorage !== 'undefined' && localStorage !== null;
  } catch {
    // Accessing localStorage can throw when storage is blocked by the browser.
    return false;
  }
}

function useNoopStorage<T>(_key: string, defaultValue: T): [T, Dispatch<SetStateAction<T>>] {
  return [defaultValue, () => {}];
}

// `useLocalStorage` reads `window.localStorage` while rendering, so it cannot run on the server.
const useStoredColorScheme: typeof useLocalStorage = canUseStorage()
  ? useLocalStorage
  : useNoopStorage;

function getBrowserColorScheme(): ResolvedColorScheme {
  return window.matchMedia(darkColorSchemeQuery).matches ? 'dark' : 'light';
}

function isColorScheme(value: unknown): value is ColorScheme {
  return value === 'light' || value === 'dark' || value === 'auto';
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

function applyColorScheme(scheme: ColorScheme) {
  const root = document.documentElement;
  if (scheme === 'auto') {
    root.removeAttribute('data-bs-theme');
  } else {
    root.setAttribute('data-bs-theme', scheme);
  }
}

/**
 * Returns the light or dark color scheme that Bootstrap currently resolves for the document and a
 * setter that applies a color scheme to the document and persists it in `localStorage`.
 *
 * The hook follows the `data-bs-theme` attribute on `<html>` and the browser color scheme
 * preference. A stored `'light'` or `'dark'` selection is restored on mount unless the page has
 * already set `data-bs-theme`.
 */
export function useColorScheme(): [ResolvedColorScheme, SetColorScheme] {
  const [storedScheme, setStoredScheme] = useStoredColorScheme<ColorScheme>(
    colorSchemeStorageKey,
    'auto',
  );
  const selectedColorScheme = isColorScheme(storedScheme) ? storedScheme : 'auto';
  const colorScheme = useSyncExternalStore(
    subscribe,
    readColorScheme,
    (): ResolvedColorScheme => 'light',
  );
  const appliedScheme = useRef<ColorScheme | null>(null);

  useEffect(() => {
    const previousScheme = appliedScheme.current;
    appliedScheme.current = selectedColorScheme;

    if (previousScheme === selectedColorScheme) {
      return;
    }

    // A `data-bs-theme` already set by the page, such as an inline script, wins on mount.
    if (previousScheme === null && document.documentElement.hasAttribute('data-bs-theme')) {
      return;
    }

    applyColorScheme(selectedColorScheme);
  }, [selectedColorScheme]);

  const setColorScheme = useCallback<SetColorScheme>(
    (scheme) => {
      setStoredScheme(scheme);
      applyColorScheme(scheme);
    },
    [setStoredScheme],
  );

  return [colorScheme, setColorScheme];
}

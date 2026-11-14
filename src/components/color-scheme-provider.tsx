import { useLocalStorage } from '@guoyunhe/react-storage';
import { useCallback, useEffect, useMemo, useRef, useSyncExternalStore } from 'react';
import type { Dispatch, ReactNode, SetStateAction } from 'react';

import { ColorSchemeContext, colorSchemeStorageKey } from '../contexts/color-scheme';
import type { ResolvedColorScheme, SetColorScheme } from '../contexts/color-scheme';
import type { ColorScheme } from '../types';

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

export type ColorSchemeProviderProps = {
  children?: ReactNode;
};

/**
 * Applies the stored color scheme to the document and provides it to `useColorScheme`.
 *
 * Render the provider near the root of the application so the stored scheme takes effect even when
 * no component calls `useColorScheme`.
 */
export function ColorSchemeProvider({ children }: ColorSchemeProviderProps) {
  const [storedScheme, setStoredScheme] = useStoredColorScheme<ColorScheme>(
    colorSchemeStorageKey,
    'auto',
  );
  const colorScheme = isColorScheme(storedScheme) ? storedScheme : 'auto';
  const computedColorScheme = useSyncExternalStore(
    subscribe,
    readColorScheme,
    (): ResolvedColorScheme => 'light',
  );
  const appliedScheme = useRef<ColorScheme | null>(null);

  useEffect(() => {
    const previousScheme = appliedScheme.current;
    appliedScheme.current = colorScheme;

    if (previousScheme === colorScheme) {
      return;
    }

    // A `data-bs-theme` already set by the page, such as an inline script, wins on mount.
    if (previousScheme === null && document.documentElement.hasAttribute('data-bs-theme')) {
      return;
    }

    applyColorScheme(colorScheme);
  }, [colorScheme]);

  const setColorScheme = useCallback<SetColorScheme>(
    (scheme) => {
      setStoredScheme(scheme);
      applyColorScheme(scheme);
    },
    [setStoredScheme],
  );

  const value = useMemo(
    () => ({ colorScheme, computedColorScheme, setColorScheme }),
    [colorScheme, computedColorScheme, setColorScheme],
  );

  return <ColorSchemeContext.Provider value={value}>{children}</ColorSchemeContext.Provider>;
}

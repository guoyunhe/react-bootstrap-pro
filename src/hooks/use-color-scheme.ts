import { useContext } from 'react';

import { ColorSchemeContext } from '../contexts/color-scheme';
import type { ColorSchemeState } from '../contexts/color-scheme';

export type {
  ColorSchemeState,
  ResolvedColorScheme,
  SetColorScheme,
} from '../contexts/color-scheme';
export { colorSchemeStorageKey } from '../contexts/color-scheme';

/**
 * Returns the selected color scheme, the scheme Bootstrap resolves for the document, and a setter
 * that applies a color scheme and persists it in `localStorage`.
 *
 * Must be used inside a `ColorSchemeProvider`.
 */
export function useColorScheme(): ColorSchemeState {
  const context = useContext(ColorSchemeContext);

  if (!context) {
    throw new Error('useColorScheme must be used inside a ColorSchemeProvider.');
  }

  return context;
}

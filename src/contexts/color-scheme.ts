import { createContext } from 'react';

import type { ColorScheme } from '../types';

/** The light or dark color scheme that is currently in effect. */
export type ResolvedColorScheme = Exclude<ColorScheme, 'auto'>;

/** Selects the color scheme and persists it for future visits. */
export type SetColorScheme = (scheme: ColorScheme) => void;

/** The `localStorage` key used to persist the selected color scheme. */
export const colorSchemeStorageKey = 'colorScheme';

/** The selected color scheme and the scheme Bootstrap resolves for the document. */
export type ColorSchemeState = {
  /** The selected `'light'`, `'dark'`, or `'auto'` mode. */
  colorScheme: ColorScheme;
  /** The `'light'` or `'dark'` scheme Bootstrap resolves for the document. */
  computedColorScheme: ResolvedColorScheme;
  /** Applies a color scheme to the document and persists it. */
  setColorScheme: SetColorScheme;
};

/** Shares the color scheme state provided by `ColorSchemeProvider`. */
export const ColorSchemeContext = createContext<ColorSchemeState | undefined>(undefined);

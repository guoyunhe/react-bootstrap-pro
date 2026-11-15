import { useContext } from 'react';

import { BreadcrumbContext } from '../contexts/breadcrumb';
import type { BreadcrumbEntry } from '../contexts/breadcrumb';

export type { BreadcrumbEntry } from '../contexts/breadcrumb';

/**
 * Returns the breadcrumb entries of the enclosing `BreadcrumbProvider` and its ancestors, ordered
 * from the outermost provider.
 *
 * Returns an empty array when no `BreadcrumbProvider` is rendered above the calling component.
 */
export function useBreadcrumb(): readonly BreadcrumbEntry[] {
  return useContext(BreadcrumbContext);
}

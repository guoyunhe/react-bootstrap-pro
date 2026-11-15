import { createContext } from 'react';
import type { ReactNode } from 'react';

/** One entry in the breadcrumb trail assembled by nested `BreadcrumbProvider`s. */
export type BreadcrumbEntry = {
  /** Visible label of the entry. */
  label: ReactNode;
  /** Link target of the entry. When omitted, the entry has no link. */
  href?: string | undefined;
};

/** Entries inherited from ancestor `BreadcrumbProvider`s, ordered from the outermost provider. */
export const BreadcrumbContext = createContext<readonly BreadcrumbEntry[]>([]);

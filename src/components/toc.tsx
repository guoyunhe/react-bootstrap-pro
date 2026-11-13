import type { ElementType, ReactNode } from 'react';
import { useEffect, useMemo, useState } from 'react';

import { Box } from './box';
import type { BoxProps } from './box';
import { Nav, NavItem, NavLink } from './nav';

/** One entry in a table of contents tree. */
export interface TocHeading {
  /** The `id` of the heading element that the entry links to. */
  id: string;
  /** The visible link label. `collectTocHeadings` fills this with the heading text. */
  text: ReactNode;
  /** The heading level from 1 to 6. */
  level?: number | undefined;
  /** Nested headings. */
  children?: TocHeading[] | undefined;
}

export interface CollectTocHeadingsOptions {
  /** CSS selector for the heading elements to collect. */
  selector?: string | undefined;
  /** Selector for descendant elements to leave out of the label, such as anchor links. */
  ignoreSelector?: string | undefined;
}

export interface UseActiveHeadingOptions {
  /** Distance in pixels from the top of the viewport at which a heading becomes active. */
  offset?: number | undefined;
}

const defaultHeadingSelector = 'h2[id], h3[id], h4[id]';

const defaultIgnoreSelector = '[data-toc-ignore]';

/**
 * Collects the headings below a container into a tree for `Toc`.
 *
 * Headings without an `id` are skipped because they cannot be linked to. The tree follows the
 * heading levels, so a level 4 heading directly below a level 2 heading nests one level deep.
 */
export function collectTocHeadings(
  container: HTMLElement,
  {
    selector = defaultHeadingSelector,
    ignoreSelector = defaultIgnoreSelector,
  }: CollectTocHeadingsOptions = {},
): TocHeading[] {
  const roots: TocHeading[] = [];
  const stack: TocHeading[] = [];

  for (const element of container.querySelectorAll<HTMLElement>(selector)) {
    const level = Number(element.tagName.slice(1));
    if (!element.id || !Number.isInteger(level)) {
      continue;
    }

    const heading: TocHeading = {
      id: element.id,
      text: getHeadingText(element, ignoreSelector),
      level,
      children: [],
    };

    while (stack.length > 0 && (stack.at(-1)?.level ?? 0) >= level) {
      stack.pop();
    }

    const parent = stack.at(-1);
    if (parent) {
      parent.children?.push(heading);
    } else {
      roots.push(heading);
    }

    stack.push(heading);
  }

  return roots;
}

/**
 * Returns the id of the heading above the reader and keeps it up to date while the page scrolls.
 *
 * The first heading is active until it passes the offset, and the last heading stays active at the
 * bottom of the page. The hook reads the heading elements from the document by id, so they must be
 * rendered when it runs.
 */
export function useActiveHeading(
  headings: TocHeading[],
  { offset = 96 }: UseActiveHeadingOptions = {},
): string | undefined {
  const [activeId, setActiveId] = useState<string>();
  const ids = useMemo(() => getHeadingIds(headings), [headings]);
  // A joined key keeps the effect stable when an equivalent tree is rebuilt on every render.
  const idKey = ids.join('\n');

  useEffect(() => {
    const elements = (idKey ? idKey.split('\n') : [])
      .map((id) => document.getElementById(id))
      .filter((element) => element !== null);
    if (elements.length === 0) {
      // Defer the reset because the effect must not update state synchronously.
      const frame = requestAnimationFrame(() => setActiveId(undefined));
      return () => cancelAnimationFrame(frame);
    }

    function update() {
      let currentId = elements[0]!.id;
      for (const element of elements) {
        if (element.getBoundingClientRect().top > offset) {
          break;
        }
        currentId = element.id;
      }

      const atBottom =
        window.scrollY + window.innerHeight >= document.documentElement.scrollHeight - 2;
      const nextId = atBottom ? elements.at(-1)!.id : currentId;
      setActiveId((previous) => (previous === nextId ? previous : nextId));
    }

    update();
    window.addEventListener('scroll', update, { passive: true });
    window.addEventListener('resize', update);
    return () => {
      window.removeEventListener('scroll', update);
      window.removeEventListener('resize', update);
    };
  }, [idKey, offset]);

  return activeId;
}

function getHeadingText(element: HTMLElement, ignoreSelector: string): string {
  const clone = element.cloneNode(true) as HTMLElement;
  if (ignoreSelector) {
    for (const ignored of clone.querySelectorAll(ignoreSelector)) {
      ignored.remove();
    }
  }
  return (clone.textContent ?? '').replace(/\s+/g, ' ').trim();
}

function getHeadingIds(headings: TocHeading[]): string[] {
  const ids: string[] = [];
  for (const heading of headings) {
    ids.push(heading.id);
    if (heading.children) {
      ids.push(...getHeadingIds(heading.children));
    }
  }
  return ids;
}

type TocOwnProps = {
  /** The heading tree to render. */
  headings: TocHeading[];
  /** The id of the heading to highlight. */
  activeId?: string | undefined;
  /** Accessible name of the navigation landmark. */
  label?: string | undefined;
  /** Called with the selected heading, for example to close a drawer. */
  onNavigate?: ((heading: TocHeading) => void) | undefined;
};

export type TocProps<C extends ElementType = 'nav'> = Omit<
  BoxProps<C>,
  keyof TocOwnProps | 'component'
> &
  TocOwnProps & {
    component?: ElementType | undefined;
  };

/**
 * Renders a table of contents as a navigation landmark with nested nav links.
 *
 * Links are regular hash anchors, so the browser scrolls to the target heading without any
 * JavaScript. Pass `activeId` to mark the current heading.
 */
export function Toc<C extends ElementType = 'nav'>({
  component,
  headings,
  activeId,
  label = 'Table of contents',
  onNavigate,
  ...props
}: TocProps<C>) {
  return (
    <Box<C>
      fontSize='sm'
      {...(props as BoxProps<C>)}
      component={(component ?? 'nav') as C}
      aria-label={label}
    >
      <TocList headings={headings} activeId={activeId} onNavigate={onNavigate} />
    </Box>
  );
}

interface TocListProps {
  headings: TocHeading[];
  activeId?: string | undefined;
  depth?: number | undefined;
  onNavigate?: ((heading: TocHeading) => void) | undefined;
}

function TocList({ headings, activeId, depth = 0, onNavigate }: TocListProps) {
  return (
    <Nav classNameBefore={depth > 0 ? 'flex-column ps-5' : 'flex-column'}>
      {headings.map((heading) => {
        const active = heading.id === activeId;
        return (
          <NavItem key={heading.id} d='block'>
            <NavLink
              href={`#${heading.id}`}
              active={active}
              aria-current={active ? 'location' : undefined}
              justifyContent='start'
              textWrap='pretty'
              onClick={onNavigate ? () => onNavigate(heading) : undefined}
            >
              {heading.text}
            </NavLink>
            {heading.children?.length ? (
              <TocList
                headings={heading.children}
                activeId={activeId}
                depth={depth + 1}
                onNavigate={onNavigate}
              />
            ) : undefined}
          </NavItem>
        );
      })}
    </Nav>
  );
}

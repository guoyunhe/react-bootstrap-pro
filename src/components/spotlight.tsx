/* oxlint-disable jsx-a11y/prefer-tag-over-role --
 * The search palette follows the WAI-ARIA combobox pattern, which native form
 * controls cannot reproduce with filterable results and rich option content.
 */
import clsx from 'clsx';
import {
  useCallback,
  useEffect,
  useId,
  useMemo,
  useRef,
  useState,
  type KeyboardEvent,
  type ReactNode,
} from 'react';
import { BiSearch } from 'react-bootstrap-icons-pro';

import { Box } from './box';
import type { BoxProps } from './box';
import { CloseButton } from './close-button';
import { Dialog, DialogBody, DialogFooter, DialogHeader } from './dialog';
import { Input } from './input';

export type SpotlightAction = {
  /** Stable identifier. Defaults to the position in `actions`. */
  id?: string | undefined;
  label: string;
  description?: string | undefined;
  /** Extra text that is searchable but not displayed. */
  keywords?: string | readonly string[] | undefined;
  icon?: ReactNode;
  href?: string | undefined;
  target?: string | undefined;
  disabled?: boolean | undefined;
  onClick?: (() => void) | undefined;
};

/** Custom filter, called with the lower-cased, trimmed query. Return `true` to keep the action. */
export type SpotlightFilter = (action: SpotlightAction, query: string) => boolean;

type SpotlightOwnProps = {
  actions: readonly SpotlightAction[];
  show?: boolean | undefined;
  onShowChange?: ((show: boolean) => void) | undefined;
  placeholder?: string | undefined;
  /** Accessible name of the dialog and of the result list. */
  label?: string | undefined;
  emptyMessage?: ReactNode;
  footer?: ReactNode;
  limit?: number | undefined;
  filter?: SpotlightFilter | undefined;
  /** Opens the spotlight with Ctrl+K or ⌘K from anywhere in the document. */
  shortcut?: boolean | undefined;
  closeOnSelect?: boolean | undefined;
  size?: 'sm' | 'lg' | 'xl' | undefined;
  scrollable?: boolean | undefined;
  onSelect?: ((action: SpotlightAction) => void) | undefined;
  onQueryChange?: ((query: string) => void) | undefined;
};

export type SpotlightProps = SpotlightOwnProps &
  Omit<BoxProps<'dialog'>, keyof SpotlightOwnProps | 'children'>;

/** Label of the `shortcut` keys on the current platform. */
export function getSpotlightShortcut(): string {
  const platform = typeof navigator === 'undefined' ? '' : navigator.platform;
  return /Mac|iPhone|iPad|iPod/.test(platform) ? '⌘K' : 'Ctrl+K';
}

function matchesAction(action: SpotlightAction, query: string): boolean {
  const keywords =
    typeof action.keywords === 'string' ? [action.keywords] : (action.keywords ?? []);
  return [action.label, action.description ?? '', ...keywords].some((text) =>
    text.toLowerCase().includes(query),
  );
}

function highlight(text: string, query: string): ReactNode {
  if (!query) return text;
  const lower = text.toLowerCase();
  const parts: ReactNode[] = [];
  let index = 0;
  let found = lower.indexOf(query);
  while (found !== -1) {
    if (found > index) parts.push(text.slice(index, found));
    parts.push(<mark key={found}>{text.slice(found, found + query.length)}</mark>);
    index = found + query.length;
    found = lower.indexOf(query, index);
  }
  if (index === 0) return text;
  parts.push(text.slice(index));
  return parts;
}

export function Spotlight({
  actions,
  show,
  onShowChange,
  placeholder = 'Search…',
  label = 'Search',
  emptyMessage = 'No results found',
  footer,
  limit = 8,
  filter,
  shortcut = false,
  closeOnSelect = true,
  size,
  scrollable = true,
  onSelect,
  onQueryChange,
  className,
  onKeyDown,
  'aria-label': ariaLabel,
  ...props
}: SpotlightProps) {
  const [uncontrolledShow, setUncontrolledShow] = useState(false);
  const open = show ?? uncontrolledShow;
  const [query, setQuery] = useState('');
  const [activeIndex, setActiveIndex] = useState(0);
  const [previousOpen, setPreviousOpen] = useState(open);

  if (open !== previousOpen) {
    setPreviousOpen(open);
    if (open) {
      setQuery('');
      setActiveIndex(0);
    }
  }
  const inputRef = useRef<HTMLInputElement>(null);
  const optionRefs = useRef(new Map<number, HTMLElement>());
  const inputId = useId();
  const listId = useId();

  const setOpen = useCallback(
    (next: boolean) => {
      if (show === undefined) setUncontrolledShow(next);
      onShowChange?.(next);
    },
    [show, onShowChange],
  );

  const normalizedQuery = query.trim().toLowerCase();
  const results = useMemo(
    () =>
      actions
        .filter(
          (action) => normalizedQuery === '' || (filter ?? matchesAction)(action, normalizedQuery),
        )
        .slice(0, Math.max(0, limit)),
    [actions, filter, limit, normalizedQuery],
  );

  const enabledIndexes = useMemo(
    () => results.flatMap((action, index) => (action.disabled ? [] : [index])),
    [results],
  );
  const clampedIndex = Math.min(activeIndex, Math.max(results.length - 1, 0));
  const highlightedIndex = enabledIndexes.includes(clampedIndex)
    ? clampedIndex
    : (enabledIndexes[0] ?? clampedIndex);
  const activeId = results.length > 0 ? `${listId}-option-${highlightedIndex}` : undefined;

  useEffect(() => {
    if (!open) return;
    let frame = 0;
    let attempts = 0;
    // Opening the dialog moves focus to the first field, but the browser can
    // reset focus when the previously focused trigger becomes inert. Retry on
    // the following frames until the field keeps focus.
    const focus = () => {
      const input = inputRef.current;
      if (!input) return;
      input.focus();
      attempts += 1;
      if (document.activeElement !== input && attempts < 5) {
        frame = requestAnimationFrame(focus);
      }
    };
    frame = requestAnimationFrame(focus);
    return () => cancelAnimationFrame(frame);
  }, [open]);

  useEffect(() => {
    if (!open) return;
    optionRefs.current.get(highlightedIndex)?.scrollIntoView({ block: 'nearest' });
  }, [highlightedIndex, open]);

  useEffect(() => {
    if (!shortcut) return;
    const handleShortcut = (event: globalThis.KeyboardEvent) => {
      if (!event.metaKey && !event.ctrlKey) return;
      if (event.altKey || event.shiftKey || event.key.toLowerCase() !== 'k') return;
      event.preventDefault();
      setOpen(!open);
    };
    document.addEventListener('keydown', handleShortcut);
    return () => document.removeEventListener('keydown', handleShortcut);
  }, [shortcut, open, setOpen]);

  const select = (action: SpotlightAction) => {
    if (action.disabled) return;
    onSelect?.(action);
    action.onClick?.();
    if (closeOnSelect) setOpen(false);
  };

  const handleKeyDown = (event: KeyboardEvent<HTMLDialogElement>) => {
    onKeyDown?.(event);
    if (event.defaultPrevented || !results.length) return;
    if (event.key === 'ArrowDown' || event.key === 'ArrowUp') {
      event.preventDefault();
      if (!enabledIndexes.length) return;
      const step = event.key === 'ArrowDown' ? 1 : -1;
      const position = enabledIndexes.indexOf(highlightedIndex);
      setActiveIndex(
        position === -1
          ? (enabledIndexes[step === 1 ? 0 : enabledIndexes.length - 1] ?? 0)
          : (enabledIndexes[Math.min(Math.max(position + step, 0), enabledIndexes.length - 1)] ??
              0),
      );
    } else if (event.key === 'Enter' && event.target === inputRef.current) {
      event.preventDefault();
      select(results[highlightedIndex]!);
    }
  };

  return (
    <Dialog
      {...props}
      show={open}
      onShowChange={setOpen}
      onKeyDown={handleKeyDown}
      scrollable={scrollable}
      size={size}
      aria-label={ariaLabel ?? label}
      className={clsx('spotlight', className)}
    >
      <DialogHeader component='search' gap={2}>
        <Box component='span' d='flex' flexShrink={0} fg='3' aria-hidden='true'>
          <BiSearch size={16} />
        </Box>
        <Input
          ref={inputRef}
          id={inputId}
          type='search'
          role='combobox'
          aria-expanded={results.length > 0}
          aria-controls={listId}
          aria-autocomplete='list'
          aria-activedescendant={activeId}
          aria-label={label}
          placeholder={placeholder}
          autoComplete='off'
          spellCheck={false}
          flexGrow={1}
          style={{ minWidth: 0 }}
          value={query}
          onChange={(event) => {
            setQuery(event.currentTarget.value);
            setActiveIndex(0);
            onQueryChange?.(event.currentTarget.value);
          }}
        />
        <CloseButton flexShrink={0} onClick={() => setOpen(false)} />
      </DialogHeader>
      <DialogBody p={0}>
        {results.length > 0 ? (
          <Box
            role='listbox'
            id={listId}
            aria-label={label}
            className='list-group list-group-flush'
          >
            {results.map((action, index) => {
              const active = index === highlightedIndex;
              const content = (
                <>
                  {action.icon ? (
                    <Box component='span' d='flex' flexShrink={0} aria-hidden='true'>
                      {action.icon}
                    </Box>
                  ) : undefined}
                  <Box
                    component='span'
                    d='flex'
                    flexDirection='column'
                    flexGrow={1}
                    style={{ minWidth: 0 }}
                  >
                    <Box component='span' fontWeight='semibold' textTruncate>
                      {highlight(action.label, normalizedQuery)}
                    </Box>
                    {action.description ? (
                      <Box
                        component='span'
                        fontSize='sm'
                        fg={active ? undefined : '3'}
                        textTruncate
                      >
                        {highlight(action.description, normalizedQuery)}
                      </Box>
                    ) : undefined}
                  </Box>
                </>
              );
              const shared = {
                role: 'option',
                id: `${listId}-option-${index}`,
                'aria-selected': active,
                'aria-disabled': action.disabled || undefined,
                tabIndex: -1,
                classNameBefore: clsx(
                  'list-group-item list-group-item-action d-flex gap-2',
                  active && 'active',
                  action.disabled && 'disabled',
                ),
                ref: (element: HTMLElement | null) => {
                  if (element) optionRefs.current.set(index, element);
                  else optionRefs.current.delete(index);
                },
                onMouseEnter: () => {
                  if (!action.disabled) setActiveIndex(index);
                },
                onClick: () => select(action),
              };
              const key = action.id ?? `${index}-${action.label}`;
              return action.href ? (
                <Box<'a'>
                  key={key}
                  {...shared}
                  component='a'
                  href={action.href}
                  target={action.target}
                  rel={action.target === '_blank' ? 'noreferrer' : undefined}
                >
                  {content}
                </Box>
              ) : (
                <Box<'button'>
                  key={key}
                  {...shared}
                  component='button'
                  type='button'
                  disabled={action.disabled}
                >
                  {content}
                </Box>
              );
            })}
          </Box>
        ) : (
          <Box p={3} fg='3'>
            {emptyMessage}
          </Box>
        )}
      </DialogBody>
      {footer ? <DialogFooter>{footer}</DialogFooter> : undefined}
    </Dialog>
  );
}

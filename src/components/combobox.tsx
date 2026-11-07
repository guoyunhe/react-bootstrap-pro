/* oxlint-disable jsx-a11y/prefer-tag-over-role --
 * The combobox follows the WAI-ARIA combobox pattern; native selects cannot
 * render icons, descriptions, or groups.
 */
import clsx from 'clsx';
import type { KeyboardEvent, ReactNode } from 'react';
import { Fragment, useEffect, useId, useMemo, useRef, useState } from 'react';
import { BiCheck, BiChevronDown } from 'react-bootstrap-icons-pro';

import type { ValidationState } from '../types';
import { Box } from './box';
import type { BoxProps } from './box';
import { Input } from './input';
import { Menu, MenuHeader } from './menu';

export type ComboboxOption = {
  value: string;
  label: ReactNode;
  description?: ReactNode | undefined;
  icon?: ReactNode | undefined;
  disabled?: boolean | undefined;
  text?: string | undefined;
};

export type ComboboxGroup = {
  label: ReactNode;
  options: readonly ComboboxOption[];
};

type ComboboxItem = ComboboxOption | ComboboxGroup;

export type ComboboxValue = string | readonly string[];

type ComboboxOwnProps = {
  options?: readonly ComboboxItem[] | undefined;
  value?: ComboboxValue | undefined;
  defaultValue?: ComboboxValue | undefined;
  onChange?: ((value: string | string[]) => void) | undefined;
  multiple?: boolean | undefined;
  placeholder?: string | undefined;
  name?: string | undefined;
  disabled?: boolean | undefined;
  size?: 'sm' | 'lg' | undefined;
  search?: boolean | undefined;
  searchPlaceholder?: string | undefined;
  noResults?: ReactNode;
  check?: boolean | undefined;
  validation?: ValidationState | undefined;
  id?: string | undefined;
  'aria-label'?: string | undefined;
  'aria-labelledby'?: string | undefined;
  'aria-describedby'?: string | undefined;
};

export type ComboboxProps = ComboboxOwnProps & Omit<BoxProps<'div'>, 'onChange' | 'children'>;

function normalizeValue(value: ComboboxValue | undefined): string[] {
  if (value === undefined) {
    return [];
  }

  return typeof value === 'string' ? [value] : [...value];
}

export function Combobox({
  options,
  value,
  defaultValue,
  onChange,
  multiple = false,
  placeholder = '',
  name,
  disabled,
  size,
  search = false,
  searchPlaceholder = 'Search…',
  noResults = 'No results found',
  check = false,
  validation,
  id,
  'aria-label': ariaLabel,
  'aria-labelledby': ariaLabelledBy,
  'aria-describedby': ariaDescribedBy,
  classNameBefore,
  className,
  ...props
}: ComboboxProps) {
  const [open, setOpen] = useState(false);
  const [query, setQuery] = useState('');
  const [internalValues, setInternalValues] = useState<string[]>(() =>
    normalizeValue(defaultValue),
  );
  const selectedValues = value === undefined ? internalValues : normalizeValue(value);

  const rootRef = useRef<HTMLDivElement>(null);
  const toggleRef = useRef<HTMLButtonElement>(null);
  const searchRef = useRef<HTMLInputElement>(null);
  const itemRefs = useRef(new Map<string, HTMLButtonElement>());
  const menuId = useId();

  const normalizedQuery = query.trim().toLowerCase();
  const matches = (option: ComboboxOption) =>
    normalizedQuery === '' ||
    (option.text ?? (typeof option.label === 'string' ? option.label : option.value))
      .toLowerCase()
      .includes(normalizedQuery);

  const visibleItems = useMemo<ComboboxItem[]>(
    () =>
      (options ?? []).flatMap((item): ComboboxItem[] => {
        if ('options' in item) {
          const groupOptions = item.options.filter(matches);
          return groupOptions.length > 0 ? [{ ...item, options: groupOptions }] : [];
        }

        return matches(item) ? [item] : [];
      }),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [options, normalizedQuery],
  );

  const allOptions = useMemo(
    () =>
      (options ?? []).flatMap((item): ComboboxOption[] =>
        'options' in item ? [...item.options] : [item],
      ),
    [options],
  );

  const selectedOptions = allOptions.filter((option) => selectedValues.includes(option.value));
  let selectedLabel: ReactNode;

  if (selectedOptions.length === 0) {
    selectedLabel = undefined;
  } else if (multiple && selectedOptions.length > 1) {
    selectedLabel = `${selectedOptions.length} selected`;
  } else {
    selectedLabel = selectedOptions[0]?.label;
  }

  const hiddenValue = multiple ? selectedValues.join(',') : (selectedValues[0] ?? '');

  const commit = (next: string[]) => {
    if (value === undefined) {
      setInternalValues(next);
    }

    onChange?.(multiple ? next : (next[0] ?? ''));
  };

  const getFocusableItems = () =>
    visibleItems
      .flatMap((item): ComboboxOption[] => ('options' in item ? [...item.options] : [item]))
      .filter((option) => !option.disabled)
      .map((option) => itemRefs.current.get(option.value))
      .filter((element): element is HTMLButtonElement => element !== undefined);

  const selectOption = (option: ComboboxOption) => {
    if (option.disabled) {
      return;
    }

    if (multiple) {
      commit(
        selectedValues.includes(option.value)
          ? selectedValues.filter((selectedValue) => selectedValue !== option.value)
          : [...selectedValues, option.value],
      );
      return;
    }

    commit([option.value]);
    setOpen(false);
    toggleRef.current?.focus();
  };

  useEffect(() => {
    if (!open) {
      return;
    }

    setQuery('');

    if (!search) {
      return;
    }

    const frame = requestAnimationFrame(() => searchRef.current?.focus());
    return () => cancelAnimationFrame(frame);
  }, [open, search]);

  useEffect(() => {
    if (!open) {
      return;
    }

    const handlePointerDown = (event: PointerEvent) => {
      if (rootRef.current && !rootRef.current.contains(event.target as Node)) {
        setOpen(false);
      }
    };

    document.addEventListener('pointerdown', handlePointerDown);
    return () => document.removeEventListener('pointerdown', handlePointerDown);
  }, [open]);

  const openMenu = () => {
    if (!disabled) {
      setOpen(true);
    }
  };

  const handleToggleKeyDown = (event: KeyboardEvent<HTMLButtonElement>) => {
    if (event.key === 'ArrowDown' || event.key === 'ArrowUp') {
      event.preventDefault();
      openMenu();
      requestAnimationFrame(() => {
        const items = getFocusableItems();
        const target = event.key === 'ArrowDown' ? items[0] : items.at(-1);
        target?.focus();
      });
      return;
    }

    if ((event.key === 'Enter' || event.key === ' ') && !open) {
      event.preventDefault();
      openMenu();
    }
  };

  const handleMenuKeyDown = (event: KeyboardEvent<HTMLDivElement>) => {
    if (event.key === 'Escape') {
      event.preventDefault();
      setOpen(false);
      toggleRef.current?.focus();
      return;
    }

    if (event.key === 'Tab') {
      setOpen(false);
      return;
    }

    const items = getFocusableItems();
    const target = event.target as HTMLElement;
    const isInput = target.matches('input, textarea');
    const currentIndex = items.indexOf(target as HTMLButtonElement);

    if (event.key === 'ArrowDown' || event.key === 'ArrowUp') {
      event.preventDefault();
      if (items.length === 0) {
        return;
      }

      const step = event.key === 'ArrowDown' ? 1 : -1;
      let nextIndex: number;

      if (currentIndex === -1) {
        nextIndex = step === 1 ? 0 : items.length - 1;
      } else {
        nextIndex = (currentIndex + step + items.length) % items.length;
      }

      items[nextIndex]?.focus();
      return;
    }

    if (event.key === 'Home' || event.key === 'End') {
      if (isInput) {
        return;
      }

      event.preventDefault();
      const target2 = event.key === 'Home' ? items[0] : items.at(-1);
      target2?.focus();
      return;
    }

    if ((event.key === 'Enter' || event.key === ' ') && !isInput) {
      event.preventDefault();
      const option = allOptions.find(
        (candidate) => itemRefs.current.get(candidate.value) === target,
      );
      if (option) {
        selectOption(option);
      }
    }
  };

  const renderOption = (option: ComboboxOption) => {
    const selected = selectedValues.includes(option.value);

    return (
      <Box
        key={option.value}
        ref={(element) => {
          if (element) {
            itemRefs.current.set(option.value, element);
          } else {
            itemRefs.current.delete(option.value);
          }
        }}
        component='button'
        type='button'
        role='option'
        tabIndex={-1}
        classNameBefore={clsx('menu-item', selected && 'selected')}
        aria-selected={selected}
        aria-disabled={option.disabled || undefined}
        disabled={option.disabled}
        onClick={() => selectOption(option)}
      >
        {option.icon && (
          <Box component='span' classNameBefore='menu-item-icon' aria-hidden='true'>
            {option.icon}
          </Box>
        )}
        {option.description === undefined ? (
          option.label
        ) : (
          <Box component='span' classNameBefore='menu-item-content'>
            <Box component='span'>{option.label}</Box>
            <Box component='small' classNameBefore='menu-item-description'>
              {option.description}
            </Box>
          </Box>
        )}
        {check && <BiCheck className='menu-item-check' size={16} aria-hidden='true' />}
      </Box>
    );
  };

  return (
    <Box
      {...(props as BoxProps)}
      ref={rootRef}
      classNameBefore={clsx(validation && `is-${validation}`, classNameBefore)}
      className={className}
      position='relative'
    >
      {name && <Box component='input' type='hidden' name={name} value={hiddenValue} readOnly />}
      <Box
        ref={toggleRef}
        component='button'
        type='button'
        id={id}
        disabled={disabled}
        classNameBefore={clsx(
          'form-control',
          size && `form-control-${size}`,
          'combobox-toggle',
          validation && `is-${validation}`,
          open && 'show',
        )}
        aria-haspopup='listbox'
        aria-expanded={open}
        aria-controls={menuId}
        aria-label={ariaLabel}
        aria-labelledby={ariaLabelledBy}
        aria-describedby={ariaDescribedBy}
        onClick={() => (open ? setOpen(false) : openMenu())}
        onKeyDown={handleToggleKeyDown}
      >
        <Box
          component='span'
          classNameBefore={clsx(
            'combobox-value',
            selectedLabel === undefined && 'combobox-placeholder',
          )}
        >
          {selectedLabel ?? placeholder}
        </Box>
        <BiChevronDown className='combobox-caret' size={16} aria-hidden='true' />
      </Box>
      <Menu
        id={menuId}
        show={open}
        role='listbox'
        aria-multiselectable={multiple || undefined}
        style={{ top: 'calc(100% + 2px)', left: 0, minWidth: '100%' }}
        onKeyDown={handleMenuKeyDown}
      >
        {search && (
          <Box classNameBefore='combobox-search'>
            <Input
              ref={searchRef}
              className='combobox-search-input'
              type='search'
              value={query}
              placeholder={searchPlaceholder}
              aria-label={searchPlaceholder}
              autoComplete='off'
              onChange={(event) => setQuery(event.currentTarget.value)}
            />
          </Box>
        )}
        {visibleItems.map((item, itemIndex) =>
          'options' in item ? (
            <Fragment key={`group-${itemIndex}`}>
              <MenuHeader>{item.label}</MenuHeader>
              {item.options.map((option) => renderOption(option))}
            </Fragment>
          ) : (
            renderOption(item)
          ),
        )}
        {visibleItems.length === 0 && <Box classNameBefore='combobox-no-results'>{noResults}</Box>}
      </Menu>
    </Box>
  );
}

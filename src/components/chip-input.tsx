import clsx from 'clsx';
import type {
  ClipboardEvent,
  ElementType,
  FocusEvent,
  KeyboardEvent,
  MouseEvent,
  ReactNode,
} from 'react';
import { useRef, useState } from 'react';

import { type ValidationState } from '../types';
import { Box } from './box';
import type { BoxProps } from './box';
import { Chip, type ChipProps } from './chip';
import { Input } from './input';

export type ChipInputChipProps = Omit<
  ChipProps<'span'>,
  'active' | 'children' | 'disabled' | 'onClick' | 'onDismiss' | 'onKeyDown' | 'ref' | 'tabIndex'
>;

type ChipInputOwnProps = {
  value?: readonly string[] | undefined;
  defaultValue?: readonly string[] | undefined;
  onChange?: ((values: string[]) => void) | undefined;
  separator?: string | null | undefined;
  allowDuplicates?: boolean | undefined;
  maxChips?: number | undefined;
  createOnBlur?: boolean | undefined;
  dismissible?: boolean | undefined;
  validation?: ValidationState | undefined;
  label?: ReactNode;
  chipProps?: ((value: string, index: number) => ChipInputChipProps) | undefined;
  id?: string | undefined;
  name?: string | undefined;
  placeholder?: string | undefined;
  disabled?: boolean | undefined;
  'aria-label'?: string | undefined;
  'aria-labelledby'?: string | undefined;
  'aria-describedby'?: string | undefined;
};

export type ChipInputProps<C extends ElementType = 'div'> = ChipInputOwnProps &
  Omit<BoxProps<C>, keyof ChipInputOwnProps | 'children'>;

export function ChipInput<C extends ElementType = 'div'>({
  component,
  className,
  value,
  defaultValue,
  onChange,
  separator = ',',
  allowDuplicates = false,
  maxChips,
  createOnBlur = true,
  dismissible = true,
  validation,
  label,
  chipProps,
  id,
  name,
  placeholder,
  disabled,
  'aria-label': ariaLabel,
  'aria-labelledby': ariaLabelledBy,
  'aria-describedby': ariaDescribedBy,
  onClick,
  ...props
}: ChipInputProps<C>) {
  const [internalValues, setInternalValues] = useState<string[]>(() => [...(defaultValue ?? [])]);
  const [draft, setDraft] = useState('');
  const [selected, setSelected] = useState<number[]>([]);
  const anchorRef = useRef<number | undefined>(undefined);
  const chipRefs = useRef<(HTMLSpanElement | null)[]>([]);
  const inputRef = useRef<HTMLInputElement>(null);

  const values = value ? [...value] : internalValues;
  const isDisabled = Boolean(disabled);

  const canAdd = (candidate: string, list: readonly string[]) =>
    candidate !== '' &&
    (allowDuplicates || !list.includes(candidate)) &&
    (maxChips === undefined || list.length < maxChips);

  const commit = (next: string[]) => {
    if (value === undefined) {
      setInternalValues(next);
    }

    setSelected([]);
    anchorRef.current = undefined;
    onChange?.(next);
  };

  const addDraft = () => {
    const trimmed = draft.trim();

    if (canAdd(trimmed, values)) {
      commit([...values, trimmed]);
    }

    setDraft('');
  };

  const focusInput = () => inputRef.current?.focus();

  const selectChip = (index: number, additive: boolean, range: boolean) => {
    setSelected((previous) => {
      if (range && anchorRef.current !== undefined) {
        const start = Math.min(anchorRef.current, index);
        const end = Math.max(anchorRef.current, index);
        return Array.from({ length: end - start + 1 }, (_, offset) => start + offset);
      }

      if (additive) {
        anchorRef.current = index;
        return previous.includes(index)
          ? previous.filter((selectedIndex) => selectedIndex !== index)
          : [...previous, index].toSorted((a, b) => a - b);
      }

      anchorRef.current = index;
      return [index];
    });
  };

  const handleInputChange = (next: string) => {
    if (separator && next.includes(separator)) {
      const parts = next.split(separator);
      let nextValues = [...values];

      for (const part of parts.slice(0, -1)) {
        const trimmed = part.trim();
        if (canAdd(trimmed, nextValues)) {
          nextValues = [...nextValues, trimmed];
        }
      }

      if (nextValues.length !== values.length) {
        commit(nextValues);
      }

      setDraft(parts.at(-1) ?? '');
      return;
    }

    setDraft(next);
  };

  const handleInputKeyDown = (event: KeyboardEvent<HTMLInputElement>) => {
    const { key } = event;

    if (key === 'Enter' || (separator && key === separator)) {
      event.preventDefault();
      addDraft();
      return;
    }

    if ((key === 'Backspace' || key === 'Delete') && draft === '') {
      event.preventDefault();
      if (values.length > 0) {
        const lastIndex = values.length - 1;
        selectChip(lastIndex, false, false);
        chipRefs.current[lastIndex]?.focus();
      }

      return;
    }

    if (
      key === 'ArrowLeft' &&
      event.currentTarget.selectionStart === 0 &&
      event.currentTarget.selectionEnd === 0 &&
      values.length > 0
    ) {
      event.preventDefault();
      const lastIndex = values.length - 1;
      selectChip(lastIndex, event.shiftKey, false);
      chipRefs.current[lastIndex]?.focus();
      return;
    }

    if (key === 'Escape') {
      setDraft('');
      setSelected([]);
      event.currentTarget.blur();
    }
  };

  const handleInputPaste = (event: ClipboardEvent<HTMLInputElement>) => {
    if (!separator) {
      return;
    }

    const pasted = event.clipboardData.getData('text');
    if (!pasted.includes(separator)) {
      return;
    }

    event.preventDefault();
    let nextValues = [...values];

    for (const part of pasted.split(separator)) {
      const trimmed = part.trim();
      if (canAdd(trimmed, nextValues)) {
        nextValues = [...nextValues, trimmed];
      }
    }

    if (nextValues.length !== values.length) {
      commit(nextValues);
    }

    setDraft('');
  };

  const handleInputBlur = (event: FocusEvent<HTMLInputElement>) => {
    if (!createOnBlur) {
      return;
    }

    const related = event.relatedTarget as HTMLElement | null;
    if (related?.closest('.chip')) {
      return;
    }

    addDraft();
  };

  const removeChip = (index: number) => {
    commit(values.filter((_, valueIndex) => valueIndex !== index));
    focusInput();
  };

  const handleChipClick = (index: number, event: MouseEvent<HTMLElement>) => {
    if (isDisabled) {
      return;
    }

    event.preventDefault();
    selectChip(index, event.metaKey || event.ctrlKey, event.shiftKey);
    chipRefs.current[index]?.focus();
  };

  const handleChipKeyDown = (index: number, event: KeyboardEvent<HTMLElement>) => {
    const { key } = event;

    if (key === 'Backspace' || key === 'Delete') {
      event.preventDefault();
      if (selected.length > 0) {
        commit(values.filter((_, valueIndex) => !selected.includes(valueIndex)));
        focusInput();
      }

      return;
    }

    if (key === 'ArrowLeft' || key === 'ArrowRight') {
      event.preventDefault();
      const direction = key === 'ArrowLeft' ? -1 : 1;
      const target = index + direction;

      if (target < 0) {
        return;
      }

      if (target >= values.length) {
        setSelected([]);
        focusInput();
        return;
      }

      if (event.shiftKey) {
        setSelected((previous) => [...new Set([...previous, target])].toSorted((a, b) => a - b));
      } else {
        selectChip(target, false, false);
      }

      chipRefs.current[target]?.focus();
      return;
    }

    if (key === 'Home') {
      event.preventDefault();
      selectChip(0, false, event.shiftKey);
      chipRefs.current[0]?.focus();
      return;
    }

    if (key === 'End' || key === 'Escape') {
      event.preventDefault();
      setSelected([]);
      focusInput();
      return;
    }

    if ((key === 'a' || key === 'A') && (event.metaKey || event.ctrlKey)) {
      event.preventDefault();
      setSelected(values.map((_, valueIndex) => valueIndex));
    }
  };

  const handleContainerClick = (event: MouseEvent<HTMLElement>) => {
    onClick?.(event);

    if (event.target === event.currentTarget) {
      setSelected([]);
      focusInput();
    }
  };

  return (
    <Box<C>
      {...(props as BoxProps<C>)}
      component={component ?? ('div' as C)}
      classNameBefore={clsx('chip-input', props.classNameBefore)}
      className={className}
      onClick={handleContainerClick}
    >
      {label !== undefined && (
        <Box component='label' classNameBefore='chip-input-label' htmlFor={id}>
          {label}
        </Box>
      )}
      {values.map((chipValue, index) => (
        <Chip
          key={`${chipValue}-${index}`}
          {...chipProps?.(chipValue, index)}
          ref={(element) => {
            chipRefs.current[index] = element;
          }}
          active={selected.includes(index)}
          disabled={isDisabled}
          tabIndex={isDisabled ? -1 : 0}
          onDismiss={dismissible ? () => removeChip(index) : undefined}
          onClick={(event) => handleChipClick(index, event)}
          onKeyDown={(event) => handleChipKeyDown(index, event)}
        >
          {chipValue}
        </Chip>
      ))}
      <Input
        ref={inputRef}
        ghost
        id={id}
        name={name}
        placeholder={placeholder}
        disabled={isDisabled}
        validation={validation}
        value={draft}
        aria-label={ariaLabel}
        aria-labelledby={ariaLabelledBy}
        aria-describedby={ariaDescribedBy}
        autoComplete='off'
        onChange={(event) => handleInputChange(event.currentTarget.value)}
        onKeyDown={handleInputKeyDown}
        onBlur={handleInputBlur}
        onPaste={handleInputPaste}
      />
    </Box>
  );
}

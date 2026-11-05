import clsx from 'clsx';
import {
  useEffect,
  useLayoutEffect,
  useRef,
  useState,
  type ChangeEvent,
  type FormEvent,
  type KeyboardEvent,
  type PointerEvent,
  type ReactNode,
} from 'react';

import { Box } from './box';
import type { BoxProps } from './box';

export type OtpInputType = 'numeric' | 'alphanumeric' | 'alpha';
export type OtpInputSize = 'sm' | 'lg';
export type OtpInputValidation = 'valid' | 'invalid';

type OtpInputOwnProps = {
  /** Number of slots, which is also the maximum code length. */
  length?: number | undefined;
  /** Accepted characters. Also sets `inputmode` and `pattern`. */
  type?: OtpInputType | undefined;
  /** Shows a dot in each filled slot instead of the character. */
  mask?: boolean | undefined;
  /** Splits the slots into groups separated by a decorative separator. */
  groups?: readonly number[] | undefined;
  separator?: string | undefined;
  /** Merges the slots into one field with shared borders. */
  connected?: boolean | undefined;
  size?: OtpInputSize | undefined;
  validation?: OtpInputValidation | undefined;
  value?: string | undefined;
  defaultValue?: string | undefined;
  onChange?: ((value: string) => void) | undefined;
  /** Called when every slot is filled. */
  onComplete?: ((value: string) => void) | undefined;
  id?: string | undefined;
  name?: string | undefined;
  autoComplete?: string | undefined;
  disabled?: boolean | undefined;
  readOnly?: boolean | undefined;
  required?: boolean | undefined;
  autoFocus?: boolean | undefined;
  'aria-label'?: string | undefined;
  'aria-labelledby'?: string | undefined;
  'aria-describedby'?: string | undefined;
};

export type OtpInputProps = OtpInputOwnProps &
  Omit<BoxProps<'div'>, keyof OtpInputOwnProps | 'children' | 'component'>;

const TYPE_CONFIG = {
  numeric: { inputMode: 'numeric', pattern: '[0-9]*', filter: /[^0-9]/g },
  alphanumeric: { inputMode: 'text', pattern: '[A-Za-z0-9]*', filter: /[^A-Za-z0-9]/g },
  alpha: { inputMode: 'text', pattern: '[A-Za-z]*', filter: /[^A-Za-z]/g },
} as const;

const MASK_CHARACTER = '•';

// A single keystroke overwrites the highlighted slot instead of shifting the
// following characters, matching the native selection the field maintains.
function selectSlotForTyping(event: KeyboardEvent<HTMLInputElement>) {
  if (event.key.length !== 1 || event.ctrlKey || event.metaKey || event.altKey) {
    return;
  }

  const input = event.currentTarget;
  const start = input.selectionStart ?? 0;
  const end = input.selectionEnd ?? start;

  if (start === end && start < input.value.length) {
    input.setSelectionRange(start, start + 1);
  }
}

export function OtpInput({
  length = 6,
  type = 'numeric',
  mask = false,
  groups,
  separator = '·',
  connected = false,
  size,
  validation,
  value,
  defaultValue = '',
  onChange,
  onComplete,
  id,
  name,
  autoComplete = 'one-time-code',
  disabled,
  readOnly,
  required,
  autoFocus,
  'aria-label': ariaLabel,
  'aria-labelledby': ariaLabelledBy,
  'aria-describedby': ariaDescribedBy,
  classNameBefore,
  className,
  ...props
}: OtpInputProps) {
  const [internalValue, setInternalValue] = useState(defaultValue);
  const [focused, setFocused] = useState(false);
  const [caret, setCaret] = useState(0);

  const inputRef = useRef<HTMLInputElement>(null);
  const slotRefs = useRef<(HTMLDivElement | null)[]>([]);
  const pendingCaretRef = useRef<number | undefined>(undefined);
  const pointerIndexRef = useRef<number | undefined>(undefined);

  const config = TYPE_CONFIG[type] ?? TYPE_CONFIG.numeric;
  const sanitize = (raw: string) => raw.replace(config.filter, '').slice(0, length);
  const displayValue = sanitize(value === undefined ? internalValue : value);
  const isControlled = value !== undefined;

  const applyCaret = (index: number) => {
    const input = inputRef.current;
    if (!input) {
      return;
    }

    const clamped = Math.max(0, Math.min(index, length - 1));
    input.setSelectionRange(clamped, clamped < input.value.length ? clamped + 1 : clamped);
    setCaret(clamped);
  };

  // The caret is restored after React has written the new value; the microtask
  // covers the controlled case where the parent rejects the change and no
  // re-render happens.
  const scheduleCaret = (index: number) => {
    pendingCaretRef.current = index;
    queueMicrotask(() => {
      const pending = pendingCaretRef.current;
      if (pending === undefined) {
        return;
      }

      pendingCaretRef.current = undefined;
      applyCaret(pending);
    });
  };

  const commit = (raw: string, nextCaret?: number) => {
    const next = sanitize(raw);

    if (next === displayValue) {
      if (nextCaret !== undefined) {
        applyCaret(nextCaret);
      }

      return;
    }

    onChange?.(next);

    if (next.length === length) {
      onComplete?.(next);
    }

    // A controlled value only reaches the DOM when the parent re-renders, so the
    // field is restored here to avoid showing a value the parent rejected.
    if (isControlled && inputRef.current) {
      inputRef.current.value = displayValue;
    } else {
      setInternalValue(next);
    }

    if (nextCaret !== undefined) {
      scheduleCaret(nextCaret);
    }
  };

  useLayoutEffect(() => {
    const pending = pendingCaretRef.current;
    if (pending === undefined) {
      return;
    }

    pendingCaretRef.current = undefined;
    applyCaret(pending);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  });

  const syncCaret = () => {
    const input = inputRef.current;
    if (input) {
      setCaret(Math.min(input.selectionStart ?? 0, length - 1));
    }
  };

  useEffect(() => {
    if (!focused) {
      return;
    }

    document.addEventListener('selectionchange', syncCaret);
    return () => document.removeEventListener('selectionchange', syncCaret);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [focused, length]);

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const input = event.currentTarget;
    const raw = input.value;
    const caretPosition = input.selectionStart ?? raw.length;
    const next = sanitize(raw);

    if (next !== raw) {
      input.value = next;
    }

    // Native editing keeps the caret after the inserted or removed characters;
    // clamping it to the value keeps the highlight on the next empty slot.
    commit(next, Math.min(caretPosition, next.length, length - 1));
  };

  const handlePaste = (event: FormEvent<HTMLInputElement>) => {
    const input = event.currentTarget;
    const pasted = (event.nativeEvent as ClipboardEvent).clipboardData?.getData('text');
    if (!pasted) {
      return;
    }

    event.preventDefault();

    // Sanitize before applying the length limit so a formatted code such as
    // `123-456` is not truncated by the separators.
    const sanitized = sanitize(pasted);
    let start = input.selectionStart ?? displayValue.length;
    let end = input.selectionEnd ?? start;

    if (sanitized.length === length) {
      start = 0;
      end = displayValue.length;
    }

    const inserted = sanitized.slice(0, length - (displayValue.length - (end - start)));
    if (!inserted) {
      return;
    }

    commit(
      displayValue.slice(0, start) + inserted + displayValue.slice(end),
      start + inserted.length,
    );
  };

  const handlePointerDown = (event: PointerEvent<HTMLInputElement>) => {
    let index: number | undefined;

    for (const [slotIndex, slot] of slotRefs.current.entries()) {
      if (
        slot &&
        (event.clientX <= slot.getBoundingClientRect().right || slotIndex === length - 1)
      ) {
        index = slotIndex;
        break;
      }
    }

    if (index === undefined) {
      return;
    }

    const target = Math.min(index, Math.min(displayValue.length, length - 1));

    if (document.activeElement === inputRef.current) {
      event.preventDefault();
      applyCaret(target);
      return;
    }

    // The tap also focuses the input natively; place the caret once focus settles
    // so mobile keyboards are still raised by the user gesture.
    pointerIndexRef.current = target;
  };

  const handleFocus = () => {
    const target = pointerIndexRef.current ?? Math.min(displayValue.length, length - 1);
    pointerIndexRef.current = undefined;
    setFocused(true);
    applyCaret(target);
  };

  const slots: ReactNode[] = [];
  let groupIndex = 0;
  let inGroup = 0;

  for (let index = 0; index < length; index++) {
    const character = displayValue[index] ?? '';
    const active = focused && index === caret;

    slots.push(
      <div
        key={index}
        ref={(node) => {
          slotRefs.current[index] = node;
        }}
        className={clsx('otp-slot', character && 'otp-slot-filled', active && 'otp-slot-active')}
      >
        {character && mask ? MASK_CHARACTER : character}
      </div>,
    );

    if (groups && groups.length > 0) {
      inGroup++;

      if (inGroup === groups[groupIndex] && index < length - 1) {
        slots.push(
          <div key={`separator-${index}`} className='otp-separator'>
            {separator}
          </div>,
        );
        groupIndex = Math.min(groupIndex + 1, groups.length - 1);
        inGroup = 0;
      }
    }
  }

  return (
    <Box
      {...props}
      classNameBefore={clsx(
        'otp',
        connected && 'otp-connected',
        size && `otp-${size}`,
        validation === 'valid' && 'is-valid',
        validation === 'invalid' && 'is-invalid',
        'otp-rendered',
        classNameBefore,
      )}
      className={className}
    >
      <input
        ref={inputRef}
        type='text'
        id={id}
        name={name}
        className='otp-input'
        value={displayValue}
        maxLength={length}
        inputMode={config.inputMode}
        pattern={config.pattern}
        autoComplete={autoComplete}
        disabled={disabled}
        readOnly={readOnly}
        required={required}
        // oxlint-disable-next-line jsx-a11y/no-autofocus -- forwarded by request
        autoFocus={autoFocus}
        aria-label={ariaLabel}
        aria-labelledby={ariaLabelledBy}
        aria-describedby={ariaDescribedBy}
        aria-invalid={validation === 'invalid' || undefined}
        onChange={handleChange}
        onKeyDown={selectSlotForTyping}
        onPaste={handlePaste}
        onPointerDown={handlePointerDown}
        onFocus={handleFocus}
        onBlur={() => setFocused(false)}
        onSelect={syncCaret}
        onKeyUp={syncCaret}
      />
      <div className='otp-slots' aria-hidden='true'>
        {slots}
      </div>
    </Box>
  );
}

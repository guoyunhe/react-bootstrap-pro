import { expect, test, vi } from 'vitest';
import { render } from 'vitest-browser-react';

import { OTPInput } from '../src';

function getInput(screen: { container: HTMLElement }) {
  return screen.container.querySelector<HTMLInputElement>('input.otp-input') as HTMLInputElement;
}

function getSlots(screen: { container: HTMLElement }) {
  return [...screen.container.querySelectorAll<HTMLElement>('.otp-slot')];
}

function slotTexts(screen: { container: HTMLElement }) {
  return getSlots(screen).map((slot) => slot.textContent);
}

function setNativeValue(input: HTMLInputElement, value: string) {
  Object.getOwnPropertyDescriptor(HTMLInputElement.prototype, 'value')?.set?.call(input, value);
  input.dispatchEvent(new Event('input', { bubbles: true }));
}

// Emulates what the browser does after a keystroke: replace the selected
// characters, place the caret after them, and fire an `input` event.
async function typeCharacter(input: HTMLInputElement, character: string, index?: number) {
  const start = index ?? input.value.length;
  const end = index === undefined ? start : index + 1;

  input.focus();
  const next = input.value.slice(0, start) + character + input.value.slice(end);
  input.setSelectionRange(start + 1, start + 1);
  setNativeValue(input, next.slice(0, input.maxLength));
  await expect.poll(() => input.value).not.toBe(undefined);
}

function pressBackspace(input: HTMLInputElement) {
  const start = input.selectionStart ?? input.value.length;
  const end = input.selectionEnd ?? start;
  const from = end > start ? start : Math.max(0, start - 1);

  input.focus();
  const next = input.value.slice(0, from) + input.value.slice(end);
  input.setSelectionRange(from, from);
  setNativeValue(input, next);
}

function paste(input: HTMLInputElement, text: string) {
  const dataTransfer = new DataTransfer();
  dataTransfer.setData('text', text);
  input.focus();
  input.dispatchEvent(
    new ClipboardEvent('paste', { clipboardData: dataTransfer, bubbles: true, cancelable: true }),
  );
}

test('renders one input and one slot per character', async () => {
  const screen = await render(<OTPInput aria-label='Verification code' data-testid='otp' />);

  const root = screen.getByTestId('otp').element();
  const input = getInput(screen);

  expect(root).toHaveClass('otp', 'otp-rendered');
  expect(input).toHaveClass('otp-input');
  expect(input.getAttribute('maxlength')).toBe('6');
  expect(input.getAttribute('inputmode')).toBe('numeric');
  expect(input.getAttribute('pattern')).toBe('[0-9]*');
  expect(input.getAttribute('autocomplete')).toBe('one-time-code');
  expect(input.getAttribute('aria-label')).toBe('Verification code');
  expect(getSlots(screen)).toHaveLength(6);
  expect(root.querySelector('.otp-slots')?.getAttribute('aria-hidden')).toBe('true');
});

test('types digits into the slots', async () => {
  const onChange = vi.fn();
  const onComplete = vi.fn();
  const screen = await render(
    <OTPInput aria-label='Code' onChange={onChange} onComplete={onComplete} />,
  );
  const input = getInput(screen);

  for (const character of ['1', '2', '3', '4', '5', '6']) {
    await typeCharacter(input, character);
    await expect.poll(() => slotTexts(screen).join('')).toContain(character);
  }

  await expect.poll(() => slotTexts(screen).join('')).toBe('123456');
  expect(onChange).toHaveBeenLastCalledWith('123456');
  expect(onComplete).toHaveBeenCalledExactlyOnceWith('123456');
  expect(getSlots(screen).every((slot) => slot.classList.contains('otp-slot-filled'))).toBe(true);
});

test('overwrites the filled slot under the caret', async () => {
  const screen = await render(<OTPInput aria-label='Code' defaultValue='123456' />);
  const input = getInput(screen);

  await typeCharacter(input, '9', 2);

  await expect.poll(() => slotTexts(screen).join('')).toBe('129456');
});

test('removes the previous character on backspace', async () => {
  const onChange = vi.fn();
  const screen = await render(
    <OTPInput aria-label='Code' defaultValue='123' onChange={onChange} />,
  );
  const input = getInput(screen);

  pressBackspace(input);

  await expect.poll(() => slotTexts(screen).join('')).toBe('12');
  expect(onChange).toHaveBeenLastCalledWith('12');
});

test('sanitizes pasted codes', async () => {
  const onComplete = vi.fn();
  const screen = await render(<OTPInput aria-label='Code' onComplete={onComplete} />);
  const input = getInput(screen);

  paste(input, '123-456');

  await expect.poll(() => slotTexts(screen).join('')).toBe('123456');
  expect(onComplete).toHaveBeenCalledExactlyOnceWith('123456');
});

test('filters characters by type', async () => {
  const onChange = vi.fn();
  const screen = await render(<OTPInput aria-label='Code' type='alpha' onChange={onChange} />);
  const input = getInput(screen);

  expect(input.getAttribute('inputmode')).toBe('text');
  expect(input.getAttribute('pattern')).toBe('[A-Za-z]*');

  await typeCharacter(input, '1');
  expect(onChange).not.toHaveBeenCalled();

  await typeCharacter(input, 'a');
  await expect.poll(() => slotTexts(screen).join('')).toBe('a');
});

test('accepts letters and digits when alphanumeric', async () => {
  const screen = await render(<OTPInput aria-label='Code' type='alphanumeric' defaultValue='a1' />);
  const input = getInput(screen);

  expect(input.getAttribute('pattern')).toBe('[A-Za-z0-9]*');
  await typeCharacter(input, 'Z');
  await expect.poll(() => slotTexts(screen).join('')).toBe('a1Z');
});

test('masks characters while keeping the value', async () => {
  const screen = await render(<OTPInput aria-label='Code' mask defaultValue='123' />);
  const input = getInput(screen);

  expect(input.value).toBe('123');
  await expect.poll(() => slotTexts(screen).join('')).toBe('•••');
});

test('renders group separators', async () => {
  const screen = await render(<OTPInput aria-label='Code' groups={[3, 3]} defaultValue='123456' />);

  const separators = [...screen.container.querySelectorAll('.otp-separator')];
  expect(separators).toHaveLength(1);
  expect(separators[0]?.textContent).toBe('·');
  expect(getSlots(screen)).toHaveLength(6);
});

test('supports a custom separator and length', async () => {
  const screen = await render(
    <OTPInput aria-label='PIN' length={4} groups={[2, 2]} separator='-' />,
  );
  const input = getInput(screen);

  expect(input.getAttribute('maxlength')).toBe('4');
  expect(getSlots(screen)).toHaveLength(4);
  expect(screen.container.querySelector('.otp-separator')?.textContent).toBe('-');
});

test('applies connected, size, validation and disabled states', async () => {
  const screen = await render(
    <OTPInput
      aria-label='Code'
      data-testid='otp'
      connected
      size='lg'
      validation='invalid'
      disabled
    />,
  );

  const root = screen.getByTestId('otp').element();
  const input = getInput(screen);

  expect(root).toHaveClass('otp-connected', 'otp-lg', 'is-invalid');
  expect(input.disabled).toBe(true);
  expect(input.getAttribute('aria-invalid')).toBe('true');
});

test('supports controlled values', async () => {
  const onChange = vi.fn();
  const screen = await render(<OTPInput aria-label='Code' value='12' onChange={onChange} />);
  const input = getInput(screen);

  await expect.poll(() => slotTexts(screen).join('')).toBe('12');

  await typeCharacter(input, '3');
  expect(onChange).toHaveBeenLastCalledWith('123');
  // The parent owns the value, so the field keeps the controlled value.
  await expect.poll(() => getInput(screen).value).toBe('12');

  await screen.rerender(<OTPInput aria-label='Code' value='1234' onChange={onChange} />);
  await expect.poll(() => slotTexts(screen).join('')).toBe('1234');
});

test('keeps a custom autocomplete value', async () => {
  const screen = await render(<OTPInput aria-label='Code' autoComplete='off' />);
  expect(getInput(screen).getAttribute('autocomplete')).toBe('off');
});

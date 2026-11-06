import { expect, test, vi } from 'vitest';
import { render } from 'vitest-browser-react';

import { Datepicker, type DatepickerDate } from '../src';

function clickDay(index: number) {
  const days = [...getCalendarElement().querySelectorAll<HTMLButtonElement>('[data-vc-date-btn]')];
  days[index]?.click();
}

function getCalendarElement(): HTMLElement {
  const element = document.querySelector<HTMLElement>('[data-vc=calendar]');
  expect(element).not.toBeNull();
  return element as HTMLElement;
}

test('renders an empty text input with the width utility', async () => {
  const screen = await render(<Datepicker aria-label='Date' w={12} />);
  const input = screen.getByLabelText('Date').element() as HTMLInputElement;

  expect(input).toHaveClass('form-control');
  expect(input).toHaveClass('w-12');
  expect(input.type).toBe('text');
  expect(input.value).toBe('');
  expect(input.getAttribute('autocomplete')).toBe('off');
});

test('opens the calendar on focus and selects a date', async () => {
  const onChange = vi.fn();
  const screen = await render(<Datepicker aria-label='Date' onChange={onChange} />);
  const input = screen.getByLabelText('Date').element() as HTMLInputElement;

  input.focus();
  await expect.poll(() => getCalendarElement().getAttribute('data-vc-input')).toBe('');

  const day = getCalendarElement().querySelector<HTMLButtonElement>('[data-vc-date-btn]');
  expect(day).not.toBeNull();
  day?.click();

  await expect.poll(() => onChange.mock.calls.length).toBe(1);
  const dates = onChange.mock.calls[0]?.[0] as string[];
  expect(dates).toHaveLength(1);
  expect(dates[0]).toMatch(/^\d{4}-\d{2}-\d{2}$/);
  await expect.poll(() => input.value.length).toBeGreaterThan(0);
});

test('shows the default value in the input', async () => {
  const screen = await render(
    <Datepicker aria-label='Date' defaultValue='2024-03-15' locale='en-US' />,
  );
  const input = screen.getByLabelText('Date').element() as HTMLInputElement;

  await expect.poll(() => input.value).toBe(new Date(2024, 2, 15).toLocaleDateString('en-US'));
});

test('syncs a controlled value', async () => {
  const screen = await render(<Datepicker aria-label='Date' value='2024-01-01' locale='en-US' />);
  const input = screen.getByLabelText('Date').element() as HTMLInputElement;

  await expect.poll(() => input.value).toBe(new Date(2024, 0, 1).toLocaleDateString('en-US'));

  await screen.rerender(<Datepicker aria-label='Date' value='2024-02-02' locale='en-US' />);
  await expect.poll(() => input.value).toBe(new Date(2024, 1, 2).toLocaleDateString('en-US'));
});

test('renders an inline calendar with a width utility and hidden input', async () => {
  const screen = await render(
    <Datepicker
      inline
      w={12}
      className='custom-calendar'
      name='date'
      defaultValue={['2024-05-06']}
    />,
  );

  const hidden = document.querySelector<HTMLInputElement>('input[type=hidden]');
  const calendar = getCalendarElement();
  expect(hidden).not.toBeNull();
  expect(calendar.classList.contains('w-12')).toBe(true);
  expect(calendar.classList.contains('custom-calendar')).toBe(true);
  expect(hidden?.name).toBe('date');
  expect(hidden?.value).toBe('2024-05-06');
  expect(getCalendarElement().hasAttribute('data-vc-input')).toBe(false);

  await screen.rerender(
    <Datepicker
      inline
      w={6}
      className='updated-calendar'
      name='date'
      defaultValue={['2024-05-06']}
    />,
  );
  expect(calendar.classList.contains('w-12')).toBe(false);
  expect(calendar.classList.contains('custom-calendar')).toBe(false);
  expect(calendar.classList.contains('w-6')).toBe(true);
  expect(calendar.classList.contains('updated-calendar')).toBe(true);
});

test('selects and labels multiple dates', async () => {
  const onChange = vi.fn();
  const screen = await render(
    <Datepicker aria-label='Date' selectionMode='multiple' onChange={onChange} />,
  );
  const input = screen.getByLabelText('Date').element() as HTMLInputElement;

  input.focus();
  await expect.poll(() => getCalendarElement().getAttribute('data-vc-input')).toBe('');

  clickDay(0);
  await expect.poll(() => onChange.mock.calls.length).toBe(1);
  clickDay(1);

  await expect.poll(() => onChange.mock.calls.length).toBe(2);
  expect(onChange.mock.calls[1]?.[0]).toHaveLength(2);
  await expect.poll(() => input.value.split(', ')).toHaveLength(2);
});

test('joins a date range with an en dash', async () => {
  const onChange = vi.fn();
  const screen = await render(
    <Datepicker aria-label='Date' selectionMode='multiple-ranged' onChange={onChange} />,
  );
  const input = screen.getByLabelText('Date').element() as HTMLInputElement;

  input.focus();
  await expect.poll(() => getCalendarElement().getAttribute('data-vc-input')).toBe('');

  clickDay(0);
  await expect.poll(() => onChange.mock.calls.length).toBe(1);
  clickDay(1);

  await expect.poll(() => input.value).toContain('–');
});

function currentMonthDate(day: number): DatepickerDate {
  const now = new Date();
  const month = String(now.getMonth() + 1).padStart(2, '0');

  return `${now.getFullYear()}-${month}-${String(day).padStart(2, '0')}` as DatepickerDate;
}

test('disables dates outside the min and max range', async () => {
  const screen = await render(
    <Datepicker aria-label='Date' dateMin={currentMonthDate(10)} dateMax={currentMonthDate(20)} />,
  );
  const input = screen.getByLabelText('Date').element() as HTMLInputElement;

  input.focus();
  await expect.poll(() => getCalendarElement().getAttribute('data-vc-input')).toBe('');

  const outOfRange = getCalendarElement().querySelector<HTMLElement>(
    `[data-vc-date="${currentMonthDate(5)}"]`,
  );
  const inRange = getCalendarElement().querySelector<HTMLElement>(
    `[data-vc-date="${currentMonthDate(15)}"]`,
  );

  expect(outOfRange?.hasAttribute('data-vc-date-disabled')).toBe(true);
  expect(inRange?.hasAttribute('data-vc-date-disabled')).toBe(false);
});

test('shows several months at once', async () => {
  const screen = await render(
    <Datepicker aria-label='Date' displayMonthsCount={3} defaultValue='2024-06-10' />,
  );
  const input = screen.getByLabelText('Date').element() as HTMLInputElement;

  input.focus();
  await expect.poll(() => getCalendarElement().getAttribute('data-vc-input')).toBe('');

  expect(getCalendarElement().querySelectorAll('[data-vc-month]')).toHaveLength(3);
});

test('supports a custom date format and a disabled input', async () => {
  const screen = await render(
    <Datepicker
      aria-label='Date'
      defaultValue='2024-03-15'
      format={{ year: 'numeric', month: '2-digit', day: '2-digit' }}
      disabled
    />,
  );
  const input = screen.getByLabelText('Date').element() as HTMLInputElement;

  expect(input.disabled).toBe(true);
  expect(input.value).toBe(
    new Intl.DateTimeFormat(undefined, {
      year: 'numeric',
      month: '2-digit',
      day: '2-digit',
    }).format(new Date(2024, 2, 15)),
  );
});

test('opens at the month of the preselected date', async () => {
  const screen = await render(<Datepicker aria-label='Date' defaultValue='2024-03-15' />);
  const input = screen.getByLabelText('Date').element() as HTMLInputElement;

  input.focus();
  await expect
    .poll(() =>
      getCalendarElement().querySelector('[data-vc-month]')?.getAttribute('data-vc-month'),
    )
    .toBe('2');
  expect(getCalendarElement().querySelector('[data-vc-year]')?.getAttribute('data-vc-year')).toBe(
    '2024',
  );
});

test('renders a button trigger', async () => {
  const onChange = vi.fn();
  const screen = await render(
    <Datepicker
      aria-label='Date'
      trigger='button'
      w={12}
      defaultValue='2024-03-15'
      locale='en-US'
      onChange={onChange}
    />,
  );
  const button = screen.getByLabelText('Date').element() as HTMLButtonElement;

  expect(button.tagName).toBe('BUTTON');
  expect(button).toHaveClass('w-12');
  expect(button).toHaveAttribute('aria-haspopup', 'dialog');
  expect(button).toHaveAttribute('aria-expanded', 'false');
  expect(button.textContent).toBe(new Date(2024, 2, 15).toLocaleDateString('en-US'));
  expect(button).not.toHaveClass('form-control');

  button.click();
  await expect.poll(() => button.getAttribute('aria-expanded')).toBe('true');
  expect(getCalendarElement().hasAttribute('data-vc-input')).toBe(true);

  button.click();
  await expect.poll(() => button.getAttribute('aria-expanded')).toBe('false');

  // Real pointer presses hide the popup before the click runs; the trigger must
  // still reopen it.
  button.click();
  await expect.poll(() => button.getAttribute('aria-expanded')).toBe('true');
  document.dispatchEvent(new PointerEvent('pointerdown', { bubbles: true }));
  button.click();
  await expect.poll(() => button.getAttribute('aria-expanded')).toBe('false');
});

test('inherits the surrounding color mode', async () => {
  const screen = await render(
    <div data-bs-theme='dark'>
      <Datepicker aria-label='Date' />
    </div>,
  );
  const input = screen.getByLabelText('Date').element() as HTMLInputElement;

  input.focus();
  await expect.poll(() => getCalendarElement().getAttribute('data-bs-theme')).toBe('dark');
});

test('can override the color mode', async () => {
  const screen = await render(
    <div data-bs-theme='light'>
      <Datepicker aria-label='Date' theme='dark' />
    </div>,
  );
  const input = screen.getByLabelText('Date').element() as HTMLInputElement;

  input.focus();
  await expect.poll(() => getCalendarElement().getAttribute('data-bs-theme')).toBe('dark');
});

test('renders a ghost input for form adorn wrappers', async () => {
  const screen = await render(<Datepicker aria-label='Date' ghost />);
  const input = screen.getByLabelText('Date').element() as HTMLInputElement;

  expect(input).toHaveClass('form-ghost');
  expect(input).not.toHaveClass('form-control');
});

import 'bootstrap/dist/css/bootstrap.css';
import { useState } from 'react';
import { expect, test, vi } from 'vitest';
import { render } from 'vitest-browser-react';

import { SpotlightBasicDemo } from '../docs/components/spotlight/demos/basic';
import { SpotlightEmptyDemo } from '../docs/components/spotlight/demos/empty';
import { SpotlightFilterDemo } from '../docs/components/spotlight/demos/filter';
import { SpotlightFooterDemo } from '../docs/components/spotlight/demos/footer';
import { SpotlightShortcutDemo } from '../docs/components/spotlight/demos/shortcut';
import { Spotlight, type SpotlightAction } from '../src';

function typeInto(input: HTMLInputElement, value: string) {
  const setter = Object.getOwnPropertyDescriptor(HTMLInputElement.prototype, 'value')?.set;
  setter?.call(input, value);
  input.dispatchEvent(new Event('input', { bubbles: true }));
}

function pressKey(target: EventTarget, key: string, init: KeyboardEventInit = {}) {
  target.dispatchEvent(
    new KeyboardEvent('keydown', { key, bubbles: true, cancelable: true, ...init }),
  );
}

const stayOpenActions: SpotlightAction[] = [{ label: 'One' }];

function StayOpenHarness() {
  const [show, setShow] = useState(true);
  return (
    <Spotlight show={show} onShowChange={setShow} closeOnSelect={false} actions={stayOpenActions} />
  );
}

function optionsIn(dialog: HTMLElement): HTMLElement[] {
  return [...dialog.querySelectorAll<HTMLElement>('[role=option]')];
}

test('filters actions, navigates with the keyboard and runs the selected action', async () => {
  const screen = await render(<SpotlightBasicDemo />);
  await screen.getByRole('button', { name: 'Open spotlight' }).click();

  const dialog = document.querySelector<HTMLDialogElement>('dialog.spotlight')!;
  await expect.poll(() => dialog.open).toBe(true);
  expect(dialog.getAttribute('aria-label')).toBe('Search');

  const input = dialog.querySelector<HTMLInputElement>('input')!;
  expect(input).toHaveAttribute('role', 'combobox');
  expect(input).toHaveAttribute('aria-expanded', 'true');
  await expect.poll(() => document.activeElement).toBe(input);

  expect(optionsIn(dialog)).toHaveLength(5);
  const firstOption = optionsIn(dialog)[0]!;
  expect(input.getAttribute('aria-activedescendant')).toBe(firstOption.id);
  expect(firstOption).toHaveAttribute('aria-selected', 'true');

  pressKey(input, 'ArrowDown');
  await expect.poll(() => optionsIn(dialog)[1]!.getAttribute('aria-selected')).toBe('true');
  expect(input.getAttribute('aria-activedescendant')).toBe(optionsIn(dialog)[1]!.id);

  typeInto(input, 'bill');
  await expect.poll(() => optionsIn(dialog).length).toBe(1);
  expect(optionsIn(dialog)[0]!.textContent).toContain('Billing');
  expect(optionsIn(dialog)[0]!.querySelector('mark')?.textContent).toBe('Bill');

  pressKey(input, 'Enter');
  await expect.poll(() => dialog.open).toBe(false);
  await expect.poll(() => screen.container.textContent).toContain('Selected action: Billing');
});

test('matches descriptions and keywords and resets the query when reopened', async () => {
  const actions: SpotlightAction[] = [
    { label: 'Billing', description: 'Invoices and payment methods' },
    { label: 'Settings', keywords: ['preferences', 'workspace'] },
  ];

  function Harness() {
    const [show, setShow] = useState(false);
    return (
      <>
        <button type='button' onClick={() => setShow(true)}>
          Open
        </button>
        <Spotlight show={show} onShowChange={setShow} actions={actions} label='Actions' />
      </>
    );
  }

  const screen = await render(<Harness />);
  const dialog = document.querySelector<HTMLDialogElement>('dialog.spotlight')!;

  await screen.getByRole('button', { name: 'Open' }).click();
  await expect.poll(() => dialog.open).toBe(true);
  const input = dialog.querySelector<HTMLInputElement>('input')!;

  typeInto(input, 'invoice');
  await expect
    .poll(() => optionsIn(dialog).map((option) => option.textContent))
    .toEqual(['BillingInvoices and payment methods']);

  typeInto(input, 'workspace');
  await expect
    .poll(() => optionsIn(dialog).map((option) => option.textContent))
    .toEqual(['Settings']);

  pressKey(input, 'Enter');
  await expect.poll(() => dialog.open).toBe(false);

  await screen.getByRole('button', { name: 'Open' }).click();
  await expect.poll(() => dialog.open).toBe(true);
  expect(input.value).toBe('');
  expect(optionsIn(dialog)).toHaveLength(2);
});

test('skips disabled actions while navigating', async () => {
  const onSelect = vi.fn();
  const actions: SpotlightAction[] = [
    { label: 'One' },
    { label: 'Two', disabled: true },
    { label: 'Three' },
  ];
  await render(<Spotlight show actions={actions} onSelect={onSelect} />);

  const dialog = document.querySelector<HTMLDialogElement>('dialog.spotlight')!;
  await expect.poll(() => dialog.open).toBe(true);
  const input = dialog.querySelector<HTMLInputElement>('input')!;

  expect(optionsIn(dialog)[1]).toHaveAttribute('aria-disabled', 'true');

  pressKey(input, 'ArrowDown');
  await expect.poll(() => optionsIn(dialog)[2]!.getAttribute('aria-selected')).toBe('true');

  pressKey(input, 'Enter');
  await expect.poll(() => onSelect).toHaveBeenCalledWith(actions[2]);
});

test('limits the number of listed actions', async () => {
  const actions: SpotlightAction[] = [{ label: 'One' }, { label: 'Two' }, { label: 'Three' }];
  await render(<Spotlight show actions={actions} limit={2} />);
  const dialog = document.querySelector<HTMLDialogElement>('dialog.spotlight')!;
  await expect.poll(() => dialog.open).toBe(true);
  expect(optionsIn(dialog)).toHaveLength(2);
});

test('opens and closes with the Ctrl+K shortcut', async () => {
  await render(<SpotlightShortcutDemo />);
  const dialog = document.querySelector<HTMLDialogElement>('dialog.spotlight')!;
  expect(dialog.open).toBe(false);
  expect(dialog.getAttribute('aria-label')).toBe('Search documentation');

  pressKey(document, 'k', { ctrlKey: true });
  await expect.poll(() => dialog.open).toBe(true);

  pressKey(document, 'k', { ctrlKey: true });
  await expect.poll(() => dialog.open).toBe(false);
});

test('applies a custom filter', async () => {
  const screen = await render(<SpotlightFilterDemo />);
  await screen.getByRole('button', { name: 'Search components' }).click();
  const dialog = document.querySelector<HTMLDialogElement>('dialog.spotlight')!;
  await expect.poll(() => dialog.open).toBe(true);
  const input = dialog.querySelector<HTMLInputElement>('input')!;

  typeInto(input, 'b');
  await expect
    .poll(() => optionsIn(dialog).map((option) => option.textContent))
    .toEqual(['Badge', 'Breadcrumb', 'Button']);

  typeInto(input, 'but');
  await expect
    .poll(() => optionsIn(dialog).map((option) => option.textContent))
    .toEqual(['Button']);
});

test('renders the empty message and the footer', async () => {
  const screen = await render(
    <>
      <SpotlightEmptyDemo />
      <SpotlightFooterDemo />
    </>,
  );

  await screen.getByRole('button', { name: 'Search with no matches' }).click();
  const [emptyDialog, footerDialog] =
    document.querySelectorAll<HTMLDialogElement>('dialog.spotlight');
  await expect.poll(() => emptyDialog?.open).toBe(true);
  const emptyInput = emptyDialog!.querySelector<HTMLInputElement>('input')!;
  typeInto(emptyInput, 'zzz');
  await expect.poll(() => optionsIn(emptyDialog!).length).toBe(0);
  expect(emptyDialog!.textContent).toContain('Nothing matches your query.');
  expect(emptyInput).toHaveAttribute('aria-expanded', 'false');

  await emptyDialog!.querySelector<HTMLButtonElement>('.btn-close')!.click();
  await expect.poll(() => emptyDialog!.open).toBe(false);

  await screen.getByRole('button', { name: 'Search with footer' }).click();
  await expect.poll(() => footerDialog!.open).toBe(true);
  expect(footerDialog!.textContent).toContain('to navigate');
  expect(footerDialog!.textContent).toContain('to select');
});

test('stays open when a selection does not close it and closes on Escape', async () => {
  await render(<StayOpenHarness />);
  const dialog = document.querySelector<HTMLDialogElement>('dialog.spotlight')!;
  await expect.poll(() => dialog.open).toBe(true);

  const input = dialog.querySelector<HTMLInputElement>('input')!;
  pressKey(input, 'Enter');
  expect(dialog.open).toBe(true);

  dialog.dispatchEvent(new Event('cancel', { cancelable: true }));
  await expect.poll(() => dialog.open).toBe(false);
});

import 'bootstrap/dist/css/bootstrap.css';
import { StrictMode, useState } from 'react';
import { expect, test } from 'vitest';
import { render } from 'vitest-browser-react';

import { DialogBasicDemo } from '../docs/components/dialog/demos/basic';
import { DialogDarkDemo } from '../docs/components/dialog/demos/dark';
import { DialogFullscreenDemo } from '../docs/components/dialog/demos/fullscreen';
import { DialogInstantDemo } from '../docs/components/dialog/demos/instant';
import { DialogNonmodalDemo } from '../docs/components/dialog/demos/nonmodal';
import { DialogOverlaysDemo } from '../docs/components/dialog/demos/overlays';
import { DialogResponsiveFullscreenDemo } from '../docs/components/dialog/demos/responsive-fullscreen';
import { DialogScrollableDemo } from '../docs/components/dialog/demos/scrollable';
import { DialogSizesDemo } from '../docs/components/dialog/demos/sizes';
import { DialogSlideDownDemo } from '../docs/components/dialog/demos/slide-down';
import { DialogSlideUpDemo } from '../docs/components/dialog/demos/slide-up';
import { DialogStaticBackdropDemo } from '../docs/components/dialog/demos/static-backdrop';
import { DialogSwappingDemo } from '../docs/components/dialog/demos/swapping';
import { Dialog, Drawer } from '../src';

test.each([
  [DialogBasicDemo, 'Open dialog'],
  [DialogDarkDemo, 'Open dark dialog'],
  [DialogFullscreenDemo, 'Fullscreen dialog'],
  [DialogInstantDemo, 'Instant dialog'],
  [DialogResponsiveFullscreenDemo, 'Fullscreen below lg'],
  [DialogScrollableDemo, 'Launch scrollable body dialog'],
  [DialogSlideDownDemo, 'Slide down dialog'],
  [DialogSlideUpDemo, 'Slide up dialog'],
  [DialogStaticBackdropDemo, 'Open static backdrop dialog'],
])('dialog demo opens and closes: %s', async (Demo, name) => {
  const screen = await render(<Demo />);
  const trigger = screen.getByRole('button', { name });
  const dialog = document.getElementById(
    trigger.element().getAttribute('aria-controls')!,
  ) as HTMLDialogElement;
  await trigger.click();
  await expect.poll(() => dialog.open).toBe(true);
  expect(dialog.matches(':modal')).toBe(true);
  expect(document.documentElement).toHaveClass('dialog-open');
  await screen.getByRole('button', { name: 'Close', exact: true }).first().click();
  await expect.poll(() => dialog.open).toBe(false);
  await expect.element(trigger).toHaveFocus();
  expect(document.documentElement).not.toHaveClass('dialog-open');
});

test('nonmodal dialog permits page interaction and Escape inside it', async () => {
  const screen = await render(<DialogNonmodalDemo />);
  const trigger = screen.getByRole('button', { name: 'Open non-modal dialog' });
  await trigger.click();
  const dialog = document.querySelector<HTMLDialogElement>('#dialog-nonmodal')!;
  expect(dialog.open).toBe(true);
  expect(dialog.matches(':modal')).toBe(false);
  expect(document.documentElement).not.toHaveClass('dialog-open');
  dialog.dispatchEvent(
    new KeyboardEvent('keydown', { key: 'Escape', bubbles: true, cancelable: true }),
  );
  await expect.poll(() => dialog.open).toBe(false);
});

test('static backdrop prevents outside dismissal but permits Escape', async () => {
  const screen = await render(<DialogStaticBackdropDemo />);
  await screen.getByRole('button', { name: 'Open static backdrop dialog' }).click();
  const dialog = document.querySelector<HTMLDialogElement>('#dialog-static-backdrop')!;
  const rect = dialog.getBoundingClientRect();
  dialog.dispatchEvent(
    new MouseEvent('click', { bubbles: true, clientX: rect.left - 10, clientY: rect.top - 10 }),
  );
  expect(dialog.open).toBe(true);
  dialog.dispatchEvent(new Event('cancel', { cancelable: true }));
  await expect.poll(() => dialog.open).toBe(false);
});

test('sizes and swapping update React state and keep the backdrop during swapping', async () => {
  const screen = await render(
    <>
      <DialogSizesDemo />
      <DialogSwappingDemo />
    </>,
  );
  for (const name of ['Small', 'Default', 'Large', 'Extra large']) {
    const trigger = screen.getByRole('button', { name, exact: true });
    await trigger.click();
    const dialog = document.getElementById(
      trigger.element().getAttribute('aria-controls')!,
    ) as HTMLDialogElement;
    await expect.poll(() => dialog.open).toBe(true);
    await screen.getByRole('button', { name: 'Close' }).click();
    await expect.poll(() => dialog.open).toBe(false);
  }
  const trigger = screen.getByRole('button', { name: 'Open first dialog' });
  await trigger.click();
  const dialog = document.querySelector<HTMLDialogElement>('#dialog-swap')!;
  await screen.getByRole('button', { name: 'Go to second dialog' }).click();
  expect(dialog.open).toBe(true);
  expect(dialog.matches(':modal')).toBe(true);
  await expect.element(screen.getByRole('heading', { name: 'Second dialog' })).toBeVisible();
  await screen.getByRole('button', { name: 'Back to first dialog' }).click();
  await expect.element(screen.getByRole('heading', { name: 'First dialog' })).toBeVisible();
  await screen.getByRole('button', { name: 'Close', exact: true }).first().click();
  await expect.poll(() => dialog.open).toBe(false);
  await expect.element(trigger).toHaveFocus();
});

test('dialog overlays are interactive and rendered within the modal', async () => {
  const screen = await render(<DialogOverlaysDemo />);
  await screen.getByRole('button', { name: 'Open dialog' }).click();
  const dialog = document.querySelector<HTMLDialogElement>('#dialog-overlays')!;
  const tooltipTrigger = screen.getByRole('button', { name: 'Tooltip' });
  await tooltipTrigger.hover();
  const tooltip = screen.getByRole('tooltip');
  await expect.element(tooltip).toBeVisible();
  expect(dialog.contains(tooltip.element())).toBe(true);
  await screen.getByRole('button', { name: 'Popover' }).click();
  const popover = screen.getByRole('dialog', { name: 'Popover title' });
  await expect.element(popover).toBeVisible();
  expect(dialog.contains(popover.element())).toBe(true);
  await screen.getByRole('button', { name: 'Menu' }).click();
  await expect.element(screen.getByRole('link', { name: 'Action' })).toBeVisible();
});

function LocksExample() {
  const [dialog, setDialog] = useState(true);
  const [drawer, setDrawer] = useState(true);
  return (
    <>
      <button onClick={() => setDialog(false)}>Hide dialog</button>
      <button onClick={() => setDrawer(false)}>Hide drawer</button>
      <Dialog show={dialog} onShowChange={setDialog} instant keyboard={false} backdrop={false} />
      <Drawer show={drawer} onShowChange={setDrawer} />
    </>
  );
}

test('Dialog and Drawer share scroll locks and clean up in Strict Mode', async () => {
  const screen = await render(
    <StrictMode>
      <LocksExample />
    </StrictMode>,
  );
  const dialog = document.querySelector<HTMLDialogElement>('dialog.dialog')!;
  expect(dialog.open).toBe(true);
  expect(getComputedStyle(dialog, '::backdrop').backgroundColor).toBe('rgba(0, 0, 0, 0)');
  dialog.dispatchEvent(new Event('cancel', { cancelable: true }));
  expect(dialog.open).toBe(true);
  screen
    .getByText('Hide dialog')
    .element()
    .dispatchEvent(new MouseEvent('click', { bubbles: true }));
  await expect.poll(() => dialog.open).toBe(false);
  expect(document.documentElement).toHaveClass('dialog-open');
  await screen.unmount();
  expect(document.documentElement).not.toHaveClass('dialog-open');
});

function ControlledExample() {
  const [show, setShow] = useState(true);
  return (
    <>
      <button onClick={() => setShow(false)}>Hide</button>
      <button aria-expanded={show} onClick={() => setShow(true)}>
        Show
      </button>
      <Dialog show={show} onShowChange={setShow} aria-label='Controlled dialog'>
        Dialog content
      </Dialog>
    </>
  );
}

test('closing transition is cancelled when a dialog reopens', async () => {
  const screen = await render(<ControlledExample />);
  const dialog = screen
    .getByRole('dialog', { name: 'Controlled dialog' })
    .element() as HTMLDialogElement;
  screen
    .getByText('Hide', { exact: true })
    .element()
    .dispatchEvent(new MouseEvent('click', { bubbles: true }));
  await expect.poll(() => dialog.classList.contains('hiding')).toBe(true);
  expect(dialog.open).toBe(true);
  expect(document.documentElement).toHaveClass('dialog-open');
  screen
    .getByText('Show', { exact: true })
    .element()
    .dispatchEvent(new MouseEvent('click', { bubbles: true }));
  await expect.poll(() => dialog.classList.contains('hiding')).toBe(false);
  await new Promise((resolve) => setTimeout(resolve, 400));
  expect(dialog.open).toBe(true);
  expect(document.documentElement).toHaveClass('dialog-open');
  const rect = dialog.getBoundingClientRect();
  dialog.dispatchEvent(
    new MouseEvent('click', { bubbles: true, clientX: rect.left - 10, clientY: rect.top - 10 }),
  );
  await expect.poll(() => dialog.open).toBe(false);
  expect(document.documentElement).not.toHaveClass('dialog-open');
});

test('native close synchronizes controlled state', async () => {
  const screen = await render(<ControlledExample />);
  const dialog = screen
    .getByRole('dialog', { name: 'Controlled dialog' })
    .element() as HTMLDialogElement;
  dialog.close();
  await expect.poll(() => dialog.open).toBe(false);
  await expect
    .element(screen.getByRole('button', { name: 'Show' }))
    .toHaveAttribute('aria-expanded', 'false');
  await expect.poll(() => document.documentElement.classList.contains('dialog-open')).toBe(false);
});

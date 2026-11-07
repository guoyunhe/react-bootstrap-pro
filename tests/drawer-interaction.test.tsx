import 'bootstrap/dist/css/bootstrap.css';
import { useState } from 'react';
import { expect, test } from 'vitest';
import { render } from 'vitest-browser-react';

import { DrawerBodyScrollingDemo } from '../docs/components/drawer/demos/body-scrolling';
import { DrawerBodyScrollingBackdropDemo } from '../docs/components/drawer/demos/body-scrolling-backdrop';
import { DrawerDarkDemo } from '../docs/components/drawer/demos/dark';
import { DrawerFooterDemo } from '../docs/components/drawer/demos/footer';
import { DrawerInstantDemo } from '../docs/components/drawer/demos/instant';
import { DrawerLiveDemo } from '../docs/components/drawer/demos/live';
import { DrawerPlacementBottomDemo } from '../docs/components/drawer/demos/placement-bottom';
import { DrawerPlacementEndDemo } from '../docs/components/drawer/demos/placement-end';
import { DrawerPlacementFullscreenDemo } from '../docs/components/drawer/demos/placement-fullscreen';
import { DrawerPlacementTopDemo } from '../docs/components/drawer/demos/placement-top';
import { DrawerResponsiveDemo } from '../docs/components/drawer/demos/responsive';
import { DrawerSheetDemo } from '../docs/components/drawer/demos/sheet';
import { DrawerStaticBackdropDemo } from '../docs/components/drawer/demos/static-backdrop';
import { DrawerTranslucentDemo } from '../docs/components/drawer/demos/translucent';
import { Drawer } from '../src';

test('live demo opens and closes without the Bootstrap JavaScript plugin', async () => {
  const screen = await render(<DrawerLiveDemo />);
  const trigger = screen.getByRole('button', { name: 'Open drawer' });
  await trigger.click();
  const dialog = screen.getByRole('dialog', { name: 'Drawer' });
  await expect.element(dialog).toBeVisible();
  expect(dialog.element().matches(':modal')).toBe(true);
  expect(trigger).toHaveAttribute('aria-expanded', 'true');
  await screen.getByRole('button', { name: 'Close' }).click();
  await expect.element(trigger).toHaveAttribute('aria-expanded', 'false');
  await expect.element(trigger).toHaveFocus();
});

test('scrolling demos use the expected modal and scroll-lock modes', async () => {
  const screen = await render(
    <>
      <DrawerBodyScrollingDemo />
      <DrawerBodyScrollingBackdropDemo />
    </>,
  );
  await screen.getByRole('button', { name: 'Enable body scrolling', exact: true }).click();
  const nonmodal = document.querySelector<HTMLDialogElement>('#drawer-body-scrolling')!;
  expect(nonmodal.open).toBe(true);
  expect(nonmodal.matches(':modal')).toBe(false);
  expect(document.documentElement).not.toHaveClass('dialog-open');
  await screen.getByRole('button', { name: 'Close' }).click();

  await screen.getByRole('button', { name: 'Enable body scrolling and backdrop' }).click();
  const modal = document.querySelector<HTMLDialogElement>('#drawer-body-scrolling-backdrop')!;
  expect(modal.open).toBe(true);
  expect(modal.matches(':modal')).toBe(true);
  expect(document.documentElement).not.toHaveClass('dialog-open');
});

test('static backdrop ignores outside clicks but Escape closes', async () => {
  const screen = await render(<DrawerStaticBackdropDemo />);
  await screen.getByRole('button', { name: 'Toggle static drawer' }).click();
  const dialog = document.querySelector<HTMLDialogElement>('#drawer-static-backdrop')!;
  const rect = dialog.getBoundingClientRect();
  dialog.dispatchEvent(
    new MouseEvent('click', { bubbles: true, clientX: rect.left - 10, clientY: rect.top - 10 }),
  );
  expect(dialog.open).toBe(true);
  dialog.dispatchEvent(new Event('cancel', { cancelable: true }));
  await expect.poll(() => dialog.open).toBe(false);
});

test.each([
  [DrawerDarkDemo, 'Open dark drawer'],
  [DrawerFooterDemo, 'Open drawer with footer'],
  [DrawerInstantDemo, 'Toggle instant drawer'],
  [DrawerPlacementBottomDemo, 'Toggle bottom drawer'],
  [DrawerPlacementEndDemo, 'Toggle right drawer'],
  [DrawerPlacementFullscreenDemo, 'Toggle fullscreen drawer'],
  [DrawerPlacementTopDemo, 'Toggle top drawer'],
  [DrawerResponsiveDemo, 'Toggle drawer'],
  [DrawerSheetDemo, 'Toggle sheet drawer'],
  [DrawerTranslucentDemo, 'Toggle translucent drawer'],
])('demo opens and closes with React state: %s', async (Demo, name) => {
  const screen = await render(
    <div style={{ width: 400 }}>
      <Demo />
    </div>,
  );
  const trigger = screen.getByRole('button', { name });
  const id = trigger.element().getAttribute('aria-controls')!;
  await trigger.click();
  const dialog = document.getElementById(id) as HTMLDialogElement;
  await expect.poll(() => dialog.open).toBe(true);
  expect(trigger).toHaveAttribute('aria-expanded', 'true');
  await screen.getByRole('button', { name: 'Close', exact: true }).first().click();
  await expect.poll(() => dialog.open).toBe(false);
  expect(trigger).toHaveAttribute('aria-expanded', 'false');
});

function Example() {
  const [first, setFirst] = useState(true);
  const [second, setSecond] = useState(true);
  const [scroll, setScroll] = useState(false);
  return (
    <>
      <button type='button' onClick={() => setFirst(false)}>
        Close first
      </button>
      <button type='button' onClick={() => setSecond(false)}>
        Close second
      </button>
      <button type='button' onClick={() => setScroll(true)}>
        Enable scroll
      </button>
      <Drawer id='first' show={first} onShowChange={setFirst} keyboard={false} backdrop={false} />
      <Drawer id='second' show={second} onShowChange={setSecond} scroll={scroll} />
    </>
  );
}

test('keyboard and backdrop settings and multiple scroll locks update safely', async () => {
  const screen = await render(<Example />);
  const first = document.querySelector<HTMLDialogElement>('#first')!;
  const second = document.querySelector<HTMLDialogElement>('#second')!;
  expect(first.matches(':modal')).toBe(true);
  expect(getComputedStyle(first, '::backdrop').backgroundColor).toBe('rgba(0, 0, 0, 0)');
  first.dispatchEvent(new Event('cancel', { cancelable: true }));
  expect(first.open).toBe(true);
  expect(document.documentElement).toHaveClass('dialog-open');
  screen
    .getByText('Close first')
    .element()
    .dispatchEvent(new MouseEvent('click', { bubbles: true }));
  await expect.poll(() => first.open).toBe(false);
  expect(document.documentElement).toHaveClass('dialog-open');
  screen
    .getByText('Enable scroll')
    .element()
    .dispatchEvent(new MouseEvent('click', { bubbles: true }));
  await expect.poll(() => document.documentElement.classList.contains('dialog-open')).toBe(false);
  expect(second.matches(':modal')).toBe(true);
  screen
    .getByText('Close second')
    .element()
    .dispatchEvent(new MouseEvent('click', { bubbles: true }));
  await expect.poll(() => second.open).toBe(false);
  await screen.unmount();
  expect(document.documentElement).not.toHaveClass('dialog-open');
});

import 'bootstrap/dist/css/bootstrap.css';
import { StrictMode } from 'react';
import { expect, test } from 'vitest';
import { render } from 'vitest-browser-react';

import { NavOverflowDemo } from '../docs/components/nav/demos/overflow';
import { NavbarBasicDemo } from '../docs/components/navbar/demos/basic';
import { NavbarDrawerTopDemo } from '../docs/components/navbar/demos/drawer-top';
import { NavbarExternalContentDemo } from '../docs/components/navbar/demos/external-content';
import { NavbarNavMenuDemo } from '../docs/components/navbar/demos/nav-menu';
import { Drawer, Navbar, NavbarToggler } from '../src';

test('navbar toggler matches Bootstrap icon button markup and computed styling', async () => {
  const screen = await render(
    <Navbar>
      <NavbarToggler data-testid='toggler' />
      <button className='btn-icon navbar-toggler' type='button' aria-label='Reference'>
        <span className='navbar-toggler-icon' aria-hidden='true' />
      </button>
    </Navbar>,
  );
  const toggler = screen.getByTestId('toggler').element();
  const reference = screen.getByRole('button', { name: 'Reference' }).element();
  const icon = toggler.querySelector('.navbar-toggler-icon');
  expect(toggler).toHaveClass('btn-icon', 'navbar-toggler');
  expect(toggler).toHaveAttribute('type', 'button');
  expect(toggler).toHaveAttribute('aria-label', 'Toggle navigation');
  expect(icon).toHaveAttribute('aria-hidden', 'true');
  expect(icon?.tagName).toBe('SPAN');
  const actual = getComputedStyle(toggler);
  const expected = getComputedStyle(reference);
  for (const property of [
    'display',
    'width',
    'height',
    'padding',
    'border',
    'background-color',
    'align-items',
    'justify-content',
    'aspect-ratio',
  ]) {
    expect(actual.getPropertyValue(property), property).toBe(expected.getPropertyValue(property));
  }
  expect(actual.aspectRatio).toBe('1 / 1');
  expect(toggler.getBoundingClientRect().width).toBeGreaterThan(0);
  expect(toggler.getBoundingClientRect().width).toBeCloseTo(
    toggler.getBoundingClientRect().height,
    1,
  );
});

test('navbar toggler preserves custom content, attributes and classes', async () => {
  const screen = await render(
    <NavbarToggler
      type='submit'
      aria-label='Open menu'
      aria-controls='navigation'
      classNameBefore='before'
      className='custom'
    >
      Menu
    </NavbarToggler>,
  );
  const button = screen.getByRole('button', { name: 'Open menu' });
  expect(button).toHaveClass('btn-icon', 'navbar-toggler', 'before', 'custom');
  expect(button).toHaveAttribute('type', 'submit');
  expect(button).toHaveAttribute('aria-controls', 'navigation');
  expect(button.element().textContent).toBe('Menu');
  expect(button.element().querySelector('.navbar-toggler-icon')).toBeNull();
});

test('basic demo opens the drawer, opens its React menu, and closes the drawer', async () => {
  const screen = await render(
    <div style={{ width: 400 }}>
      <NavbarBasicDemo />
    </div>,
  );
  const toggler = screen.getByRole('button', { name: 'Toggle navigation' });
  await expect.element(toggler).toBeVisible();
  await toggler.click();
  const dialog = screen.getByRole('dialog', { name: 'Menu' });
  await expect.element(dialog).toBeVisible();
  const dialogElement = dialog.element();
  expect(dialog.element().matches(':modal')).toBe(true);
  const menu = screen.getByRole('button', { name: 'Menu' });
  await menu.click();
  await expect.element(screen.getByRole('link', { name: 'Action' })).toBeVisible();
  await screen.getByRole('button', { name: 'Close' }).click();
  await expect.poll(() => dialogElement.hasAttribute('open')).toBe(false);
  await expect.element(toggler).toBeVisible();
});

test('navbar expands by container width and closes an open responsive drawer', async () => {
  const screen = await render(
    <div data-testid='host' style={{ width: 400 }}>
      <NavbarNavMenuDemo />
    </div>,
  );
  const host = screen.getByTestId('host').element();
  const toggler = screen.getByRole('button', { name: 'Toggle navigation' });
  const toggleElement = toggler.element();
  const dialog = host.querySelector('dialog')!;
  await toggler.click();
  await expect.poll(() => dialog.open).toBe(true);
  host.style.width = '1200px';
  await expect.poll(() => dialog.open).toBe(false);
  await expect.poll(() => getComputedStyle(toggleElement).display).toBe('none');
  await expect.element(screen.getByRole('link', { name: 'Features' })).toBeVisible();
  await screen.getByRole('button', { name: 'Menu link' }).click();
  await expect.element(screen.getByRole('link', { name: 'Action' })).toBeVisible();
});

test('external drawer and multiple instances have unique targets and clean up on unmount', async () => {
  const screen = await render(
    <>
      <NavbarExternalContentDemo />
      <NavbarExternalContentDemo />
      <NavbarDrawerTopDemo />
    </>,
  );
  const buttons = Array.from(document.querySelectorAll<HTMLButtonElement>('.navbar-toggler'));
  expect(new Set(buttons.map((button) => button.getAttribute('aria-controls'))).size).toBe(3);
  const id = buttons[0]!.getAttribute('aria-controls')!;
  buttons[0]!.click();
  const dialog = document.getElementById(id) as HTMLDialogElement;
  await expect.poll(() => dialog.open).toBe(true);
  expect(dialog.matches(':modal')).toBe(true);
  await screen.unmount();
  expect(document.querySelector('dialog[open]:modal')).toBeNull();
  expect(document.documentElement).not.toHaveClass('dialog-open');
});

test('controlled drawer closes on Escape and backdrop click, restoring the toggler state', async () => {
  const screen = await render(<NavbarExternalContentDemo />);
  const toggle = screen.getByRole('button', { name: 'Toggle navigation' });
  await toggle.click();
  const dialog = document.getElementById(toggle.element().getAttribute('aria-controls')!)!;
  expect(toggle).toHaveAttribute('aria-expanded', 'true');
  dialog.dispatchEvent(new Event('cancel', { bubbles: false, cancelable: true }));
  await expect.poll(() => dialog.hasAttribute('open')).toBe(false);
  expect(toggle).toHaveAttribute('aria-expanded', 'false');
  await expect.element(toggle).toHaveFocus();

  await toggle.click();
  await expect.poll(() => dialog.hasAttribute('open')).toBe(true);
  const rect = dialog.getBoundingClientRect();
  dialog.dispatchEvent(
    new MouseEvent('click', { bubbles: true, clientX: rect.left - 10, clientY: rect.top - 10 }),
  );
  await expect.poll(() => dialog.hasAttribute('open')).toBe(false);
  expect(document.documentElement).not.toHaveClass('dialog-open');
});

test('native close synchronizes state and releases the scroll lock', async () => {
  const screen = await render(<NavbarExternalContentDemo />);
  const toggle = screen.getByRole('button', { name: 'Toggle navigation' });
  await toggle.click();
  const dialog = document.getElementById(toggle.element().getAttribute('aria-controls')!);
  expect(dialog).toBeInstanceOf(HTMLDialogElement);
  (dialog as HTMLDialogElement).close();
  await expect.element(toggle).toHaveAttribute('aria-expanded', 'false');
  expect(document.documentElement).not.toHaveClass('dialog-open');
});

test('an initially open controlled drawer remains open in Strict Mode', async () => {
  const screen = await render(
    <StrictMode>
      <Drawer show onShowChange={() => {}} aria-label='Strict drawer' />
    </StrictMode>,
  );
  const dialog = screen.getByRole('dialog', { name: 'Strict drawer' });
  await expect.element(dialog).toBeVisible();
  await expect.poll(() => dialog.element().matches(':modal')).toBe(true);
  await screen.unmount();
  expect(document.documentElement).not.toHaveClass('dialog-open');
});

test('React nav overflow coexists with navbar demos', async () => {
  const screen = await render(<NavOverflowDemo />);
  const toggle = screen.getByRole('button', { name: 'More' });
  await expect.element(toggle).toBeVisible();
  const wrapper = toggle.element().closest('.nav-overflow')!;
  expect(wrapper.querySelectorAll('.nav-overflow-toggle')).toHaveLength(1);
  expect(wrapper).not.toHaveAttribute('data-bs-toggle');
  await toggle.click();
  await expect.element(screen.getByRole('link', { name: 'Settings' })).toBeVisible();
  expect(toggle).toHaveAttribute('aria-expanded', 'true');
  await toggle.click();
  expect(toggle).toHaveAttribute('aria-expanded', 'false');
  expect(wrapper.querySelectorAll('.nav-overflow-toggle')).toHaveLength(1);
});

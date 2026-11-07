import 'bootstrap/dist/css/bootstrap.css';
import { expect, test } from 'vitest';
import { render } from 'vitest-browser-react';

import { MenuAutoCloseDemo } from '../docs/components/menu/demos/auto-close';
import { MenuBasicDemo } from '../docs/components/menu/demos/basic';
import { MenuDisabledDemo } from '../docs/components/menu/demos/disabled';
import { MenuFormsDemo } from '../docs/components/menu/demos/forms';
import { MenuPlacementDemo } from '../docs/components/menu/demos/placement';
import { MenuScrollingDemo } from '../docs/components/menu/demos/scrolling';
import { MenuSelectedDemo } from '../docs/components/menu/demos/selected';
import { MenuSubmenusDemo } from '../docs/components/menu/demos/submenus';

test('menu opens, navigates and closes with Escape', async () => {
  const screen = await render(<MenuBasicDemo />);
  const toggle = screen.getByRole('button', { name: 'Toggle menu' });
  await toggle.click();
  await expect.element(toggle).toHaveAttribute('aria-expanded', 'true');
  const menu = screen.container.querySelector('.menu')!;
  expect(menu).toHaveClass('show');
  toggle.element().dispatchEvent(new KeyboardEvent('keydown', { key: 'ArrowDown', bubbles: true }));
  await expect.poll(() => document.activeElement?.textContent).toBe('Menu item 1');
  document.activeElement?.dispatchEvent(
    new KeyboardEvent('keydown', { key: 'Escape', bubbles: true }),
  );
  await expect.element(toggle).toHaveAttribute('aria-expanded', 'false');
  expect(document.activeElement).toBe(toggle.element());
});

test('submenu opens and exposes its state', async () => {
  const screen = await render(<MenuSubmenusDemo />);
  await screen.getByRole('button', { name: 'Submenus' }).click();
  const file = screen.getByRole('button', { name: 'File' });
  await expect.element(file).toHaveAttribute('aria-expanded', 'false');
  file.element().focus();
  file.element().dispatchEvent(new KeyboardEvent('keydown', { key: 'ArrowRight', bubbles: true }));
  await expect.element(file).toHaveAttribute('aria-expanded', 'true');
  await expect
    .poll(() => file.element().parentElement?.querySelector('.menu')?.classList.contains('show'))
    .toBe(true);
});

test('selected items update their state independently of plugin visibility', async () => {
  const screen = await render(<MenuSelectedDemo />);
  await screen.getByRole('button', { name: 'Select status: Published' }).click();
  await screen.getByRole('button', { name: /Draft/ }).click();
  expect(screen.getByRole('button', { name: 'Select status: Draft' })).toBeVisible();
  await screen.getByRole('button', { name: 'Select status: Draft' }).click();
  expect(screen.getByRole('button', { name: 'Draft Not yet published' })).toHaveAttribute(
    'aria-pressed',
    'true',
  );
});

test('static menus preserve disabled links, labels and scroll limits', async () => {
  const screen = await render(
    <>
      <MenuDisabledDemo />
      <MenuFormsDemo />
      <MenuScrollingDemo />
    </>,
  );
  const disabled = screen.getByText('Disabled link');
  expect(disabled).toHaveAttribute('aria-disabled', 'true');
  expect(disabled).not.toHaveAttribute('href');
  expect(screen.getByLabelText('Email address')).toHaveAttribute('type', 'email');
  expect(screen.getByLabelText('Remember me')).toHaveAttribute('type', 'checkbox');
  const scrolling = screen.container.querySelector<HTMLElement>('[style*="--bs-menu-max-height"]')!;
  expect(getComputedStyle(scrolling).maxHeight).toBe('145px');
  expect(getComputedStyle(scrolling).overflowY).toBe('auto');
  expect(scrolling.scrollHeight).toBeGreaterThan(scrolling.clientHeight);
});

test('placement and auto-close examples configure the menu', async () => {
  const screen = await render(
    <>
      <MenuPlacementDemo />
      <MenuAutoCloseDemo />
    </>,
  );
  await screen.getByLabelText('Placement').selectOptions('top-end');
  const updatedToggle = screen.getByRole('button', { name: 'Toggle menu' });
  await updatedToggle.click();
  await expect.element(updatedToggle).toHaveAttribute('aria-expanded', 'true');
  const placementMenu = updatedToggle.element().parentElement?.querySelector<HTMLElement>('.menu');
  expect(placementMenu).toBeTruthy();
  await expect
    .element(placementMenu ?? null)
    .toHaveAttribute('data-bs-placement', expect.stringMatching(/^(top|bottom)-(start|end)$/));
  const manual = screen.getByRole('button', { name: 'Manual close' });
  await manual.click();
  await expect.element(manual).toHaveAttribute('aria-expanded', 'true');
  const menu = manual.element().nextElementSibling!;
  (menu.querySelector('button') as HTMLButtonElement).click();
  expect(manual).toHaveAttribute('aria-expanded', 'true');
  await manual.click();
  await expect.element(manual).toHaveAttribute('aria-expanded', 'false');
});

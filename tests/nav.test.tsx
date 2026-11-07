import 'bootstrap/dist/css/bootstrap.css';
import { expect, test } from 'vitest';
import { render } from 'vitest-browser-react';

import { NavMenuDemo } from '../docs/components/nav/demos/menu';
import { NavOverflowDemo } from '../docs/components/nav/demos/overflow';
import { NavOverflowCollapseDemo } from '../docs/components/nav/demos/overflow-collapse';
import { NavOverflowDisabledDemo } from '../docs/components/nav/demos/overflow-disabled';
import { NavOverflowKeepDemo } from '../docs/components/nav/demos/overflow-keep';
import { NavOverflowNavbarDemo } from '../docs/components/nav/demos/overflow-navbar';
import { NavOverflowOptionsDemo } from '../docs/components/nav/demos/overflow-options';
import { NavResponsiveDemo } from '../docs/components/nav/demos/responsive';
import { Nav, NavLink, NavOverflow } from '../src';

test('renders nav variants and marks the active link', async () => {
  const screen = await render(
    <Nav variant='pills' data-testid='nav'>
      <NavLink active href='/current'>
        Current
      </NavLink>
    </Nav>,
  );

  expect(screen.getByTestId('nav')).toHaveClass('nav', 'nav-pills');
  expect(screen.getByRole('link', { name: 'Current' })).toHaveAttribute('aria-current', 'page');
});

test('nav menu demo opens and closes its React menu', async () => {
  const screen = await render(<NavMenuDemo />);
  const trigger = screen.getByRole('button', { name: 'Menu' });
  await trigger.click();
  await expect.element(screen.getByRole('link', { name: 'Action' })).toBeVisible();
  expect(trigger).toHaveAttribute('aria-expanded', 'true');
  await trigger.click();
  await expect.element(screen.getByRole('link', { name: 'Action' })).not.toBeInTheDocument();
});

test('responsive example applies the base and small breakpoint utilities', async () => {
  const screen = await render(<NavResponsiveDemo />);
  expect(screen.getByRole('navigation')).toHaveClass('flex-column', 'sm:flex-row');
  expect(screen.getByRole('link', { name: 'Active' })).toHaveClass(
    'sm:flex-fill',
    'sm:text-center',
  );
});

test('overflow demo measures the container and opens the generated menu', async () => {
  const screen = await render(<NavOverflowDemo />);
  const toggle = screen.getByRole('button', { name: 'More' });
  await expect.element(toggle).toBeVisible();
  await toggle.click();
  const item = screen.getByRole('link', { name: 'Settings' });
  await expect.element(item).toBeVisible();
  expect(item).toHaveAttribute('href', '#');

  const wrapper = toggle.element().closest<HTMLElement>('.nav-overflow')!;
  const overflowItem = toggle.element().closest('li')!;
  wrapper.style.maxWidth = '1200px';
  wrapper.style.width = '1200px';
  await expect.poll(() => getComputedStyle(overflowItem).display).toBe('none');
  await expect.element(screen.getByRole('link', { name: 'Settings' })).toBeVisible();
});

test('Bootstrap hides an uninitialized overflow navigation', async () => {
  const screen = await render(
    <NavOverflow data-testid='uninitialized'>
      <Nav>
        <li>
          <NavLink href='#'>Link</NavLink>
        </li>
      </Nav>
    </NavOverflow>,
  );
  const nav = screen.getByTestId('uninitialized').element().querySelector('ul')!;
  expect(getComputedStyle(nav).visibility).toBe('hidden');
});

test('overflow preserves kept and disabled items', async () => {
  const kept = await render(<NavOverflowKeepDemo />);
  await expect.element(kept.getByRole('button', { name: 'More' })).toBeVisible();
  await expect.element(kept.getByRole('link', { name: 'Home' })).toBeVisible();
  await expect.element(kept.getByRole('link', { name: 'Contact' })).toBeVisible();
  await kept.unmount();

  const disabled = await render(<NavOverflowDisabledDemo />);
  await disabled.getByRole('button', { name: 'More' }).click();
  const menu = document.querySelector('.nav-overflow-menu')!;
  const item = menu.querySelector('.disabled')!;
  expect(item).toHaveAttribute('aria-disabled', 'true');
  expect(item).not.toHaveAttribute('href');
});

test('overflow collapse threshold moves every item into the menu', async () => {
  const screen = await render(<NavOverflowCollapseDemo />);
  const toggle = screen.getByRole('button', { name: 'More' });
  await expect.element(toggle).toBeVisible();
  const nav = toggle.element().closest('ul')!;
  expect(nav.querySelectorAll('[data-bs-nav-overflow="true"]')).toHaveLength(3);
  await toggle.click();
  await expect.element(screen.getByRole('link', { name: 'Products' })).toBeVisible();
});

test('navbar and customized overflow toggles open their menus', async () => {
  const navbar = await render(<NavOverflowNavbarDemo />);
  const navbarToggle = navbar.getByRole('button', { name: 'More' });
  await expect.element(navbarToggle).toBeVisible();
  await navbarToggle.click();
  await expect.element(navbar.getByRole('link', { name: 'Contact' })).toBeVisible();
  await navbar.unmount();

  const options = await render(<NavOverflowOptionsDemo />);
  const toggle = options.getByRole('button', { name: 'See all' });
  await expect.element(toggle).toBeVisible();
  const nav = toggle.element().closest('ul')!;
  expect(nav.querySelectorAll('[data-bs-nav-overflow="true"]').length).toBeLessThanOrEqual(3);
  expect(toggle.element().lastElementChild).toHaveClass('nav-overflow-icon');
  await toggle.click();
  await expect.element(options.getByRole('link', { name: 'Contact' })).toBeVisible();
});

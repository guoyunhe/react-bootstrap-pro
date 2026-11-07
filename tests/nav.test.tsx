import 'bootstrap/dist/css/bootstrap.css';
import { useState } from 'react';
import { renderToStaticMarkup } from 'react-dom/server';
import { expect, test, vi } from 'vitest';
import { render } from 'vitest-browser-react';

import { NavMenuDemo } from '../docs/components/nav/demos/menu';
import { NavOverflowDemo } from '../docs/components/nav/demos/overflow';
import { NavOverflowCollapseDemo } from '../docs/components/nav/demos/overflow-collapse';
import { NavOverflowDisabledDemo } from '../docs/components/nav/demos/overflow-disabled';
import { NavOverflowKeepDemo } from '../docs/components/nav/demos/overflow-keep';
import { NavOverflowNavbarDemo } from '../docs/components/nav/demos/overflow-navbar';
import { NavOverflowOptionsDemo } from '../docs/components/nav/demos/overflow-options';
import { NavResponsiveDemo } from '../docs/components/nav/demos/responsive';
import { Nav, NavItem, NavLink, NavOverflow } from '../src';

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
  await expect.poll(() => getComputedStyle(overflowItem).visibility).toBe('hidden');
  await expect.element(screen.getByRole('link', { name: 'Settings' })).toBeVisible();
});

test('server markup exposes wrapped navigation without JavaScript', () => {
  const html = renderToStaticMarkup(
    <NavOverflow>
      <Nav>
        <NavItem>
          <NavLink href='/'>Link</NavLink>
        </NavItem>
      </Nav>
    </NavOverflow>,
  );
  expect(html).toContain('nav-overflow-initialized');
  expect(html).toContain('flex-wrap:wrap');
  expect(html).not.toContain('data-bs-toggle');
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
  expect(nav.querySelectorAll('[data-rbp-overflow-index][aria-hidden="true"]')).toHaveLength(3);
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
  expect(
    nav.querySelectorAll('[data-rbp-overflow-index][aria-hidden="true"]').length,
  ).toBeLessThanOrEqual(3);
  expect(toggle.element().lastElementChild).toHaveClass('nav-overflow-icon');
  await toggle.click();
  await expect.element(options.getByRole('link', { name: 'Contact' })).toBeVisible();
});

test('overflow preserves handlers and the original mounted item across resizing', async () => {
  const clicked = vi.fn();
  const mounts = vi.fn();
  function StatefulLabel() {
    const [value] = useState(() => {
      mounts();
      return 'Stateful';
    });
    return <span>{value}</span>;
  }
  const screen = await render(
    <NavOverflow style={{ width: 120 }} data-testid='wrapper'>
      <Nav>
        <NavItem className='nav-overflow-keep'>
          <NavLink href='#'>Home</NavLink>
        </NavItem>
        <NavItem>
          <NavLink
            href='#'
            onClick={(event) => {
              event.preventDefault();
              clicked();
            }}
          >
            <StatefulLabel />
          </NavLink>
        </NavItem>
      </Nav>
    </NavOverflow>,
  );
  const wrapper = screen.getByTestId('wrapper').element() as HTMLElement;
  const original = wrapper.querySelectorAll('[data-rbp-overflow-index]')[1]!;
  await expect.element(screen.getByRole('button', { name: 'More' })).toBeVisible();
  await screen.getByRole('button', { name: 'More' }).click();
  await screen.getByRole('link', { name: 'Stateful' }).click();
  expect(clicked).toHaveBeenCalledOnce();
  wrapper.style.width = '700px';
  await expect.element(screen.getByRole('link', { name: 'Stateful' })).toBeVisible();
  expect(wrapper.querySelectorAll('[data-rbp-overflow-index]')[1]).toBe(original);
  expect(mounts).toHaveBeenCalledTimes(2); // original plus temporary menu copy
});

test('overflow menu supports keyboard opening and Escape', async () => {
  const screen = await render(<NavOverflowDemo />);
  const trigger = screen.getByRole('button', { name: 'More' });
  (trigger.element() as HTMLElement).focus();
  trigger
    .element()
    .dispatchEvent(
      new KeyboardEvent('keydown', { key: 'ArrowDown', bubbles: true, cancelable: true }),
    );
  await expect.element(screen.getByRole('link', { name: 'Services' })).toBeVisible();
  await expect.poll(() => document.activeElement?.classList.contains('menu-item')).toBe(true);
  document.activeElement?.dispatchEvent(
    new KeyboardEvent('keydown', { key: 'Escape', bubbles: true, cancelable: true }),
  );
  await expect.element(trigger).toHaveFocus();
  expect(trigger).toHaveAttribute('aria-expanded', 'false');
});

function DynamicNav() {
  const [expanded, setExpanded] = useState(false);
  return (
    <>
      <button type='button' onClick={() => setExpanded(true)}>
        Add item
      </button>
      <NavOverflow style={{ width: 180 }} moreText={expanded ? 'See everything' : 'More'}>
        <Nav>
          <NavItem key='home'>
            <NavLink href='#'>Home</NavLink>
          </NavItem>
          {expanded && (
            <NavItem key='reports'>
              <NavLink href='#'>Reports and statistics</NavLink>
            </NavItem>
          )}
        </Nav>
      </NavOverflow>
    </>
  );
}

test('changing children and toggle text recalculates the overflow', async () => {
  const screen = await render(<DynamicNav />);
  await screen.getByRole('button', { name: 'Add item' }).click();
  const toggle = screen.getByRole('button', { name: 'See everything' });
  await expect.element(toggle).toBeVisible();
  await toggle.click();
  await expect.element(screen.getByRole('link', { name: 'Reports and statistics' })).toBeVisible();
});

test('disabled overflow links cannot activate their handlers', async () => {
  const click = vi.fn();
  const screen = await render(
    <NavOverflow
      style={{ width: 100 }}
      collapseBelow={200}
      moreText=''
      moreLabel='Additional navigation'
      data-bs-toggle='nav-overflow'
    >
      <Nav>
        <NavItem>
          <NavLink href='#disabled' disabled onClick={click}>
            Disabled destination
          </NavLink>
        </NavItem>
      </Nav>
    </NavOverflow>,
  );
  const toggle = screen.getByRole('button', { name: 'Additional navigation' });
  await expect.element(toggle).toBeVisible();
  expect(toggle.element().closest('.nav-overflow')).not.toHaveAttribute('data-bs-toggle');
  await toggle.click();
  const disabled = document.querySelector<HTMLElement>('.nav-overflow-menu .menu-item')!;
  expect(disabled).not.toHaveAttribute('href');
  disabled.click();
  expect(click).not.toHaveBeenCalled();
});

test('window resize is used when ResizeObserver is unavailable', async () => {
  vi.stubGlobal('ResizeObserver', undefined);
  try {
    const screen = await render(<NavOverflowDemo />);
    const toggle = screen.getByRole('button', { name: 'More' });
    await expect.element(toggle).toBeVisible();
    const wrapper = toggle.element().closest<HTMLElement>('.nav-overflow')!;
    wrapper.style.maxWidth = '1200px';
    wrapper.style.width = '1200px';
    window.dispatchEvent(new Event('resize'));
    await expect.element(screen.getByRole('link', { name: 'Settings' })).toBeVisible();
    await screen.unmount();
  } finally {
    vi.unstubAllGlobals();
  }
});

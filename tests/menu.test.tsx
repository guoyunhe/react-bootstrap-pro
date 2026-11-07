import 'bootstrap/dist/css/bootstrap.css';
import { useState } from 'react';
import { BiClipboard } from 'react-bootstrap-icons-pro';
import { expect, test, vi } from 'vitest';
import { render } from 'vitest-browser-react';

import { MenuIconsDemo } from '../docs/components/menu/demos/icons';
import {
  Button,
  Combobox,
  Menu,
  MenuItem,
  MenuItemContent,
  MenuItemDescription,
  MenuItemIcon,
} from '../src';

test('menu icon demo renders decorative child icons at the intended size', async () => {
  const screen = await render(<MenuIconsDemo />);
  for (const name of ['Copy', 'Cut', 'Delete']) {
    const button = screen.getByRole('button', { name }).element();
    const wrapper = button.querySelector<HTMLElement>('.menu-item-icon');
    const icon = wrapper?.querySelector('svg');
    expect(wrapper?.tagName).toBe('SPAN');
    expect(wrapper).toHaveAttribute('aria-hidden', 'true');
    expect(icon).toBeTruthy();
    expect(getComputedStyle(wrapper!).width).toBe('16px');
    expect(getComputedStyle(icon!).width).toBe('16px');
  }
});

test('wrapped menu icons align like direct SVG icons for single and multi-line items', async () => {
  const screen = await render(
    <Menu show position='static'>
      {[false, true].map((withDescription) => (
        <div key={String(withDescription)}>
          <MenuItem component='button' data-testid={`direct-${withDescription}`}>
            <MenuItemIcon component={BiClipboard} aria-hidden='true' />
            <MenuItemContent>
              Label
              {withDescription && <MenuItemDescription>Description</MenuItemDescription>}
            </MenuItemContent>
          </MenuItem>
          <MenuItem component='button' data-testid={`wrapped-${withDescription}`}>
            <MenuItemIcon aria-hidden='true'>
              <BiClipboard size='1rem' />
            </MenuItemIcon>
            <MenuItemContent>
              Label
              {withDescription && <MenuItemDescription>Description</MenuItemDescription>}
            </MenuItemContent>
          </MenuItem>
        </div>
      ))}
    </Menu>,
  );
  for (const withDescription of [false, true]) {
    const direct = screen.getByTestId(`direct-${withDescription}`).element();
    const wrapped = screen.getByTestId(`wrapped-${withDescription}`).element();
    const directIcon = direct.querySelector('svg')!;
    const wrappedIcon = wrapped.querySelector('svg')!;
    const directOffset =
      directIcon.getBoundingClientRect().top - direct.getBoundingClientRect().top;
    const wrappedOffset =
      wrappedIcon.getBoundingClientRect().top - wrapped.getBoundingClientRect().top;
    expect(Math.abs(wrappedOffset - directOffset)).toBeLessThan(1);
    expect(wrappedIcon.getBoundingClientRect().height).toBeCloseTo(
      directIcon.getBoundingClientRect().height,
      1,
    );
  }
});

test('menu item icons support default and SVG elements with Box props', async () => {
  const screen = await render(
    <Menu show position='static'>
      <MenuItem component='button'>
        <MenuItemIcon
          data-testid='wrapper'
          className='custom'
          classNameBefore='before'
          aria-hidden='true'
        >
          Icon
        </MenuItemIcon>
        <MenuItemIcon component={BiClipboard} data-testid='svg' fg='3' aria-hidden='true' />
        <MenuItemIcon d='inline-flex' data-testid='custom-display' aria-hidden='true' />
        Copy
      </MenuItem>
    </Menu>,
  );
  const wrapper = screen.getByTestId('wrapper').element();
  const svg = screen.getByTestId('svg').element();
  expect(wrapper.tagName).toBe('SPAN');
  expect(wrapper).toHaveClass('menu-item-icon', 'before', 'custom');
  expect(svg.tagName.toLowerCase()).toBe('svg');
  expect(svg).toHaveClass('menu-item-icon', 'fg-3');
  expect(svg).toHaveAttribute('aria-hidden', 'true');
  expect(screen.getByTestId('custom-display')).toHaveClass('d-inline-flex');
  expect(screen.getByTestId('custom-display')).not.toHaveClass('d-flex');
  expect(getComputedStyle(svg).width).toBe('16px');
  expect(screen.getByRole('button', { name: 'Copy' })).toBeVisible();
});

test('menu item content components preserve elements, classes and Box props', async () => {
  const screen = await render(
    <Menu show position='static'>
      <MenuItem component='button'>
        <MenuItemContent data-testid='content' className='custom' classNameBefore='before' d='flex'>
          Label
          <MenuItemDescription data-testid='description' className='custom-description'>
            Detail
          </MenuItemDescription>
        </MenuItemContent>
      </MenuItem>
      <MenuItemContent component='div' data-testid='custom-content' />
      <MenuItemDescription component='span' data-testid='custom-description' />
    </Menu>,
  );
  expect(screen.getByTestId('content').element().tagName).toBe('SPAN');
  expect(screen.getByTestId('content')).toHaveClass(
    'menu-item-content',
    'custom',
    'before',
    'd-flex',
  );
  expect(screen.getByTestId('description').element().tagName).toBe('SMALL');
  expect(screen.getByTestId('description')).toHaveClass(
    'menu-item-description',
    'custom-description',
  );
  expect(screen.getByTestId('custom-content').element().tagName).toBe('DIV');
  expect(screen.getByTestId('custom-description').element().tagName).toBe('SPAN');
  expect(screen.getByRole('button', { name: 'Label Detail' })).toBeVisible();
});

test('combobox option descriptions retain menu item markup', async () => {
  const screen = await render(
    <Combobox
      aria-label='Choices'
      options={[{ value: 'a', label: 'Option', description: 'Details', icon: <BiClipboard /> }]}
    />,
  );
  await screen.getByRole('button', { name: 'Choices' }).click();
  const option = screen.getByRole('option', { name: 'Option Details' }).element();
  expect(option.querySelector('.menu-item-content')?.tagName).toBe('SPAN');
  expect(option.querySelector('.menu-item-description')?.tagName).toBe('SMALL');
  expect(option.querySelector('.menu-item-icon')?.tagName).toBe('SPAN');
  expect(option.querySelector('.menu-item-icon')).toHaveAttribute('aria-hidden', 'true');
});

test('menu waits for its position before showing and leaves transforms to the opening animation', async () => {
  const initialVisibility: string[] = [];
  const screen = await render(
    <div style={{ padding: '150px 180px' }}>
      <Menu
        ref={(element) => {
          if (element) initialVisibility.push(getComputedStyle(element).visibility);
        }}
        trigger={<Button>Open positioned menu</Button>}
      >
        <MenuItem component='button'>Action</MenuItem>
      </Menu>
    </div>,
  );
  const toggle = screen.getByRole('button', { name: 'Open positioned menu' });
  for (let attempt = 0; attempt < 2; attempt++) {
    await toggle.click();
    await expect.poll(() => screen.container.querySelector('.menu.show')).not.toBeNull();
    const menu = screen.container.querySelector<HTMLElement>('.menu.show')!;
    const triggerRect = toggle.element().getBoundingClientRect();
    const menuRect = menu.getBoundingClientRect();
    expect(initialVisibility[attempt]).toBe('hidden');
    expect(getComputedStyle(menu).visibility).toBe('visible');
    expect(menu.style.transform).toBe('');
    expect(getComputedStyle(menu).transitionProperty).toContain('transform');
    expect(
      menu
        .getAnimations()
        .some(
          (animation) =>
            animation instanceof CSSTransition && animation.transitionProperty === 'transform',
        ),
    ).toBe(true);
    expect(Math.abs(menuRect.left - triggerRect.left)).toBeLessThan(12);
    expect(Math.abs(menuRect.top - triggerRect.bottom)).toBeLessThan(12);
    await toggle.click();
    await expect.element(toggle).toHaveAttribute('aria-expanded', 'false');
  }
});

test('menu toggles and positions while preserving trigger and menu handlers', async () => {
  const triggerClick = vi.fn();
  const triggerKey = vi.fn();
  const menuClick = vi.fn();
  const menuKey = vi.fn();
  const screen = await render(
    <Menu
      trigger={
        <Button onClick={triggerClick} onKeyDown={triggerKey}>
          Open
        </Button>
      }
      onClick={menuClick}
      onKeyDown={menuKey}
      placement='top-end'
    >
      <MenuItem component='button'>Action</MenuItem>
    </Menu>,
  );
  const toggle = screen.getByRole('button', { name: 'Open' });
  await toggle.click();
  expect(triggerClick).toHaveBeenCalledOnce();
  await expect.element(toggle).toHaveAttribute('aria-expanded', 'true');
  const menu = screen.container.querySelector<HTMLElement>('.menu.show')!;
  expect(toggle).toHaveAttribute('aria-controls', menu.id);
  expect(menu.style.position).toBe('absolute');
  await expect
    .poll(() => menu.getAttribute('data-bs-placement'))
    .toMatch(/^(top|bottom)-(start|end)$/);
  const item = screen.getByRole('button', { name: 'Action' });
  item.element().dispatchEvent(new KeyboardEvent('keydown', { key: 'End', bubbles: true }));
  expect(menuKey).toHaveBeenCalledOnce();
  await item.click();
  expect(menuClick).toHaveBeenCalledOnce();
  await expect.element(toggle).toHaveAttribute('aria-expanded', 'false');
  toggle.element().dispatchEvent(new KeyboardEvent('keydown', { key: 'ArrowDown', bubbles: true }));
  expect(triggerKey).toHaveBeenCalledOnce();
  await expect.element(toggle).toHaveAttribute('aria-expanded', 'true');
  await expect.poll(() => document.activeElement?.textContent).toBe('Action');
});

test('controlled menus report changes and honor the controlling state', async () => {
  const onChange = vi.fn();
  function Controlled() {
    const [show, setShow] = useState(false);
    return (
      <Menu
        show={show}
        onShowChange={(next) => {
          onChange(next);
          setShow(next);
        }}
        trigger={<Button>Controlled</Button>}
      >
        <MenuItem component='button'>Action</MenuItem>
      </Menu>
    );
  }
  const screen = await render(<Controlled />);
  const toggle = screen.getByRole('button', { name: 'Controlled' });
  await toggle.click();
  await expect.element(toggle).toHaveAttribute('aria-expanded', 'true');
  expect(onChange).toHaveBeenCalledWith(true);
  document.body.dispatchEvent(new PointerEvent('pointerdown', { bubbles: true }));
  await expect.element(toggle).toHaveAttribute('aria-expanded', 'false');
  expect(onChange).toHaveBeenCalledWith(false);
});

test('static menu retains its existing show behavior', async () => {
  const screen = await render(
    <Menu show position='static' data-testid='static-menu'>
      <MenuItem href='#'>Static</MenuItem>
    </Menu>,
  );
  expect(screen.getByTestId('static-menu')).toHaveClass('menu', 'show', 'position-static');
});

test.each([
  [true, false, false],
  ['inside', false, true],
  ['outside', true, false],
  [false, true, true],
] as const)(
  'autoClose=%s handles item and outside clicks',
  async (autoClose, staysOnItem, staysOnOutside) => {
    const screen = await render(
      <Menu autoClose={autoClose} trigger={<Button>Toggle</Button>}>
        <MenuItem component='button'>Action</MenuItem>
      </Menu>,
    );
    const toggle = screen.getByRole('button', { name: 'Toggle' });
    await toggle.click();
    await screen.getByRole('button', { name: 'Action' }).click();
    await expect.element(toggle).toHaveAttribute('aria-expanded', String(staysOnItem));
    if (!staysOnItem) await toggle.click();
    document.body.dispatchEvent(new PointerEvent('pointerdown', { bubbles: true }));
    await expect.element(toggle).toHaveAttribute('aria-expanded', String(staysOnOutside));
  },
);

import { expect, test, vi } from 'vitest';
import { render } from 'vitest-browser-react';

import { Popover, PopoverBody, PopoverHeader } from '../src';

function press(target: HTMLElement, key: string) {
  target.dispatchEvent(new KeyboardEvent('keydown', { key, bubbles: true, cancelable: true }));
}

test('preserves the static popover surface API', async () => {
  const screen = await render(
    <Popover show data-testid='static-popover'>
      <PopoverHeader>Static title</PopoverHeader>
      <PopoverBody>Static content</PopoverBody>
    </Popover>,
  );

  expect(screen.getByTestId('static-popover')).toHaveClass('popover', 'bs-popover-end', 'show');
  expect(screen.getByText('Static title')).toBeTruthy();
});

test('supports a custom trigger set', async () => {
  // Floating UI opens on focus only when it matches :focus-visible, so keep this
  // before tests that use the pointer.
  const onShowChange = vi.fn();
  const screen = await render(
    <Popover
      trigger={<button type='button'>Focus me</button>}
      triggers={['focus']}
      onShowChange={onShowChange}
    >
      <PopoverBody>Focus content</PopoverBody>
    </Popover>,
  );

  screen.getByRole('button').element().focus();
  await expect.poll(() => onShowChange.mock.calls.length).toBe(1);
});

test('opens on click, describes its trigger, and closes with Escape', async () => {
  const screen = await render(
    <Popover trigger={<button type='button'>Toggle</button>}>
      <PopoverHeader>Popover title</PopoverHeader>
      <PopoverBody>Popover content</PopoverBody>
    </Popover>,
  );
  const trigger = screen.getByRole('button').element();

  await screen.getByRole('button').click();
  await expect.poll(() => document.querySelector('.popover.show')).not.toBeNull();

  const popover = document.querySelector<HTMLElement>('[role=tooltip]');
  expect(popover).not.toBeNull();
  expect(trigger.getAttribute('aria-describedby')).toBe(popover?.id);
  const arrow = popover?.querySelector<HTMLElement>('.popover-arrow');
  expect(arrow?.style.position).toBe('absolute');
  await expect.poll(() => arrow?.style.top).not.toBe('');

  press(trigger as HTMLElement, 'Escape');
  await expect.poll(() => document.querySelector('.popover.show')).toBeNull();
});

test('closes when clicking outside', async () => {
  const screen = await render(
    <div>
      <Popover
        trigger={
          <button type='button' style={{ position: 'fixed', top: 0, left: 0 }}>
            Toggle
          </button>
        }
      >
        <PopoverBody>Popover content</PopoverBody>
      </Popover>
      <button type='button' style={{ position: 'fixed', top: '50vh', left: '50vw' }}>
        Outside
      </button>
    </div>,
  );

  await screen.getByRole('button', { name: 'Toggle' }).click();
  await expect.poll(() => document.querySelector('.popover.show')).not.toBeNull();

  await screen.getByRole('button', { name: 'Outside' }).click();
  await expect.poll(() => document.querySelector('.popover.show')).toBeNull();
});

test('supports controlled visibility', async () => {
  const onShowChange = vi.fn();
  const screen = await render(
    <Popover trigger={<button type='button'>Toggle</button>} show onShowChange={onShowChange}>
      <PopoverBody>Controlled content</PopoverBody>
    </Popover>,
  );

  expect(document.querySelector('.popover.show')).not.toBeNull();

  await screen.getByRole('button').click();
  expect(onShowChange).toHaveBeenCalledWith(false);
  expect(document.querySelector('.popover.show')).not.toBeNull();
});

test('resolves responsive placement at the current viewport breakpoint', async () => {
  await render(
    <Popover
      show
      placement={{ xs: 'top', md: 'bottom' }}
      trigger={
        <button type='button' style={{ position: 'fixed', top: '50vh', left: '50vw' }}>
          Responsive
        </button>
      }
    >
      <PopoverBody>Responsive content</PopoverBody>
    </Popover>,
  );
  const expectedPlacement = window.innerWidth >= 768 ? 'bottom' : 'top';

  await expect
    .poll(() => document.querySelector('.popover')?.getAttribute('data-bs-placement'))
    .toBe(expectedPlacement);
});

test('renders into a custom container', async () => {
  const container = document.createElement('div');
  document.body.append(container);

  await render(
    <Popover show container={container} trigger={<button type='button'>Contained</button>}>
      <PopoverBody>Contained content</PopoverBody>
    </Popover>,
  );

  await expect.poll(() => container.querySelector('.popover')).not.toBeNull();
  container.remove();
});

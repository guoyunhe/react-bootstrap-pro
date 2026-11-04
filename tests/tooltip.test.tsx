import { expect, test } from 'vitest';
import { render } from 'vitest-browser-react';

import { Tooltip, TooltipInner } from '../src';

function press(target: HTMLElement, key: string) {
  target.dispatchEvent(new KeyboardEvent('keydown', { key, bubbles: true, cancelable: true }));
}

test('preserves the static tooltip surface API', async () => {
  const screen = await render(
    <Tooltip show data-testid='static-tooltip'>
      <TooltipInner>Static context</TooltipInner>
    </Tooltip>,
  );

  expect(screen.getByTestId('static-tooltip')).toHaveClass('tooltip', 'show');
  expect(screen.getByText('Static context')).toBeTruthy();
});

test('opens on focus, describes its trigger, and closes with Escape', async () => {
  const screen = await render(
    <Tooltip trigger={<button type='button'>Help</button>}>Helpful context</Tooltip>,
  );
  const trigger = screen.getByRole('button').element();

  trigger.focus();
  await expect.poll(() => document.querySelector('.tooltip.show')).not.toBeNull();

  const tooltip = document.querySelector<HTMLElement>('[role=tooltip]');
  expect(tooltip).not.toBeNull();
  expect(trigger.getAttribute('aria-describedby')).toBe(tooltip?.id);
  const arrow = tooltip?.querySelector<HTMLElement>('.tooltip-arrow');
  expect(arrow?.style.position).toBe('absolute');
  await expect.poll(() => arrow?.style.left).not.toBe('');

  press(trigger, 'Escape');
  await expect.poll(() => document.querySelector('.tooltip.show')).toBeNull();
});

test('supports click as a configurable trigger', async () => {
  const screen = await render(
    <Tooltip trigger={<button type='button'>More</button>} triggers={['click']}>
      More details
    </Tooltip>,
  );

  await screen.getByRole('button').click();
  await expect.poll(() => document.querySelector('.tooltip.show')).not.toBeNull();
});

test('resolves responsive placement at the current viewport breakpoint', async () => {
  await render(
    <Tooltip
      show
      placement={{ xs: 'top', md: 'bottom' }}
      trigger={
        <button type='button' style={{ position: 'fixed', top: '50vh', left: '50vw' }}>
          Responsive
        </button>
      }
    >
      Responsive context
    </Tooltip>,
  );
  const expectedPlacement = window.innerWidth >= 768 ? 'bottom' : 'top';

  await expect
    .poll(() => document.querySelector('[data-bs-placement]')?.getAttribute('data-bs-placement'))
    .toBe(expectedPlacement);
});

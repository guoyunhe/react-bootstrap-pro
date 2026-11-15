import { expect, test } from 'vitest';
import { render } from 'vitest-browser-react';

import { BreadcrumbProvider, useBreadcrumb } from '../src';

function TrailProbe() {
  const entries = useBreadcrumb();

  return (
    <span data-testid='trail'>
      {entries.map((entry) => `${entry.label ?? ''}:${entry.href ?? ''}`).join('|')}
    </span>
  );
}

test('stacks entries from nested providers', async () => {
  const screen = await render(
    <BreadcrumbProvider items={[{ label: 'Home', href: '/' }]}>
      <BreadcrumbProvider items={[{ label: 'Library', href: '/library' }]}>
        <BreadcrumbProvider items={[{ label: 'Data' }]}>
          <TrailProbe />
        </BreadcrumbProvider>
      </BreadcrumbProvider>
    </BreadcrumbProvider>,
  );

  await expect
    .element(screen.getByTestId('trail'))
    .toHaveTextContent('Home:/|Library:/library|Data:');
});

test('root ignores entries inherited from ancestor providers', async () => {
  const screen = await render(
    <BreadcrumbProvider items={[{ label: 'Home', href: '/' }]}>
      <BreadcrumbProvider items={[{ label: 'Settings', href: '/settings' }]}>
        <BreadcrumbProvider root items={[{ label: 'Admin', href: '/admin' }]}>
          <BreadcrumbProvider items={[{ label: 'Users' }]}>
            <TrailProbe />
          </BreadcrumbProvider>
        </BreadcrumbProvider>
      </BreadcrumbProvider>
    </BreadcrumbProvider>,
  );

  await expect.element(screen.getByTestId('trail')).toHaveTextContent('Admin:/admin|Users:');
});

test('returns an empty list outside a provider', async () => {
  const screen = await render(<TrailProbe />);
  const trail = screen.getByTestId('trail');

  await expect.element(trail).toBeInTheDocument();
  expect(trail.element().textContent).toBe('');
});

test('updates entries when a provider changes them', async () => {
  const screen = await render(
    <BreadcrumbProvider items={[{ label: 'Draft' }]}>
      <TrailProbe />
    </BreadcrumbProvider>,
  );

  await expect.element(screen.getByTestId('trail')).toHaveTextContent('Draft:');

  await screen.rerender(
    <BreadcrumbProvider items={[{ label: 'Published' }]}>
      <TrailProbe />
    </BreadcrumbProvider>,
  );

  await expect.element(screen.getByTestId('trail')).toHaveTextContent('Published:');
});

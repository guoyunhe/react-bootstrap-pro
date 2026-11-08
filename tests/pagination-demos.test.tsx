import 'bootstrap/dist/css/bootstrap.css';
import { expect, test } from 'vitest';
import { render } from 'vitest-browser-react';

import { PaginationActiveDemo } from '../docs/components/pagination/demos/active';
import { PaginationAlignmentCenterDemo } from '../docs/components/pagination/demos/alignment-center';
import { PaginationAlignmentEndDemo } from '../docs/components/pagination/demos/alignment-end';
import { PaginationBasicDemo } from '../docs/components/pagination/demos/basic';
import { PaginationDisabledDemo } from '../docs/components/pagination/demos/disabled';
import { PaginationIconsDemo } from '../docs/components/pagination/demos/icons';
import { PaginationSizingDemo } from '../docs/components/pagination/demos/sizing';
import { PaginationVariantsDemo } from '../docs/components/pagination/demos/variants';

test('overview and symbol examples have labeled landmarks and accessible links', async () => {
  const screen = await render(
    <>
      <PaginationBasicDemo />
      <PaginationIconsDemo />
    </>,
  );
  const basic = screen.getByRole('navigation', { name: 'Page navigation example' }).element();
  const icons = screen.getByRole('navigation', { name: 'Page navigation with symbols' }).element();
  expect(basic.querySelectorAll('li')).toHaveLength(5);
  expect(basic.querySelectorAll('a[href]')).toHaveLength(5);
  expect(icons.querySelector('a[aria-label="Previous"] span')).toHaveAttribute(
    'aria-hidden',
    'true',
  );
  expect(icons.querySelector('a[aria-label="Next"] span')).toHaveAttribute('aria-hidden', 'true');
});

test('active and disabled examples expose one current page and a non-interactive previous item', async () => {
  const screen = await render(
    <>
      <PaginationActiveDemo />
      <PaginationDisabledDemo />
    </>,
  );
  const active = screen.getByRole('navigation', { name: 'Current page example' }).element();
  const disabled = screen
    .getByRole('navigation', { name: 'Disabled previous page example' })
    .element();
  expect(active.querySelectorAll('[aria-current="page"]')).toHaveLength(1);
  expect(active.querySelector('[aria-current="page"]')?.textContent).toBe('2');
  expect(disabled.querySelectorAll('[aria-current="page"]')).toHaveLength(1);
  const previous = disabled.querySelector('li[aria-disabled="true"]');
  expect(previous?.querySelector('.page-link')?.tagName).toBe('SPAN');
  expect(previous?.querySelector('a, button, [tabindex]')).toBeNull();
});

test('theme, sizes, and alignment match their documented classes and styles', async () => {
  const screen = await render(
    <>
      <PaginationVariantsDemo />
      <PaginationSizingDemo />
      <PaginationAlignmentCenterDemo />
      <PaginationAlignmentEndDemo />
    </>,
  );
  const themed = screen.getByRole('navigation', { name: 'Themed page navigation' }).element();
  expect(themed.querySelector('ul')).toHaveClass('theme-primary');
  const small = screen.getByRole('navigation', { name: 'sm page navigation' }).element();
  const normal = screen.getByRole('navigation', { name: 'default page navigation' }).element();
  const large = screen.getByRole('navigation', { name: 'lg page navigation' }).element();
  expect(small.querySelector('ul')).toHaveClass('pagination-sm');
  expect(normal.querySelector('ul')).not.toHaveClass('pagination-sm', 'pagination-lg');
  expect(large.querySelector('ul')).toHaveClass('pagination-lg');
  const center = screen.getByRole('navigation', { name: 'Centered page navigation' }).element();
  const end = screen.getByRole('navigation', { name: 'End-aligned page navigation' }).element();
  expect(getComputedStyle(center.querySelector('ul')!).justifyContent).toBe('center');
  expect(getComputedStyle(end.querySelector('ul')!).justifyContent).toBe('flex-end');
});

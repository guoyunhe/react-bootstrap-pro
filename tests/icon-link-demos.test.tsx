import 'bootstrap/dist/css/bootstrap.css';
import { expect, test } from 'vitest';
import { render } from 'vitest-browser-react';

import { IconLinkBasicDemo } from '../docs/components/icon-link/demos/basic';
import { IconLinkCustomColorDemo } from '../docs/components/icon-link/demos/custom-color';
import { IconLinkCustomTransformDemo } from '../docs/components/icon-link/demos/custom-transform';
import { IconLinkHoverDemo } from '../docs/components/icon-link/demos/hover';
import { IconLinkUtilitiesDemo } from '../docs/components/icon-link/demos/link-utilities';
import { IconLinkTrailingDemo } from '../docs/components/icon-link/demos/trailing';

test('IconLink demos render upstream variants with styled decorative icons', async () => {
  const screen = await render(
    <>
      <IconLinkBasicDemo />
      <IconLinkTrailingDemo />
      <IconLinkHoverDemo />
      <IconLinkCustomTransformDemo />
      <IconLinkCustomColorDemo />
      <IconLinkUtilitiesDemo />
    </>,
  );
  const links = screen.container.querySelectorAll('a');

  expect(links).toHaveLength(6);
  for (const link of links) {
    const icon = link.querySelector(':scope > svg.bi');
    expect(link).toHaveClass('icon-link');
    expect(icon).toHaveAttribute('aria-hidden', 'true');
    expect(getComputedStyle(link).display).toBe('inline-flex');
    expect(link.getAttribute('href')).toBe('https://getbootstrap.com/docs/6.0/helpers/icon-link/');
  }
  expect(links[0]?.firstElementChild?.tagName).toBe('svg');
  expect(links[1]?.lastElementChild?.tagName).toBe('svg');
  expect(links[2]).toHaveClass('icon-link-hover');
  expect(links[3]?.style.getPropertyValue('--bs-icon-link-transform')).toBe(
    'translate3d(0, -.125rem, 0)',
  );
  expect(links[4]?.style.getPropertyValue('--bs-link-color')).toBe('#198754');
  expect(links[5]).toHaveClass('theme-success', 'underline-success', 'hover:underline-80');
});

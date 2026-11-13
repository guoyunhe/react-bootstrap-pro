import 'bootstrap/dist/css/bootstrap.css';
import { useCallback, useState } from 'react';
import { afterEach, expect, test, vi } from 'vitest';
import { render } from 'vitest-browser-react';

import type { TocHeading } from '../src';
import { collectTocHeadings, Toc, useActiveHeading } from '../src';

const headings: TocHeading[] = [
  {
    id: 'toc-test-install',
    text: 'Install',
    level: 2,
    children: [
      { id: 'toc-test-npm', text: 'Using npm', level: 3 },
      { id: 'toc-test-yarn', text: 'Using Yarn', level: 3 },
    ],
  },
  { id: 'toc-test-cdn', text: 'CDN', level: 2 },
];

afterEach(() => {
  window.scrollTo(0, 0);
});

test('renders a labelled navigation tree and highlights the active heading', async () => {
  const onNavigate = vi.fn();
  const screen = await render(
    <Toc headings={headings} activeId='toc-test-npm' onNavigate={onNavigate} />,
  );

  const nav = screen.container.querySelector('nav');
  expect(nav).toHaveAttribute('aria-label', 'Table of contents');
  expect(nav).toHaveClass('fs-sm');

  const lists = [...nav!.querySelectorAll('ul.nav')];
  expect(lists).toHaveLength(2);
  expect(lists[0]).toHaveClass('nav', 'flex-column');
  expect(lists[1]).toHaveClass('nav', 'flex-column', 'ps-5');
  expect(lists[0]!.querySelector('li')).toHaveClass('nav-item', 'd-block');

  const links = [...nav!.querySelectorAll<HTMLAnchorElement>('a.nav-link')];
  expect(links.map((link) => link.getAttribute('href'))).toEqual([
    '#toc-test-install',
    '#toc-test-npm',
    '#toc-test-yarn',
    '#toc-test-cdn',
  ]);
  expect(links[1]).toHaveClass('active');
  expect(links[1]).toHaveAttribute('aria-current', 'location');
  expect(links[0]).not.toHaveClass('active');
  expect(links[0]).not.toHaveAttribute('aria-current');

  await screen.getByRole('link', { name: 'Using Yarn' }).click();
  expect(onNavigate).toHaveBeenCalledWith(headings[0]!.children![1]);
});

test('accepts a custom label and element', async () => {
  const screen = await render(<Toc headings={headings} label='On this page' component='aside' />);

  const aside = screen.container.querySelector('aside');
  expect(aside).toHaveAttribute('aria-label', 'On this page');
  expect(screen.container.querySelector('nav')).toBeNull();
});

test('collects nested headings and leaves ignored elements out of the label', async () => {
  const screen = await render(
    <div data-testid='content'>
      <h2 id='toc-collect-one'>
        One{' '}
        <a data-toc-ignore href='#toc-collect-one'>
          #
        </a>
      </h2>
      <h4 id='toc-collect-nested'>Nested heading</h4>
      <h3 id='toc-collect-three'>Three</h3>
      <h2>Without an id</h2>
      <h2 id='toc-collect-two'>Two</h2>
    </div>,
  );

  const collected = collectTocHeadings(screen.getByTestId('content').element() as HTMLElement);

  expect(collected).toEqual([
    {
      id: 'toc-collect-one',
      text: 'One',
      level: 2,
      children: [
        {
          id: 'toc-collect-nested',
          text: 'Nested heading',
          level: 4,
          children: [],
        },
        {
          id: 'toc-collect-three',
          text: 'Three',
          level: 3,
          children: [],
        },
      ],
    },
    {
      id: 'toc-collect-two',
      text: 'Two',
      level: 2,
      children: [],
    },
  ]);
});

function ActiveHeadingExample() {
  const [collected, setCollected] = useState<TocHeading[]>([]);
  const activeId = useActiveHeading(collected);
  const attachContent = useCallback((element: HTMLDivElement | null) => {
    setCollected(element ? collectTocHeadings(element) : []);
  }, []);

  return (
    <>
      <div ref={attachContent}>
        <h2 id='toc-active-one'>One</h2>
        <div style={{ height: 800 }} />
        <h2 id='toc-active-two'>Two</h2>
        <div style={{ height: 800 }} />
        <h2 id='toc-active-three'>Three</h2>
      </div>
      <Toc headings={collected} activeId={activeId} data-testid='toc' />
    </>
  );
}

test('follows the heading above the reader while scrolling', async () => {
  window.scrollTo(0, 0);
  const screen = await render(<ActiveHeadingExample />);
  const toc = screen.getByTestId('toc').element();
  const activeLink = () => toc.querySelector('a.nav-link.active')?.getAttribute('href');

  await expect.poll(activeLink).toBe('#toc-active-one');

  const two = document.getElementById('toc-active-two')!;
  window.scrollTo(0, Math.ceil(two.getBoundingClientRect().top + window.scrollY));
  await expect.poll(activeLink).toBe('#toc-active-two');

  window.scrollTo(0, document.documentElement.scrollHeight);
  await expect.poll(activeLink).toBe('#toc-active-three');
});

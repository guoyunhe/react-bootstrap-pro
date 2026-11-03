import { expect, test } from 'vitest';
import { render } from 'vitest-browser-react';

import { NotProse, Prose } from '../src';

test('renders prose typography with Box props', async () => {
  const screen = await render(
    <Prose component='article' data-testid='prose' padding={3} className='custom'>
      <h1>Article title</h1>
      <p>Article content</p>
    </Prose>,
  );
  const prose = screen.getByTestId('prose').element();

  expect(prose.tagName).toBe('ARTICLE');
  expect(prose).toHaveClass('prose', 'custom', 'p-3');
  expect(prose.querySelector('h1')?.textContent).toBe('Article title');
});

test('renders a not-prose region', async () => {
  const screen = await render(
    <Prose>
      <NotProse data-testid='not-prose' component='aside'>
        Interactive content
      </NotProse>
    </Prose>,
  );
  const notProse = screen.getByTestId('not-prose').element();

  expect(notProse.tagName).toBe('ASIDE');
  expect(notProse).toHaveClass('not-prose');
  expect(notProse.textContent).toBe('Interactive content');
});

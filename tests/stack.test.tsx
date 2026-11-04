import { expect, test } from 'vitest';
import { render } from 'vitest-browser-react';

import { Stack, StackContainer } from '../src';

test('renders Stack with a horizontal direction', async () => {
  const screen = await render(
    <Stack direction='horizontal' gap={3} data-testid='stack'>
      Content
    </Stack>,
  );
  const stack = screen.getByTestId('stack');

  expect(stack.element().tagName).toBe('DIV');
  expect(stack).toHaveClass('hstack', 'gap-3');
});

test('renders Stack vertically by default and supports polymorphism', async () => {
  const screen = await render(
    <Stack component='section' gap={2} data-testid='stack'>
      Content
    </Stack>,
  );
  const stack = screen.getByTestId('stack');

  expect(stack.element().tagName).toBe('SECTION');
  expect(stack).toHaveClass('vstack', 'gap-2');
});

test('supports responsive Stack directions', async () => {
  const screen = await render(
    <Stack direction={{ xs: 'horizontal', md: 'vertical' }} data-testid='responsive-stack'>
      Content
    </Stack>,
  );
  const stack = screen.getByTestId('responsive-stack');

  expect(stack).toHaveClass('hstack', 'md:vstack');
});

test('renders StackContainer with the responsive stack container helper', async () => {
  const screen = await render(
    <StackContainer component='section' className='custom-container' data-testid='stack-container'>
      Content
    </StackContainer>,
  );
  const container = screen.getByTestId('stack-container');

  expect(container.element().tagName).toBe('SECTION');
  expect(container).toHaveClass('stack-container', 'custom-container');
});

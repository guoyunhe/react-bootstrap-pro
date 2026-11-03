import { expect, test } from 'vitest';
import { render } from 'vitest-browser-react';

import { Dialog } from '../src';

test('sets native dialog semantics and modifiers', async () => {
  const screen = await render(
    <Dialog size='lg' open data-testid='dialog'>
      Dialog content
    </Dialog>,
  );

  expect(screen.getByTestId('dialog').element().tagName).toBe('DIALOG');
  expect(screen.getByTestId('dialog')).toHaveClass('dialog', 'dialog-lg');
  expect(screen.getByTestId('dialog')).toHaveAttribute('open');
});

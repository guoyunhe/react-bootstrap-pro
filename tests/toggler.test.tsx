import { expect, test } from 'vitest';
import { render } from 'vitest-browser-react';

import { Toggler } from '../src';

test('retains plugin data attributes on the trigger', async () => {
  const screen = await render(
    <Toggler target='#theme' attribute='class' value='bg-primary'>
      Toggle theme
    </Toggler>,
  );

  expect(screen.getByRole('button', { name: 'Toggle theme' })).toHaveAttribute(
    'data-bs-toggle',
    'toggler',
  );
  expect(screen.getByRole('button', { name: 'Toggle theme' })).toHaveAttribute(
    'data-bs-value',
    'bg-primary',
  );
});

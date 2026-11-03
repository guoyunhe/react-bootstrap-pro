import { expect, test } from 'vitest';
import { render } from 'vitest-browser-react';

import { CloseButton } from '../src';

test('labels the close button for assistive technology', async () => {
  const screen = await render(<CloseButton />);

  expect(screen.getByRole('button', { name: 'Close' })).toHaveClass('btn-close');
});

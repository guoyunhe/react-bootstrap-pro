import { expect, test } from 'vitest';
import { render } from 'vitest-browser-react';

import { Drawer } from '../src';

test('renders drawer placement modifiers', async () => {
  const screen = await render(<Drawer placement='start' data-testid='drawer' />);

  expect(screen.getByTestId('drawer')).toHaveClass('drawer', 'drawer-start');
});

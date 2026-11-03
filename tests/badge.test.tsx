import { expect, test } from 'vitest';
import { render } from 'vitest-browser-react';

import { Badge } from '../src';

test('renders badge variant and theme modifiers', async () => {
  const screen = await render(
    <Badge variant='outline' theme='primary' data-testid='badge'>
      New
    </Badge>,
  );

  expect(screen.getByTestId('badge')).toHaveClass('badge', 'badge-outline', 'theme-primary');
});

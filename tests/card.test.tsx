import { expect, test } from 'vitest';
import { render } from 'vitest-browser-react';

import { Card, CardBody } from '../src';

test('composes card structure', async () => {
  const screen = await render(
    <Card variant='subtle' data-testid='card'>
      <CardBody>Card content</CardBody>
    </Card>,
  );

  expect(screen.getByTestId('card')).toHaveClass('card', 'card-subtle');
  expect(screen.getByText('Card content')).toHaveClass('card-body');
});

import { expect, test } from 'vitest';
import { render } from 'vitest-browser-react';

import { Card, CardBody, CardImage } from '../src';

test('composes card structure', async () => {
  const screen = await render(
    <Card variant='subtle' data-testid='card'>
      <CardBody>Card content</CardBody>
    </Card>,
  );

  expect(screen.getByTestId('card')).toHaveClass('card', 'card-subtle');
  expect(screen.getByText('Card content')).toHaveClass('card-body');
});

test('uses the general card image class unless placement is specified', async () => {
  const screen = await render(
    <>
      <CardImage data-testid='default-image' />
      <CardImage placement='top' data-testid='top-image' />
      <CardImage placement='bottom' data-testid='bottom-image' />
    </>,
  );

  expect(screen.getByTestId('default-image')).toHaveClass('card-img');
  expect(screen.getByTestId('default-image')).not.toHaveClass('card-img-top');
  expect(screen.getByTestId('top-image')).toHaveClass('card-img-top');
  expect(screen.getByTestId('bottom-image')).toHaveClass('card-img-bottom');
});

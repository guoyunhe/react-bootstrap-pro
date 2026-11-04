import { expect, test } from 'vitest';
import { render } from 'vitest-browser-react';

import { Figure, FigureCaption, Image } from '../src';

test('renders image modifiers and native image props', async () => {
  const screen = await render(
    <Image
      fluid
      thumbnail
      src='/image.jpg'
      alt='Landscape'
      className='custom-image'
      data-testid='image'
    />,
  );

  expect(screen.getByTestId('image')).toHaveClass('img-fluid', 'img-thumbnail', 'custom-image');
  expect(screen.getByTestId('image').element()).toHaveAttribute('src', '/image.jpg');
  expect(screen.getByTestId('image').element()).toHaveAttribute('alt', 'Landscape');
});

test('renders semantic figure and caption elements', async () => {
  const screen = await render(
    <Figure data-testid='figure'>
      <Image src='/image.jpg' alt='Landscape' />
      <FigureCaption data-testid='caption'>Image caption</FigureCaption>
    </Figure>,
  );

  expect(screen.getByTestId('figure').element().tagName).toBe('FIGURE');
  expect(screen.getByTestId('figure')).toHaveClass('figure');
  expect(screen.getByTestId('caption').element().tagName).toBe('FIGCAPTION');
  expect(screen.getByTestId('caption')).toHaveClass('figure-caption');
});

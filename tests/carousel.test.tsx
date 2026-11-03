import { expect, test } from 'vitest';
import { render } from 'vitest-browser-react';

import { Carousel, CarouselControl } from '../src';

test('composes carousel structure and control attributes', async () => {
  const screen = await render(
    <Carousel id='carousel' data-testid='carousel' fade>
      <div className='carousel-inner'>
        <div className='carousel-item active'>Slide 1</div>
      </div>
      <CarouselControl target='#carousel' direction='next' />
    </Carousel>,
  );

  expect(screen.getByTestId('carousel')).toHaveClass('carousel', 'carousel-fade');
  expect(screen.getByRole('button', { name: 'Next' })).toHaveAttribute('data-bs-slide', 'next');
  expect(screen.getByRole('button', { name: 'Next' })).toHaveClass('btn-icon');
  expect(screen.getByRole('button', { name: 'Next' })).toHaveAttribute(
    'data-bs-target',
    '#carousel',
  );
});

import { expect, test } from 'vitest';
import { render } from 'vitest-browser-react';

import { Carousel, CarouselControl } from '../src';

test('composes carousel structure and control attributes', async () => {
  const screen = await render(
    <Carousel id='carousel' data-testid='carousel' effect='fade' ends='wrap'>
      <div className='carousel-inner'>
        <div className='carousel-item active'>Slide 1</div>
      </div>
      <CarouselControl
        target='#carousel'
        direction='next'
        size='sm'
        variant='outline'
        className='custom-control'
      />
    </Carousel>,
  );

  expect(screen.getByTestId('carousel')).toHaveClass('carousel', 'carousel-fade');
  expect(screen.getByTestId('carousel')).toHaveAttribute('data-bs-ends', 'wrap');
  expect(screen.getByRole('button', { name: 'Next' })).toHaveAttribute('data-bs-slide', 'next');
  expect(screen.getByRole('button', { name: 'Next' })).toHaveClass(
    'btn-icon',
    'btn-sm',
    'btn-outline',
    'custom-control',
  );
  expect(screen.getByRole('button', { name: 'Next' })).toHaveAttribute(
    'data-bs-target',
    '#carousel',
  );
});

test('defaults to the slide effect', async () => {
  const screen = await render(<Carousel data-testid='carousel' />);

  expect(screen.getByTestId('carousel')).toHaveClass('carousel', 'slide');
  expect(screen.getByTestId('carousel')).not.toHaveClass('carousel-fade');
  expect(screen.getByTestId('carousel')).not.toHaveAttribute('data-bs-ends');
});

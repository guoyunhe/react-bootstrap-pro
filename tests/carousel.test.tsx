import { expect, test } from 'vitest';
import { render } from 'vitest-browser-react';

import { Carousel, CarouselControl, CarouselItem, CarouselPlayPause } from '../src';

test('composes carousel structure and control attributes', async () => {
  const screen = await render(
    <Carousel
      id='carousel'
      data-testid='carousel'
      effect='fade'
      ends='wrap'
      autoplay
      colorMode='dark'
    >
      <div className='carousel-inner'>
        <CarouselItem active interval={2000} data-testid='slide'>
          Slide 1
        </CarouselItem>
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
  expect(screen.getByTestId('carousel')).toHaveAttribute('data-bs-autoplay', 'true');
  expect(screen.getByTestId('carousel')).toHaveAttribute('data-bs-theme', 'dark');
  expect(screen.getByTestId('slide')).toHaveAttribute('data-bs-interval', '2000');
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
  expect(screen.getByTestId('carousel')).not.toHaveAttribute('data-bs-autoplay');
  expect(screen.getByTestId('carousel')).not.toHaveAttribute('data-bs-theme');
});

test('renders a play-pause control with labels and target attributes', async () => {
  const screen = await render(
    <CarouselPlayPause
      target='#carousel'
      size='sm'
      pauseLabel='Pause slideshow'
      playLabel='Play slideshow'
    />,
  );

  const button = screen.getByRole('button', { name: 'Pause slideshow' });

  expect(button).toHaveClass('btn-icon', 'btn-sm', 'carousel-control-play-pause');
  expect(button).toHaveAttribute('type', 'button');
  expect(button).toHaveAttribute('data-bs-target', '#carousel');
  expect(button).toHaveAttribute('data-bs-pause-label', 'Pause slideshow');
  expect(button).toHaveAttribute('data-bs-play-label', 'Play slideshow');
  expect(button.element().querySelector('.carousel-icon-pause')).not.toBeNull();
  expect(button.element().querySelector('.carousel-icon-play')).not.toBeNull();
});

import { expect, test } from 'vitest';
import { render } from 'vitest-browser-react';

import {
  Carousel,
  CarouselControl,
  CarouselIndicator,
  CarouselItem,
  CarouselPlayPause,
} from '../src';

test('composes carousel structure and control attributes', async () => {
  const screen = await render(
    <Carousel data-testid='carousel' effect='fade' ends='wrap' autoplay colorMode='dark'>
      <div className='carousel-inner'>
        <CarouselItem active interval={2000} data-testid='slide'>
          Slide 1
        </CarouselItem>
      </div>
      <CarouselIndicator index={0} active data-testid='indicator' />
      <CarouselControl direction='next' size='sm' variant='outline' className='custom-control' />
    </Carousel>,
  );

  const carousel = screen.getByTestId('carousel');
  const target = `#${carousel.element().getAttribute('id')}`;

  expect(carousel).toHaveClass('carousel', 'carousel-fade');
  expect(carousel.element().getAttribute('id')).toMatch(/^carousel-/);
  expect(carousel).toHaveAttribute('data-bs-ends', 'wrap');
  expect(carousel).toHaveAttribute('data-bs-autoplay', 'true');
  expect(carousel).toHaveAttribute('data-bs-theme', 'dark');
  expect(screen.getByTestId('slide')).toHaveAttribute('data-bs-interval', '2000');
  expect(screen.getByRole('button', { name: 'Next' })).toHaveAttribute('data-bs-slide', 'next');
  expect(screen.getByRole('button', { name: 'Next' })).toHaveClass(
    'btn-icon',
    'btn-sm',
    'btn-outline',
    'custom-control',
  );
  expect(screen.getByRole('button', { name: 'Next' })).toHaveAttribute('data-bs-target', target);
  expect(screen.getByTestId('indicator')).toHaveAttribute('data-bs-target', target);
});

test('defaults to the slide effect', async () => {
  const screen = await render(<Carousel data-testid='carousel' />);

  const carousel = screen.getByTestId('carousel');

  expect(carousel).toHaveClass('carousel', 'slide');
  expect(carousel).toHaveAttribute('id');
  expect(carousel).not.toHaveClass('carousel-fade');
  expect(carousel).not.toHaveAttribute('data-bs-ends');
  expect(carousel).not.toHaveAttribute('data-bs-autoplay');
  expect(carousel).not.toHaveAttribute('data-bs-theme');
});

test('maps item layout props to CSS variables and preserves custom styles', async () => {
  const screen = await render(
    <Carousel
      items={3}
      itemsGap={16}
      itemsPeek={48}
      style={{ color: 'red' }}
      data-testid='carousel'
    />,
  );
  const carousel = screen.getByTestId('carousel').element();

  expect(carousel.style.getPropertyValue('--bs-carousel-items')).toBe('3');
  expect(carousel.style.getPropertyValue('--bs-carousel-items-gap')).toBe('16px');
  expect(carousel.style.getPropertyValue('--bs-carousel-items-peek')).toBe('48px');
  expect(carousel.style.color).toBe('red');
});

test('generates a distinct internal id for each carousel', async () => {
  const screen = await render(
    <>
      <Carousel data-testid='first-carousel' />
      <Carousel data-testid='second-carousel' />
    </>,
  );
  const firstId = screen.getByTestId('first-carousel').element().getAttribute('id');
  const secondId = screen.getByTestId('second-carousel').element().getAttribute('id');

  expect(firstId).toMatch(/^carousel-[\w-]+$/);
  expect(secondId).toMatch(/^carousel-[\w-]+$/);
  expect(secondId).not.toBe(firstId);
});

test('uses an externally provided id for nested controls', async () => {
  const screen = await render(
    <Carousel id='external-carousel' data-testid='carousel'>
      <CarouselControl direction='next' />
      <CarouselIndicator index={0} />
      <CarouselPlayPause />
    </Carousel>,
  );
  const target = '#external-carousel';

  expect(screen.getByTestId('carousel')).toHaveAttribute('id', 'external-carousel');
  expect(screen.getByRole('button', { name: 'Next' })).toHaveAttribute('data-bs-target', target);
  expect(screen.getByRole('button', { name: 'Play' })).toHaveAttribute('data-bs-target', target);
  expect(screen.getByRole('button', { name: 'Slide 1' })).toHaveAttribute('data-bs-target', target);
});

test('supports external ids that need selector escaping', async () => {
  const screen = await render(
    <Carousel id='external:carousel'>
      <CarouselControl direction='next' />
    </Carousel>,
  );

  expect(screen.getByRole('button', { name: 'Next' })).toHaveAttribute(
    'data-bs-target',
    '[id="external:carousel"]',
  );
});

test('renders a play-pause control with labels and target attributes', async () => {
  const screen = await render(
    <Carousel data-testid='carousel'>
      <CarouselPlayPause size='sm' pauseLabel='Pause slideshow' playLabel='Play slideshow' />
    </Carousel>,
  );

  const target = `#${screen.getByTestId('carousel').element().getAttribute('id')}`;
  const button = screen.getByRole('button', { name: 'Play slideshow' });

  expect(button).toHaveClass('btn-icon', 'btn-sm', 'carousel-control-play-pause');
  expect(button).toHaveAttribute('type', 'button');
  expect(button).toHaveAttribute('data-bs-target', target);
  expect(button).toHaveAttribute('data-bs-pause-label', 'Pause slideshow');
  expect(button).toHaveAttribute('data-bs-play-label', 'Play slideshow');
  expect(button.element().querySelector('.carousel-icon-pause')).not.toBeNull();
  expect(button.element().querySelector('.carousel-icon-play')).not.toBeNull();
});

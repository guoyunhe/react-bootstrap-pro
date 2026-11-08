import 'bootstrap/dist/css/bootstrap.css';
import { useState } from 'react';
import { expect, test } from 'vitest';
import { render } from 'vitest-browser-react';

import { CarouselAutoplayDemo } from '../docs/components/carousel/demos/autoplay';
import { CarouselBottomControlsDemo } from '../docs/components/carousel/demos/bottom-controls';
import { CarouselCrossfadeDemo } from '../docs/components/carousel/demos/crossfade';
import { CarouselCustomContentDemo } from '../docs/components/carousel/demos/custom-content';
import { CarouselDarkDemo } from '../docs/components/carousel/demos/dark';
import { CarouselEndLoopDemo } from '../docs/components/carousel/demos/end-loop';
import { CarouselEndStopDemo } from '../docs/components/carousel/demos/end-stop';
import { CarouselEndWrapDemo } from '../docs/components/carousel/demos/end-wrap';
import { CarouselIndicatorsDemo } from '../docs/components/carousel/demos/indicators';
import { CarouselIndividualIntervalsDemo } from '../docs/components/carousel/demos/individual-intervals';
import { CarouselMultipleItemsDemo } from '../docs/components/carousel/demos/multiple-items';
import { CarouselOverlayControlsDemo } from '../docs/components/carousel/demos/overlay-controls';
import { CarouselPeekingDemo } from '../docs/components/carousel/demos/peeking';
import { CarouselTopControlsDemo } from '../docs/components/carousel/demos/top-controls';
import { CarouselVariableWidthDemo } from '../docs/components/carousel/demos/variable-width';
import {
  Carousel,
  CarouselControl,
  CarouselIndicator,
  CarouselIndicators,
  CarouselInner,
  CarouselItem,
  CarouselPlayPause,
} from '../src';

function Example({
  ends = 'wrap',
  effect = 'slide',
  autoplay = false,
}: {
  ends?: 'loop' | 'wrap' | 'stop';
  effect?: 'slide' | 'fade';
  autoplay?: boolean;
}) {
  return (
    <Carousel
      ends={ends}
      effect={effect}
      autoplay={autoplay}
      style={{ width: 300 }}
      data-testid='carousel'
    >
      <CarouselInner data-testid='viewport'>
        <CarouselItem active interval={150} style={{ height: 100 }}>
          One
        </CarouselItem>
        <CarouselItem interval={250} style={{ height: 100 }}>
          Two
        </CarouselItem>
        <CarouselItem interval={350} style={{ height: 100 }}>
          Three
        </CarouselItem>
      </CarouselInner>
      <CarouselControl direction='previous' />
      <CarouselControl direction='next' />
      <CarouselIndicators>
        <CarouselIndicator index={0} active />
        <CarouselIndicator index={1} />
        <CarouselIndicator index={2} />
      </CarouselIndicators>
      <CarouselPlayPause />
    </Carousel>
  );
}

test.each(['slide', 'fade'] as const)(
  'controls and indicators synchronize %s slides',
  async (effect) => {
    const screen = await render(<Example effect={effect} />);
    const root = screen.getByTestId('carousel').element();
    const items = root.querySelectorAll('.carousel-item');
    await screen.getByRole('button', { name: 'Next' }).click();
    await expect.poll(() => items[1]?.classList.contains('active')).toBe(true);
    expect(screen.getByRole('button', { name: 'Slide 2' })).toHaveAttribute('aria-current', 'true');
    await screen.getByRole('button', { name: 'Slide 3' }).click();
    await expect.poll(() => items[2]?.classList.contains('active')).toBe(true);
    await screen.getByRole('button', { name: 'Next' }).click();
    await expect.poll(() => items[0]?.classList.contains('active')).toBe(true);
  },
);

test('stop mode disables end controls and keyboard navigation respects inputs', async () => {
  const screen = await render(<Example ends='stop' effect='fade' />);
  const previous = screen.getByRole('button', { name: 'Previous' });
  const next = screen.getByRole('button', { name: 'Next' });
  await expect.element(previous).toBeDisabled();
  await next.click();
  await next.click();
  await expect.element(next).toBeDisabled();
  await previous.click();
  await expect.element(next).toBeEnabled();
  const root = screen.getByTestId('carousel').element();
  root.dispatchEvent(new KeyboardEvent('keydown', { bubbles: true, key: 'ArrowLeft' }));
  await expect.element(previous).toBeDisabled();
});

test('manual scrolling synchronizes active slides and indicators', async () => {
  const screen = await render(<Example />);
  const viewport = screen.getByTestId('viewport').element();
  viewport.scrollTo({ left: 300, behavior: 'instant' });
  await expect
    .element(screen.getByRole('button', { name: 'Slide 2' }))
    .toHaveAttribute('aria-current', 'true');
});

test('a drag interrupts programmatic scrolling and updates the active indicator', async () => {
  const screen = await render(<Example />);
  const viewport = screen.getByTestId('viewport').element();
  screen
    .getByRole('button', { name: 'Next' })
    .element()
    .dispatchEvent(new MouseEvent('click', { bubbles: true }));
  viewport.dispatchEvent(new PointerEvent('pointerdown', { bubbles: true }));
  viewport.scrollTo({ left: 600, behavior: 'instant' });
  await expect
    .element(screen.getByRole('button', { name: 'Slide 3' }))
    .toHaveAttribute('aria-current', 'true');
});

test('autoplay uses per-slide intervals, stops on interaction, and resumes', async () => {
  const screen = await render(
    <>
      <button>Outside carousel</button>
      <Example autoplay effect='fade' />
    </>,
  );
  await screen.getByRole('button', { name: 'Outside carousel' }).hover();
  const root = screen.getByTestId('carousel').element();
  const slides = root.querySelectorAll('.carousel-item');
  await expect.poll(() => slides[1]?.classList.contains('active')).toBe(true);
  expect(root.style.getPropertyValue('--bs-carousel-interval')).toBe('250ms');
  root.querySelector<HTMLButtonElement>('[data-bs-slide-to="2"]')!.click();
  await expect.element(screen.getByRole('button', { name: 'Play' })).toBeVisible();
  await expect.poll(() => slides[2]?.classList.contains('active')).toBe(true);
  await new Promise((resolve) => setTimeout(resolve, 400));
  expect(slides[2]?.classList.contains('active')).toBe(true);
  screen
    .getByRole('button', { name: 'Play' })
    .element()
    .dispatchEvent(new MouseEvent('click', { bubbles: true }));
  await expect.element(screen.getByRole('button', { name: 'Pause' })).toBeVisible();
  await expect.poll(() => slides[0]?.classList.contains('active')).toBe(true);
});

test('loop uses an inert temporary slide and removes it after wrapping', async () => {
  const screen = await render(<Example ends='loop' />);
  const viewport = screen.getByTestId('viewport').element();
  screen
    .getByRole('button', { name: 'Previous' })
    .element()
    .dispatchEvent(new MouseEvent('click', { bubbles: true }));
  const clone = viewport.querySelector<HTMLElement>('.carousel-item-clone');
  expect(clone).not.toBeNull();
  expect(clone?.inert).toBe(true);
  expect(clone?.getAttribute('aria-hidden')).toBe('true');
  await expect.poll(() => viewport.querySelector('.carousel-item-clone')).toBeNull();
  await expect
    .element(screen.getByRole('button', { name: 'Slide 3' }))
    .toHaveAttribute('aria-current', 'true');
});

function DynamicExample() {
  const [extra, setExtra] = useState(false);
  return (
    <Carousel effect='fade'>
      <button onClick={() => setExtra(true)}>Add</button>
      <CarouselInner>
        <CarouselItem>One</CarouselItem>
        {extra && <CarouselItem>Two</CarouselItem>}
      </CarouselInner>
      <CarouselControl direction='next' />
      <CarouselIndicator index={1} />
    </Carousel>
  );
}

test('updates when slides are added after mount', async () => {
  const screen = await render(<DynamicExample />);
  await screen.getByRole('button', { name: 'Add' }).click();
  await screen.getByRole('button', { name: 'Next' }).click();
  await expect
    .element(screen.getByRole('button', { name: 'Slide 2' }))
    .toHaveAttribute('aria-current', 'true');
});

function LazyViewportExample() {
  const [mounted, setMounted] = useState(false);
  return (
    <Carousel effect='fade'>
      <button onClick={() => setMounted(true)}>Mount slides</button>
      {mounted && (
        <CarouselInner>
          <CarouselItem>One</CarouselItem>
          <CarouselItem>Two</CarouselItem>
        </CarouselInner>
      )}
      <CarouselControl direction='next' />
      <CarouselIndicator index={1} />
    </Carousel>
  );
}

test('initializes a viewport mounted after the carousel', async () => {
  const screen = await render(<LazyViewportExample />);
  await screen.getByRole('button', { name: 'Mount slides' }).click();
  await screen.getByRole('button', { name: 'Next' }).click();
  await expect
    .element(screen.getByRole('button', { name: 'Slide 2' }))
    .toHaveAttribute('aria-current', 'true');
});

test('multi-item stop mode disables the next button at the actual scroll boundary', async () => {
  const screen = await render(
    <Carousel items={2} ends='stop' style={{ width: 400 }}>
      <CarouselInner>
        <CarouselItem>One</CarouselItem>
        <CarouselItem>Two</CarouselItem>
        <CarouselItem>Three</CarouselItem>
        <CarouselItem>Four</CarouselItem>
      </CarouselInner>
      <CarouselControl direction='next' />
      <CarouselIndicator index={2} />
    </Carousel>,
  );
  const next = screen.getByRole('button', { name: 'Next' });
  await next.click();
  await next.click();
  await expect.element(next).toBeDisabled();
  await expect
    .element(screen.getByRole('button', { name: 'Slide 3' }))
    .toHaveAttribute('aria-current', 'true');
});

test('hover pauses autoplay and leaving resumes it', async () => {
  const screen = await render(
    <>
      <button>Outside carousel</button>
      <Example autoplay effect='fade' />
    </>,
  );
  const carousel = screen.getByTestId('carousel');
  await carousel.hover();
  await expect.element(carousel).not.toHaveClass('carousel-playing');
  const active = carousel.element().querySelector('.carousel-item.active');
  await new Promise((resolve) => setTimeout(resolve, 400));
  expect(carousel.element().querySelector('.carousel-item.active')).toBe(active);
  await screen.getByRole('button', { name: 'Outside carousel' }).hover();
  await expect.element(carousel).toHaveClass('carousel-playing');
  await expect
    .poll(() => carousel.element().querySelector('.carousel-item.active'))
    .not.toBe(active);
});

function AutoplayPropExample() {
  const [autoplay, setAutoplay] = useState(false);
  return (
    <>
      <button onClick={() => setAutoplay(true)}>Enable autoplay</button>
      <button onClick={() => setAutoplay(false)}>Disable autoplay</button>
      <Example autoplay={autoplay} effect='fade' />
    </>
  );
}

test('changing the autoplay prop updates playback state', async () => {
  const screen = await render(<AutoplayPropExample />);
  await expect.element(screen.getByRole('button', { name: 'Play' })).toBeVisible();
  screen
    .getByRole('button', { name: 'Enable autoplay' })
    .element()
    .dispatchEvent(new MouseEvent('click', { bubbles: true }));
  await expect.element(screen.getByRole('button', { name: 'Pause' })).toBeVisible();
  screen
    .getByRole('button', { name: 'Disable autoplay' })
    .element()
    .dispatchEvent(new MouseEvent('click', { bubbles: true }));
  await expect.element(screen.getByRole('button', { name: 'Play' })).toBeVisible();
});

test.each([
  [CarouselAutoplayDemo, false],
  [CarouselBottomControlsDemo, false],
  [CarouselCrossfadeDemo, false],
  [CarouselCustomContentDemo, false],
  [CarouselDarkDemo, false],
  [CarouselEndLoopDemo, false],
  [CarouselEndStopDemo, false],
  [CarouselEndWrapDemo, false],
  [CarouselIndicatorsDemo, false],
  [CarouselIndividualIntervalsDemo, true],
  [CarouselMultipleItemsDemo, false],
  [CarouselOverlayControlsDemo, false],
  [CarouselPeekingDemo, false],
  [CarouselTopControlsDemo, false],
  [CarouselVariableWidthDemo, false],
])('documentation demo navigates without Bootstrap JS: %s', async (Demo, indicatorOnly) => {
  const screen = await render(
    <div style={{ width: 700 }}>
      <Demo />
    </div>,
  );
  const carousel = document.querySelector<HTMLElement>('.carousel')!;
  const slides = carousel.querySelectorAll('.carousel-item');
  const action = indicatorOnly
    ? screen.getByRole('button', { name: 'Slide 2' })
    : screen.getByRole('button', { name: 'Next' });
  await action.click();
  await expect.poll(() => slides[1]?.classList.contains('active')).toBe(true);
});

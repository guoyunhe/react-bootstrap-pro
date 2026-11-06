import type { CSSProperties } from 'react';
import { Carousel, CarouselControl, CarouselInner, CarouselItem } from 'react-bootstrap-pro';

import { CarouselSlidePlaceholder } from './shared';

const carouselStyle = {
  '--bs-carousel-items-peek': '3rem',
} as CSSProperties;

export function CarouselPeekingDemo() {
  const slides = ['First slide', 'Second slide', 'Third slide', 'Fourth slide', 'Fifth slide'];

  return (
    <Carousel ends='stop' itemsGap='1rem' style={carouselStyle}>
      <div className='d-flex justify-content-between align-items-center'>
        <h5 className='mb-0'>Peek the neighbors</h5>
        <div>
          <CarouselControl direction='previous' size='sm' />
          <CarouselControl direction='next' size='sm' />
        </div>
      </div>
      <CarouselInner>
        {slides.map((label, index) => (
          <CarouselItem key={label} active={index === 0}>
            <CarouselSlidePlaceholder rounded>{label}</CarouselSlidePlaceholder>
          </CarouselItem>
        ))}
      </CarouselInner>
    </Carousel>
  );
}

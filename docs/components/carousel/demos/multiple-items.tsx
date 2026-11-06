import type { CSSProperties } from 'react';
import { Carousel, CarouselControl, CarouselInner, CarouselItem } from 'react-bootstrap-pro';

import { CarouselSlidePlaceholder } from './shared';

const carouselStyle = {
  '--bs-carousel-items': 3,
  '--bs-carousel-items-gap': '1rem',
} as CSSProperties;

export function CarouselMultipleItemsDemo() {
  return (
    <Carousel ends='stop' style={carouselStyle}>
      <div className='d-flex justify-content-between align-items-center'>
        <h5 className='mb-0'>Three at a time</h5>
        <div>
          <CarouselControl direction='previous' size='sm' />
          <CarouselControl direction='next' size='sm' />
        </div>
      </div>
      <CarouselInner>
        {Array.from({ length: 7 }, (_, index) => (
          <CarouselItem key={index} active={index === 0}>
            <CarouselSlidePlaceholder rounded>{index + 1}</CarouselSlidePlaceholder>
          </CarouselItem>
        ))}
      </CarouselInner>
    </Carousel>
  );
}

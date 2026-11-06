import type { CSSProperties } from 'react';
import { Carousel, CarouselControl, CarouselInner, CarouselItem } from 'react-bootstrap-pro';

import { CarouselSlidePlaceholder } from './shared';

const carouselStyle = {
  '--bs-carousel-items-gap': '1rem',
} as CSSProperties;

const slides = [
  { label: 'A', width: 160 },
  { label: 'B', width: 320 },
  { label: 'C', width: 220 },
  { label: 'D', width: 380 },
  { label: 'E', width: 200 },
  { label: 'F', width: 300 },
];

export function CarouselVariableWidthDemo() {
  return (
    <Carousel id='carouselVariable' slide auto data-bs-ends='stop' style={carouselStyle}>
      <div className='d-flex justify-content-between align-items-center'>
        <h5 className='mb-0'>Mixed widths</h5>
        <div>
          <CarouselControl target='#carouselVariable' direction='previous' size='sm' />
          <CarouselControl target='#carouselVariable' direction='next' size='sm' />
        </div>
      </div>
      <CarouselInner>
        {slides.map(({ label, width }, index) => (
          <CarouselItem key={label} active={index === 0} style={{ width }}>
            <CarouselSlidePlaceholder label={label} />
          </CarouselItem>
        ))}
      </CarouselInner>
    </Carousel>
  );
}

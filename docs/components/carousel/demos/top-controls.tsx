import { Carousel, CarouselControl, CarouselInner, CarouselItem } from 'react-bootstrap-pro';

import { CarouselSlidePlaceholder } from './shared';

export function CarouselTopControlsDemo() {
  return (
    <Carousel>
      <div className='d-flex justify-content-between align-items-center'>
        <h5 className='mb-0'>Top controls</h5>
        <div>
          <CarouselControl direction='previous' size='sm' />
          <CarouselControl direction='next' size='sm' />
        </div>
      </div>
      <CarouselInner className='rounded-5'>
        <CarouselItem active>
          <CarouselSlidePlaceholder label='First slide' />
        </CarouselItem>
        <CarouselItem>
          <CarouselSlidePlaceholder label='Second slide' />
        </CarouselItem>
        <CarouselItem>
          <CarouselSlidePlaceholder label='Third slide' />
        </CarouselItem>
      </CarouselInner>
    </Carousel>
  );
}

import { Carousel, CarouselControl, CarouselInner, CarouselItem } from 'react-bootstrap-pro';

import { CarouselSlidePlaceholder } from './shared';

export function CarouselEndStopDemo() {
  return (
    <Carousel id='carouselEndsStop' ends='stop'>
      <div className='d-flex justify-content-between align-items-center'>
        <h5 className='mb-0'>Stop at the ends</h5>
        <div>
          <CarouselControl target='#carouselEndsStop' direction='previous' size='sm' />
          <CarouselControl target='#carouselEndsStop' direction='next' size='sm' />
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

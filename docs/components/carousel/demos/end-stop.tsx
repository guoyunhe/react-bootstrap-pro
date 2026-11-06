import { Carousel, CarouselControl, CarouselInner, CarouselItem } from 'react-bootstrap-pro';

import { CarouselSlidePlaceholder } from './shared';

export function CarouselEndStopDemo() {
  return (
    <Carousel ends='stop'>
      <div className='d-flex justify-content-between align-items-center'>
        <h5 className='mb-0'>Stop at the ends</h5>
        <div>
          <CarouselControl direction='previous' size='sm' />
          <CarouselControl direction='next' size='sm' />
        </div>
      </div>
      <CarouselInner className='rounded-5'>
        <CarouselItem active>
          <CarouselSlidePlaceholder>First slide</CarouselSlidePlaceholder>
        </CarouselItem>
        <CarouselItem>
          <CarouselSlidePlaceholder>Second slide</CarouselSlidePlaceholder>
        </CarouselItem>
        <CarouselItem>
          <CarouselSlidePlaceholder>Third slide</CarouselSlidePlaceholder>
        </CarouselItem>
      </CarouselInner>
    </Carousel>
  );
}

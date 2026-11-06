import { Carousel, CarouselControl, CarouselInner, CarouselItem } from 'react-bootstrap-pro';

import { CarouselSlidePlaceholder } from './shared';

export function CarouselBottomControlsDemo() {
  return (
    <Carousel>
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
      <div>
        <CarouselControl direction='previous' size='sm' />
        <CarouselControl direction='next' size='sm' />
      </div>
    </Carousel>
  );
}

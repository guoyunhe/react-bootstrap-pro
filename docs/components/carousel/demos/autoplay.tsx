import {
  Carousel,
  CarouselControl,
  CarouselIndicator,
  CarouselIndicators,
  CarouselInner,
  CarouselItem,
  CarouselPlayPause,
} from 'react-bootstrap-pro';

import { CarouselSlidePlaceholder } from './shared';

export function CarouselAutoplayDemo() {
  return (
    <Carousel autoplay>
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
      <div className='d-flex justify-content-between align-items-center mt-3'>
        <CarouselIndicators>
          <CarouselIndicator index={0} active />
          <CarouselIndicator index={1} />
          <CarouselIndicator index={2} />
        </CarouselIndicators>
        <div>
          <CarouselPlayPause size='sm' />
          <CarouselControl direction='previous' size='sm' />
          <CarouselControl direction='next' size='sm' />
        </div>
      </div>
    </Carousel>
  );
}

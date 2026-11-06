import {
  Carousel,
  CarouselControl,
  CarouselIndicator,
  CarouselIndicators,
  CarouselInner,
  CarouselItem,
} from 'react-bootstrap-pro';

import { CarouselSlidePlaceholder } from './shared';

export function CarouselIndicatorsDemo() {
  return (
    <Carousel>
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
      <div className='d-flex justify-content-between align-items-center'>
        <div>
          <CarouselControl direction='previous' size='sm' />
          <CarouselControl direction='next' size='sm' />
        </div>
        <CarouselIndicators>
          <CarouselIndicator index={0} active />
          <CarouselIndicator index={1} />
          <CarouselIndicator index={2} />
        </CarouselIndicators>
      </div>
    </Carousel>
  );
}

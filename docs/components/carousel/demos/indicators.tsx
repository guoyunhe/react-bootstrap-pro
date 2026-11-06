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
    <Carousel id='carouselStackedIndicators' slide>
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
          <CarouselControl target='#carouselStackedIndicators' direction='previous' size='sm' />
          <CarouselControl target='#carouselStackedIndicators' direction='next' size='sm' />
        </div>
        <CarouselIndicators>
          <CarouselIndicator target='#carouselStackedIndicators' index={0} active />
          <CarouselIndicator target='#carouselStackedIndicators' index={1} />
          <CarouselIndicator target='#carouselStackedIndicators' index={2} />
        </CarouselIndicators>
      </div>
    </Carousel>
  );
}

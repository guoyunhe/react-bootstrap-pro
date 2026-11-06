import {
  Carousel,
  CarouselIndicator,
  CarouselIndicators,
  CarouselInner,
  CarouselItem,
  CarouselPlayPause,
} from 'react-bootstrap-pro';

import { CarouselSlidePlaceholder } from './shared';

export function CarouselIndividualIntervalsDemo() {
  return (
    <Carousel autoplay>
      <CarouselInner className='rounded-5'>
        <CarouselItem active interval={2000}>
          <CarouselSlidePlaceholder label='First: 2 seconds' />
        </CarouselItem>
        <CarouselItem interval={4000}>
          <CarouselSlidePlaceholder label='Second: 4 seconds' />
        </CarouselItem>
        <CarouselItem interval={6000}>
          <CarouselSlidePlaceholder label='Third: 6 seconds' />
        </CarouselItem>
      </CarouselInner>
      <div className='d-flex justify-content-between align-items-center mt-3'>
        <CarouselIndicators>
          <CarouselIndicator index={0} active />
          <CarouselIndicator index={1} />
          <CarouselIndicator index={2} />
        </CarouselIndicators>
        <CarouselPlayPause size='sm' />
      </div>
    </Carousel>
  );
}

import {
  Carousel,
  CarouselIndicator,
  CarouselIndicators,
  CarouselInner,
  CarouselItem,
  IconButton,
} from 'react-bootstrap-pro';

import { CarouselSlidePlaceholder } from './shared';

export function CarouselIndividualIntervalsDemo() {
  return (
    <Carousel id='carouselExampleInterval' data-bs-autoplay='true'>
      <CarouselInner className='rounded-5'>
        <CarouselItem active data-bs-interval={2000}>
          <CarouselSlidePlaceholder label='First: 2 seconds' />
        </CarouselItem>
        <CarouselItem data-bs-interval={4000}>
          <CarouselSlidePlaceholder label='Second: 4 seconds' />
        </CarouselItem>
        <CarouselItem data-bs-interval={6000}>
          <CarouselSlidePlaceholder label='Third: 6 seconds' />
        </CarouselItem>
      </CarouselInner>
      <div className='d-flex justify-content-between align-items-center mt-3'>
        <CarouselIndicators>
          <CarouselIndicator target='#carouselExampleInterval' index={0} active />
          <CarouselIndicator target='#carouselExampleInterval' index={1} />
          <CarouselIndicator target='#carouselExampleInterval' index={2} />
        </CarouselIndicators>
        <IconButton
          className='carousel-control-play-pause'
          size='sm'
          aria-label='Pause'
          data-bs-target='#carouselExampleInterval'
          data-bs-pause-label='Pause'
          data-bs-play-label='Play'
        >
          <span className='carousel-icon-pause' aria-hidden='true' />
          <span className='carousel-icon-play' aria-hidden='true' />
        </IconButton>
      </div>
    </Carousel>
  );
}

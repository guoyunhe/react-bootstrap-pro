import {
  Carousel,
  CarouselControl,
  CarouselIndicator,
  CarouselIndicators,
  CarouselInner,
  CarouselItem,
  IconButton,
} from 'react-bootstrap-pro';

import { CarouselSlidePlaceholder } from './shared';

export function CarouselAutoplayDemo() {
  return (
    <Carousel id='carouselExampleAutoplaying' data-bs-autoplay='true'>
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
          <CarouselIndicator target='#carouselExampleAutoplaying' index={0} active />
          <CarouselIndicator target='#carouselExampleAutoplaying' index={1} />
          <CarouselIndicator target='#carouselExampleAutoplaying' index={2} />
        </CarouselIndicators>
        <div>
          <IconButton
            className='carousel-control-play-pause'
            size='sm'
            aria-label='Pause'
            data-bs-target='#carouselExampleAutoplaying'
            data-bs-pause-label='Pause'
            data-bs-play-label='Play'
          >
            <span className='carousel-icon-pause' aria-hidden='true' />
            <span className='carousel-icon-play' aria-hidden='true' />
          </IconButton>
          <CarouselControl target='#carouselExampleAutoplaying' direction='previous' size='sm' />
          <CarouselControl target='#carouselExampleAutoplaying' direction='next' size='sm' />
        </div>
      </div>
    </Carousel>
  );
}

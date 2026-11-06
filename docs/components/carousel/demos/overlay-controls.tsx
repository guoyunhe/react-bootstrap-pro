import {
  Carousel,
  CarouselControl,
  CarouselIndicator,
  CarouselIndicators,
  CarouselInner,
  CarouselItem,
  CarouselOverlayControls,
} from 'react-bootstrap-pro';

import { CarouselSlidePlaceholder } from './shared';

export function CarouselOverlayControlsDemo() {
  return (
    <Carousel id='carouselExample' overlay>
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
      <CarouselOverlayControls>
        <div>
          <CarouselControl
            target='#carouselExample'
            direction='previous'
            size='sm'
            variant='subtle'
            theme='secondary'
          />
          <CarouselControl
            target='#carouselExample'
            direction='next'
            size='sm'
            variant='subtle'
            theme='secondary'
          />
        </div>
        <CarouselIndicators>
          <CarouselIndicator target='#carouselExample' index={0} active />
          <CarouselIndicator target='#carouselExample' index={1} />
          <CarouselIndicator target='#carouselExample' index={2} />
        </CarouselIndicators>
      </CarouselOverlayControls>
    </Carousel>
  );
}

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
    <Carousel overlay>
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
          <CarouselControl direction='previous' size='sm' variant='subtle' theme='secondary' />
          <CarouselControl direction='next' size='sm' variant='subtle' theme='secondary' />
        </div>
        <CarouselIndicators>
          <CarouselIndicator index={0} active />
          <CarouselIndicator index={1} />
          <CarouselIndicator index={2} />
        </CarouselIndicators>
      </CarouselOverlayControls>
    </Carousel>
  );
}

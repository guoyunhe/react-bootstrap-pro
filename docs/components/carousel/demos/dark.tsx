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

export function CarouselDarkDemo() {
  return (
    <Carousel overlay colorMode='dark'>
      <CarouselInner>
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
        <CarouselControl direction='previous' size='sm' variant='subtle' theme='secondary' />
        <CarouselIndicators>
          <CarouselIndicator index={0} active />
          <CarouselIndicator index={1} />
          <CarouselIndicator index={2} />
        </CarouselIndicators>
        <CarouselControl direction='next' size='sm' variant='subtle' theme='secondary' />
      </CarouselOverlayControls>
    </Carousel>
  );
}

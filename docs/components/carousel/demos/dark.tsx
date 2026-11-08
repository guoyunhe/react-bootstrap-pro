import {
  Carousel,
  CarouselControl,
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
          <CarouselSlidePlaceholder>First slide</CarouselSlidePlaceholder>
        </CarouselItem>
        <CarouselItem>
          <CarouselSlidePlaceholder>Second slide</CarouselSlidePlaceholder>
        </CarouselItem>
        <CarouselItem>
          <CarouselSlidePlaceholder>Third slide</CarouselSlidePlaceholder>
        </CarouselItem>
      </CarouselInner>
      <CarouselOverlayControls>
        <CarouselControl direction='previous' size='sm' variant='subtle' theme='secondary' />
        <CarouselIndicators />
        <CarouselControl direction='next' size='sm' variant='subtle' theme='secondary' />
      </CarouselOverlayControls>
    </Carousel>
  );
}

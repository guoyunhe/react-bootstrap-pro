import {
  Carousel,
  CarouselControl,
  CarouselIndicators,
  CarouselInner,
  CarouselItem,
  CarouselOverlayControls,
} from 'react-bootstrap-pro';

import { CarouselSlidePlaceholder } from './shared';

export function CarouselOverlayControlsDemo() {
  return (
    <Carousel overlay>
      <CarouselInner rounded={5}>
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
        <div>
          <CarouselControl direction='previous' size='sm' variant='subtle' theme='secondary' />
          <CarouselControl direction='next' size='sm' variant='subtle' theme='secondary' />
        </div>
        <CarouselIndicators />
      </CarouselOverlayControls>
    </Carousel>
  );
}

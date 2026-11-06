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
    <Carousel id='carouselExampleDark' overlay colorMode='dark'>
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
        <CarouselControl
          target='#carouselExampleDark'
          direction='previous'
          size='sm'
          variant='subtle'
          theme='secondary'
        />
        <CarouselIndicators>
          <CarouselIndicator target='#carouselExampleDark' index={0} active />
          <CarouselIndicator target='#carouselExampleDark' index={1} />
          <CarouselIndicator target='#carouselExampleDark' index={2} />
        </CarouselIndicators>
        <CarouselControl
          target='#carouselExampleDark'
          direction='next'
          size='sm'
          variant='subtle'
          theme='secondary'
        />
      </CarouselOverlayControls>
    </Carousel>
  );
}

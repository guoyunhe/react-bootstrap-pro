import { Carousel, CarouselControl, CarouselInner, CarouselItem } from 'react-bootstrap-pro';

import { CarouselSlidePlaceholder } from './shared';

export function CarouselBottomControlsDemo() {
  return (
    <Carousel id='carouselStackedBottom'>
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
      <div>
        <CarouselControl target='#carouselStackedBottom' direction='previous' size='sm' />
        <CarouselControl target='#carouselStackedBottom' direction='next' size='sm' />
      </div>
    </Carousel>
  );
}

import { Carousel, CarouselControl, CarouselInner, CarouselItem } from 'react-bootstrap-pro';

import { CarouselSlidePlaceholder } from './shared';

export function CarouselCrossfadeDemo() {
  return (
    <Carousel id='carouselExampleFade' effect='fade'>
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
        <CarouselControl target='#carouselExampleFade' direction='previous' size='sm' />
        <CarouselControl target='#carouselExampleFade' direction='next' size='sm' />
      </div>
    </Carousel>
  );
}

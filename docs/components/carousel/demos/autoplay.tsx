import {
  Box,
  Carousel,
  CarouselControl,
  CarouselIndicators,
  CarouselInner,
  CarouselItem,
  CarouselPlayPause,
} from 'react-bootstrap-pro';

import { CarouselSlidePlaceholder } from './shared';

export function CarouselAutoplayDemo() {
  return (
    <Carousel autoplay>
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
      <Box d='flex' justifyContent='between' alignItems='center' mt={3}>
        <CarouselIndicators />
        <div>
          <CarouselPlayPause size='sm' />
          <CarouselControl direction='previous' size='sm' />
          <CarouselControl direction='next' size='sm' />
        </div>
      </Box>
    </Carousel>
  );
}

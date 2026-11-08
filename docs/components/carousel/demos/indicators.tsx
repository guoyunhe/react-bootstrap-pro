import {
  Box,
  Carousel,
  CarouselControl,
  CarouselIndicators,
  CarouselInner,
  CarouselItem,
} from 'react-bootstrap-pro';

import { CarouselSlidePlaceholder } from './shared';

export function CarouselIndicatorsDemo() {
  return (
    <Carousel>
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
      <Box d='flex' justifyContent='between' alignItems='center'>
        <div>
          <CarouselControl direction='previous' size='sm' />
          <CarouselControl direction='next' size='sm' />
        </div>
        <CarouselIndicators />
      </Box>
    </Carousel>
  );
}

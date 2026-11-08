import {
  Box,
  Carousel,
  CarouselIndicators,
  CarouselInner,
  CarouselItem,
  CarouselPlayPause,
} from 'react-bootstrap-pro';

import { CarouselSlidePlaceholder } from './shared';

export function CarouselIndividualIntervalsDemo() {
  return (
    <Carousel autoplay>
      <CarouselInner rounded={5}>
        <CarouselItem active interval={2000}>
          <CarouselSlidePlaceholder>First: 2 seconds</CarouselSlidePlaceholder>
        </CarouselItem>
        <CarouselItem interval={4000}>
          <CarouselSlidePlaceholder>Second: 4 seconds</CarouselSlidePlaceholder>
        </CarouselItem>
        <CarouselItem interval={6000}>
          <CarouselSlidePlaceholder>Third: 6 seconds</CarouselSlidePlaceholder>
        </CarouselItem>
      </CarouselInner>
      <Box d='flex' justifyContent='between' alignItems='center' mt={3}>
        <CarouselIndicators />
        <CarouselPlayPause size='sm' />
      </Box>
    </Carousel>
  );
}

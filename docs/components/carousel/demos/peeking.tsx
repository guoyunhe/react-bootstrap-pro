import { Box, Carousel, CarouselControl, CarouselInner, CarouselItem } from 'react-bootstrap-pro';

import { CarouselSlidePlaceholder } from './shared';

export function CarouselPeekingDemo() {
  const slides = ['First slide', 'Second slide', 'Third slide', 'Fourth slide', 'Fifth slide'];

  return (
    <Carousel ends='stop' itemsGap='1rem' itemsPeek='3rem'>
      <Box d='flex' justifyContent='between' alignItems='center'>
        <h5 className='mb-0'>Peek the neighbors</h5>
        <div>
          <CarouselControl direction='previous' size='sm' />
          <CarouselControl direction='next' size='sm' />
        </div>
      </Box>
      <CarouselInner>
        {slides.map((label, index) => (
          <CarouselItem key={label} active={index === 0}>
            <CarouselSlidePlaceholder rounded>{label}</CarouselSlidePlaceholder>
          </CarouselItem>
        ))}
      </CarouselInner>
    </Carousel>
  );
}

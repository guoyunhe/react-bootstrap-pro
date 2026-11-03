import {
  Carousel,
  CarouselInner,
  CarouselItem,
  CarouselOverlayControls,
  CarouselControl,
  CarouselIndicators,
  CarouselIndicator,
} from 'react-bootstrap-pro';

export function CarouselBasicDemo() {
  return (
    <Carousel id='features' overlay>
      <CarouselInner>
        <CarouselItem active>First slide</CarouselItem>
        <CarouselItem>Second slide</CarouselItem>
      </CarouselInner>
      <CarouselOverlayControls>
        <CarouselControl target='#features' direction='previous' />
        <CarouselIndicators>
          <CarouselIndicator target='#features' index={0} active />
          <CarouselIndicator target='#features' index={1} />
        </CarouselIndicators>
        <CarouselControl target='#features' direction='next' />
      </CarouselOverlayControls>
    </Carousel>
  );
}

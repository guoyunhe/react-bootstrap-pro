import { Carousel, CarouselControl, CarouselInner, CarouselItem } from 'react-bootstrap-pro';

export function CarouselCustomContentDemo() {
  return (
    <Carousel id='carouselExampleContent' slide>
      <CarouselInner className='rounded-5'>
        <CarouselItem active>
          <div
            className='d-flex flex-column justify-content-center bg-subtle-primary p-9 bg-1 rounded-5'
            style={{ minHeight: 320 }}
          >
            <h3>Build anything</h3>
            <p className='fg-emphasis-secondary mb-3'>
              Compose slides from your own markup—text, buttons, cards, or media.
            </p>
            <div>
              <a className='btn-solid theme-primary' href='#'>
                Get started
              </a>
            </div>
          </div>
        </CarouselItem>
        <CarouselItem>
          <div
            className='d-flex flex-column justify-content-center text-center bg-subtle-success p-9 bg-2 rounded-5'
            style={{ minHeight: 320 }}
          >
            <h3>Style it your way</h3>
            <p className='fg-emphasis-secondary mb-3'>
              Use utilities or custom CSS to size and theme each slide however you need.
            </p>
            <div>
              <a className='btn-solid theme-success' href='#'>
                Learn more
              </a>
            </div>
          </div>
        </CarouselItem>
        <CarouselItem>
          <div
            className='d-flex flex-column justify-content-center text-end bg-subtle-warning p-9 bg-3 rounded-5'
            style={{ minHeight: 320 }}
          >
            <h3>Mix and match</h3>
            <p className='fg-emphasis-secondary mb-3'>
              Combine custom content with controls, indicators, and the overlay layout.
            </p>
            <div>
              <a className='btn-solid theme-inverse' href='#'>
                Browse examples
              </a>
            </div>
          </div>
        </CarouselItem>
      </CarouselInner>
      <div className='d-flex justify-content-center gap-2'>
        <CarouselControl target='#carouselExampleContent' direction='previous' size='sm' />
        <CarouselControl target='#carouselExampleContent' direction='next' size='sm' />
      </div>
    </Carousel>
  );
}

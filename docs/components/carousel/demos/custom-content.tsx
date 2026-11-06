import { Box, Carousel, CarouselControl, CarouselInner, CarouselItem } from 'react-bootstrap-pro';

export function CarouselCustomContentDemo() {
  return (
    <Carousel>
      <CarouselInner rounded={5}>
        <CarouselItem active>
          <Box
            d='flex'
            flexDirection='column'
            justifyContent='center'
            bg='primary'
            bgv='subtle'
            p={9}
            className='bg-1'
            rounded={5}
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
          </Box>
        </CarouselItem>
        <CarouselItem>
          <Box
            d='flex'
            flexDirection='column'
            justifyContent='center'
            textAlign='center'
            bg='success'
            bgv='subtle'
            p={9}
            className='bg-2'
            rounded={5}
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
          </Box>
        </CarouselItem>
        <CarouselItem>
          <Box
            d='flex'
            flexDirection='column'
            justifyContent='center'
            textAlign='end'
            bg='warning'
            bgv='subtle'
            p={9}
            className='bg-3'
            rounded={5}
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
          </Box>
        </CarouselItem>
      </CarouselInner>
      <Box d='flex' justifyContent='center' gap={2}>
        <CarouselControl direction='previous' size='sm' />
        <CarouselControl direction='next' size='sm' />
      </Box>
    </Carousel>
  );
}

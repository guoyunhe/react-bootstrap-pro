import { Box, Button, Popover, PopoverBody } from 'react-bootstrap-pro';

export function PopoverResponsivePlacementDemo() {
  return (
    <Box d='flex' flexWrap='wrap' gap={2} py={5}>
      <Popover
        placement={{ xs: 'top', md: 'end', lg: 'bottom' }}
        trigger={
          <Button variant='solid' theme='secondary'>
            Top → md:right → lg:bottom
          </Button>
        }
      >
        <PopoverBody>This popover changes placement at different breakpoints.</PopoverBody>
      </Popover>
      <Popover
        placement={{ xs: 'start', lg: 'top' }}
        trigger={
          <Button variant='solid' theme='secondary'>
            Left → lg:top
          </Button>
        }
      >
        <PopoverBody>Responsive popover placement.</PopoverBody>
      </Popover>
    </Box>
  );
}

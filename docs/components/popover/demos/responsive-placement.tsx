import { Box, Button, Popover, PopoverBody } from 'react-bootstrap-pro';

export function PopoverResponsivePlacementDemo() {
  return (
    <Box py={5}>
      <Popover
        placement={{ xs: 'bottom', md: 'end' }}
        trigger={
          <Button variant='solid' theme='secondary'>
            Responsive placement
          </Button>
        }
      >
        <PopoverBody>Bottom below 768px; end at 768px and above.</PopoverBody>
      </Popover>
    </Box>
  );
}

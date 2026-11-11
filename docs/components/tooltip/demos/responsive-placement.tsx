import { Box, Button, Tooltip } from 'react-bootstrap-pro';

export function TooltipResponsivePlacementDemo() {
  return (
    <Box d='flex' flexWrap='wrap' justifyContent='center' gap={3}>
      <Tooltip
        placement={{ xs: 'top', md: 'right', lg: 'bottom' }}
        trigger={
          <Button theme='secondary' variant='solid'>
            Top → md: right → lg: bottom
          </Button>
        }
      >
        Responsive tooltip
      </Tooltip>
      <Tooltip
        placement={{ xs: 'left', lg: 'top' }}
        trigger={
          <Button theme='secondary' variant='solid'>
            Left → lg: top
          </Button>
        }
      >
        Responsive tooltip
      </Tooltip>
    </Box>
  );
}

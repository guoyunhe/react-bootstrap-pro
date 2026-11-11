import { Box, Button, Tooltip } from 'react-bootstrap-pro';

export function TooltipPlacementDemo() {
  return (
    <Box d='flex' flexWrap='wrap' justifyContent='center' gap={3}>
      <Tooltip
        placement='left'
        trigger={
          <Button theme='secondary' variant='solid'>
            Tooltip on left
          </Button>
        }
      >
        Tooltip on left
      </Tooltip>
      <Tooltip
        placement='top'
        trigger={
          <Button theme='secondary' variant='solid'>
            Tooltip on top
          </Button>
        }
      >
        Tooltip on top
      </Tooltip>
      <Tooltip
        placement='bottom'
        trigger={
          <Button theme='secondary' variant='solid'>
            Tooltip on bottom
          </Button>
        }
      >
        Tooltip on bottom
      </Tooltip>
      <Tooltip
        placement='right'
        trigger={
          <Button theme='secondary' variant='solid'>
            Tooltip on right
          </Button>
        }
      >
        Tooltip on right
      </Tooltip>
    </Box>
  );
}

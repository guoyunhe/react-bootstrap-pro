import { Box, Button } from 'react-bootstrap-pro';

export function ButtonSizesDemo() {
  return (
    <Box d='flex' flexWrap='wrap' alignItems='center' gap={2}>
      <Button variant='solid' theme='primary' size='xs'>
        Extra small primary
      </Button>
      <Button variant='solid' theme='secondary' size='xs'>
        Extra small secondary
      </Button>
      <Button variant='solid' theme='primary' size='sm'>
        Small primary
      </Button>
      <Button variant='solid' theme='secondary' size='sm'>
        Small secondary
      </Button>
      <Button variant='solid' theme='primary' size='lg'>
        Large primary
      </Button>
      <Button variant='solid' theme='secondary' size='lg'>
        Large secondary
      </Button>
      <Button variant='solid' theme='primary'>
        Default size
      </Button>
    </Box>
  );
}

import { Box, Button } from 'react-bootstrap-pro';

export function ButtonSizesDemo() {
  return (
    <Box display='flex' flexWrap='wrap' alignItems='center' gap={2}>
      <Button variant='solid' theme='primary' size='xs'>
        Extra small
      </Button>
      <Button variant='solid' theme='primary' size='sm'>
        Small
      </Button>
      <Button variant='solid' theme='primary'>
        Default
      </Button>
      <Button variant='solid' theme='primary' size='lg'>
        Large
      </Button>
    </Box>
  );
}

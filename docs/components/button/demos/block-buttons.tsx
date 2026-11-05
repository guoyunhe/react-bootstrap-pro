import { Box, Button } from 'react-bootstrap-pro';

export function ButtonBlockDemo() {
  return (
    <Box d='flex' flexDirection='column' gap={3}>
      <Box d='grid' gap={2}>
        <Button variant='solid' theme='primary'>
          Button
        </Button>
        <Button variant='solid' theme='primary'>
          Button
        </Button>
      </Box>
      <Box d={{ xs: 'grid', md: 'block' }} gap={2}>
        <Button variant='solid' theme='primary'>
          Button
        </Button>
        <Button variant='solid' theme='primary'>
          Button
        </Button>
      </Box>
      <Box d='grid' gap={2} className='col-6 mx-auto'>
        <Button variant='solid' theme='primary'>
          Button
        </Button>
        <Button variant='solid' theme='primary'>
          Button
        </Button>
      </Box>
      <Box d={{ xs: 'grid', md: 'flex' }} justifyContent={{ md: 'end' }} gap={2}>
        <Button variant='solid' theme='primary' me={{ md: 2 }}>
          Button
        </Button>
        <Button variant='solid' theme='primary'>
          Button
        </Button>
      </Box>
    </Box>
  );
}

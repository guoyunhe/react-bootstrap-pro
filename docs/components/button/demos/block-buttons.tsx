import { Box, Button } from 'react-bootstrap-pro';

export function ButtonBlockDemo() {
  return (
    <Box d='flex' flexDirection='column' gap={3}>
      <Box d='grid' gap={2}>
        <Button variant='solid' theme='primary'>
          Primary action
        </Button>
        <Button variant='outline' theme='secondary'>
          Secondary action
        </Button>
      </Box>
      <Box d={{ xs: 'grid', md: 'flex' }} justifyContent={{ md: 'end' }} gap={2}>
        <Button variant='solid' theme='primary' me={{ md: 2 }}>
          Responsive primary action
        </Button>
        <Button variant='outline' theme='secondary'>
          Responsive secondary action
        </Button>
      </Box>
    </Box>
  );
}

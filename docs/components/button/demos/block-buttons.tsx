import { Box, Button } from 'react-bootstrap-pro';

export function ButtonBlockDemo() {
  return (
    <Box display='flex' flexDirection='column' gap={3}>
      <Box display='grid' gap={2}>
        <Button variant='solid' theme='primary'>
          Primary action
        </Button>
        <Button variant='outline' theme='secondary'>
          Secondary action
        </Button>
      </Box>
      <Box display={{ xs: 'grid', md: 'flex' }} justifyContent={{ md: 'end' }} gap={2}>
        <Button variant='solid' theme='primary' marginEnd={{ md: 2 }}>
          Responsive primary action
        </Button>
        <Button variant='outline' theme='secondary'>
          Responsive secondary action
        </Button>
      </Box>
    </Box>
  );
}

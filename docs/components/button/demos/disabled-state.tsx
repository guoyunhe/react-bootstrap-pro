import { Box, Button } from 'react-bootstrap-pro';

export function ButtonDisabledDemo() {
  return (
    <Box display='flex' flexWrap='wrap' alignItems='center' gap={2}>
      <Button variant='solid' theme='primary' disabled>
        Disabled solid
      </Button>
      <Button variant='outline' theme='secondary' disabled>
        Disabled outline
      </Button>
      <Button component='a' variant='solid' theme='primary' href='#disabled' disabled>
        Disabled link
      </Button>
    </Box>
  );
}

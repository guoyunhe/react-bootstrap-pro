import { Box, Button } from 'react-bootstrap-pro';

export function ButtonDisabledDemo() {
  return (
    <Box d='flex' flexWrap='wrap' alignItems='center' gap={2}>
      <Button variant='solid' theme='primary' disabled>
        Disabled primary button
      </Button>
      <Button variant='solid' theme='secondary' disabled>
        Disabled secondary button
      </Button>
      <Button variant='outline' theme='primary' disabled>
        Disabled primary outline
      </Button>
      <Button variant='outline' theme='secondary' disabled>
        Disabled secondary outline
      </Button>
      <Button component='a' variant='solid' theme='primary' href='#disabled' disabled>
        Disabled link with href
      </Button>
      <Button component='a' variant='solid' theme='secondary' role='button' disabled>
        Disabled link without href
      </Button>
    </Box>
  );
}

import { Box, Button } from 'react-bootstrap-pro';

export function ButtonInputToggleDemo() {
  return (
    <Box d='flex' flexDirection='column' gap={3}>
      <Box d='flex' flexWrap='wrap' gap={2}>
        <Button component='label' variant='solid' theme='primary' check>
          <input type='checkbox' defaultChecked />
          {' Checked'}
        </Button>
        <Button component='label' variant='solid' theme='primary' check>
          <input type='checkbox' />
          {' Toggle'}
        </Button>
        <Button component='label' variant='solid' theme='primary' check>
          <input type='checkbox' disabled />
          {' Disabled'}
        </Button>
      </Box>
      <Box d='flex' flexWrap='wrap' gap={2}>
        <Button component='label' variant='outline' theme='secondary' check>
          <input type='radio' name='button-demo-options' defaultChecked />
          {' First'}
        </Button>
        <Button component='label' variant='outline' theme='secondary' check>
          <input type='radio' name='button-demo-options' />
          {' Second'}
        </Button>
        <Button component='label' variant='outline' theme='secondary' check>
          <input type='radio' name='button-demo-options' disabled />
          {' Disabled'}
        </Button>
      </Box>
    </Box>
  );
}

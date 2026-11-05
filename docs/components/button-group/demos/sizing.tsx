import { Box, Button, ButtonGroup } from 'react-bootstrap-pro';

export function ButtonGroupSizingDemo() {
  return (
    <Box d='flex' flexDirection='column' alignItems='center' gap={3}>
      <ButtonGroup size='lg' aria-label='Large button group'>
        <Button variant='outline' theme='primary'>
          Left
        </Button>
        <Button variant='outline' theme='primary'>
          Middle
        </Button>
        <Button variant='outline' theme='primary'>
          Right
        </Button>
      </ButtonGroup>
      <ButtonGroup aria-label='Default button group'>
        <Button variant='outline' theme='primary'>
          Left
        </Button>
        <Button variant='outline' theme='primary'>
          Middle
        </Button>
        <Button variant='outline' theme='primary'>
          Right
        </Button>
      </ButtonGroup>
      <ButtonGroup size='sm' aria-label='Small button group'>
        <Button variant='outline' theme='primary'>
          Left
        </Button>
        <Button variant='outline' theme='primary'>
          Middle
        </Button>
        <Button variant='outline' theme='primary'>
          Right
        </Button>
      </ButtonGroup>
      <ButtonGroup className='btn-group-xs' aria-label='Extra small button group'>
        <Button variant='outline' theme='primary'>
          Left
        </Button>
        <Button variant='outline' theme='primary'>
          Middle
        </Button>
        <Button variant='outline' theme='primary'>
          Right
        </Button>
      </ButtonGroup>
    </Box>
  );
}

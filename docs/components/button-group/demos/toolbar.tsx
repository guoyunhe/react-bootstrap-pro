import { Button, ButtonGroup, ButtonToolbar } from 'react-bootstrap-pro';

export function ButtonToolbarDemo() {
  return (
    <ButtonToolbar aria-label='Toolbar with button groups' gap={2}>
      <ButtonGroup aria-label='First group'>
        <Button variant='solid' theme='primary'>
          1
        </Button>
        <Button variant='solid' theme='primary'>
          2
        </Button>
        <Button variant='solid' theme='primary'>
          3
        </Button>
        <Button variant='solid' theme='primary'>
          4
        </Button>
      </ButtonGroup>
      <ButtonGroup aria-label='Second group'>
        <Button variant='solid' theme='secondary'>
          5
        </Button>
        <Button variant='solid' theme='secondary'>
          6
        </Button>
        <Button variant='solid' theme='secondary'>
          7
        </Button>
      </ButtonGroup>
      <ButtonGroup aria-label='Third group'>
        <Button variant='solid' theme='info'>
          8
        </Button>
      </ButtonGroup>
    </ButtonToolbar>
  );
}

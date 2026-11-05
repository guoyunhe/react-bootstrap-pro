import { ButtonGroup, Button } from 'react-bootstrap-pro';

export function ButtonGroupBasicDemo() {
  return (
    <ButtonGroup aria-label='Basic example'>
      <Button variant='solid' theme='primary'>
        Left
      </Button>
      <Button variant='solid' theme='primary'>
        Middle
      </Button>
      <Button variant='solid' theme='primary'>
        Right
      </Button>
    </ButtonGroup>
  );
}

import { ButtonGroup, Button } from 'react-bootstrap-pro';

export function ButtonGroupBasicDemo() {
  return (
    <ButtonGroup aria-label='Text alignment'>
      <Button variant='outline' theme='secondary'>
        Left
      </Button>
      <Button variant='outline' theme='secondary'>
        Center
      </Button>
      <Button variant='outline' theme='secondary'>
        Right
      </Button>
    </ButtonGroup>
  );
}

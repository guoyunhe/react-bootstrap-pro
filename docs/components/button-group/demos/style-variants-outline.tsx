import { Button, ButtonGroup } from 'react-bootstrap-pro';

export function ButtonGroupStyleVariantsOutlineDemo() {
  return (
    <ButtonGroup aria-label='Outlined button styles'>
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
  );
}

import { Button, ButtonGroup } from 'react-bootstrap-pro';

export function ButtonGroupStyleVariantsSubtleDemo() {
  return (
    <ButtonGroup divider aria-label='Subtle button styles'>
      <Button variant='subtle' theme='primary'>
        Left
      </Button>
      <Button variant='subtle' theme='primary'>
        Middle
      </Button>
      <Button variant='subtle' theme='primary'>
        Right
      </Button>
    </ButtonGroup>
  );
}

import { Button, ButtonGroup } from 'react-bootstrap-pro';

export function ButtonGroupStyleVariantsSolidDemo() {
  return (
    <ButtonGroup divider aria-label='Solid button styles'>
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

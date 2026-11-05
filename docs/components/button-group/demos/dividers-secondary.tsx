import { Button, ButtonGroup } from 'react-bootstrap-pro';

export function ButtonGroupDividersSecondaryDemo() {
  return (
    <ButtonGroup divider aria-label='Secondary actions with dividers'>
      <Button variant='solid' theme='secondary'>
        Left
      </Button>
      <Button variant='solid' theme='secondary'>
        Right
      </Button>
    </ButtonGroup>
  );
}

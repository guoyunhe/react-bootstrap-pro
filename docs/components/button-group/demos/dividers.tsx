import { Button, ButtonGroup } from 'react-bootstrap-pro';

export function ButtonGroupDividersDemo() {
  return (
    <ButtonGroup divider aria-label='Primary actions with dividers'>
      <Button variant='solid' theme='primary'>
        Left
      </Button>
      <Button variant='solid' theme='primary' active>
        Active
      </Button>
      <Button variant='solid' theme='primary'>
        Right
      </Button>
    </ButtonGroup>
  );
}

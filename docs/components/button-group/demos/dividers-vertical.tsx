import { Button, ButtonGroup } from 'react-bootstrap-pro';

export function ButtonGroupVerticalDividersDemo() {
  return (
    <ButtonGroup orientation='vertical' divider aria-label='Vertical primary actions with dividers'>
      <Button variant='solid' theme='primary'>
        Top
      </Button>
      <Button variant='solid' theme='primary' active>
        Active
      </Button>
      <Button variant='solid' theme='primary'>
        Bottom
      </Button>
    </ButtonGroup>
  );
}

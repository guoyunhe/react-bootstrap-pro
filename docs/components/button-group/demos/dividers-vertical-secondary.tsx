import { Button, ButtonGroup } from 'react-bootstrap-pro';

export function ButtonGroupVerticalDividersSecondaryDemo() {
  return (
    <ButtonGroup
      orientation='vertical'
      divider
      aria-label='Vertical secondary actions with dividers'
    >
      <Button variant='solid' theme='secondary'>
        Top
      </Button>
      <Button variant='solid' theme='secondary'>
        Bottom
      </Button>
    </ButtonGroup>
  );
}

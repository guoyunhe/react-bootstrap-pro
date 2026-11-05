import { Button, ButtonGroup } from 'react-bootstrap-pro';

export function ButtonGroupVerticalDemo() {
  return (
    <ButtonGroup orientation='vertical' aria-label='Vertical button group'>
      <Button variant='solid' theme='primary'>
        Button
      </Button>
      <Button variant='solid' theme='primary'>
        Button
      </Button>
      <Button variant='solid' theme='primary'>
        Button
      </Button>
      <Button variant='solid' theme='primary'>
        Button
      </Button>
    </ButtonGroup>
  );
}

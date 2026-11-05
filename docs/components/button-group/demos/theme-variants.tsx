import { Button, ButtonGroup } from 'react-bootstrap-pro';

export function ButtonGroupThemeVariantsDemo() {
  return (
    <ButtonGroup aria-label='Accent theme example'>
      <Button variant='solid' theme='accent'>
        Left
      </Button>
      <Button variant='solid' theme='accent'>
        Middle
      </Button>
      <Button variant='solid' theme='accent'>
        Right
      </Button>
    </ButtonGroup>
  );
}

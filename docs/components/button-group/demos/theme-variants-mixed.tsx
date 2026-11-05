import { Button, ButtonGroup } from 'react-bootstrap-pro';

export function ButtonGroupThemeVariantsMixedDemo() {
  return (
    <ButtonGroup aria-label='Mixed theme example'>
      <Button variant='solid' theme='danger'>
        Left
      </Button>
      <Button variant='solid' theme='warning'>
        Middle
      </Button>
      <Button variant='solid' theme='success'>
        Right
      </Button>
    </ButtonGroup>
  );
}

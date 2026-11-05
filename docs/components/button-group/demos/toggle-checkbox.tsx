import { Button, ButtonGroup } from 'react-bootstrap-pro';

export function ButtonGroupCheckboxDemo() {
  return (
    <ButtonGroup aria-label='Checkbox toggle button group'>
      <Button component='label' variant='outline' theme='primary' check>
        <input type='checkbox' autoComplete='off' />
        {' Check 1'}
      </Button>
      <Button component='label' variant='outline' theme='primary' check>
        <input type='checkbox' autoComplete='off' />
        {' Check 2'}
      </Button>
      <Button component='label' variant='outline' theme='primary' check>
        <input type='checkbox' autoComplete='off' />
        {' Check 3'}
      </Button>
    </ButtonGroup>
  );
}

import { Button, ButtonGroup } from 'react-bootstrap-pro';

export function ButtonGroupRadioDemo() {
  return (
    <ButtonGroup aria-label='Radio toggle button group'>
      <Button component='label' variant='outline' theme='primary' check>
        <input type='radio' name='button-group-radio' autoComplete='off' defaultChecked />
        {' Radio 1'}
      </Button>
      <Button component='label' variant='outline' theme='primary' check>
        <input type='radio' name='button-group-radio' autoComplete='off' />
        {' Radio 2'}
      </Button>
      <Button component='label' variant='outline' theme='primary' check>
        <input type='radio' name='button-group-radio' autoComplete='off' />
        {' Radio 3'}
      </Button>
    </ButtonGroup>
  );
}

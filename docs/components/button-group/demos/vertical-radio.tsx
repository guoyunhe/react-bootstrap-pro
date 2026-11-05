import { Button, ButtonGroup } from 'react-bootstrap-pro';

export function ButtonGroupVerticalRadioDemo() {
  return (
    <ButtonGroup orientation='vertical' aria-label='Vertical radio toggle button group'>
      <Button component='label' variant='outline' theme='danger' check>
        <input type='radio' name='vertical-button-group-radio' autoComplete='off' defaultChecked />
        {' Radio 1'}
      </Button>
      <Button component='label' variant='outline' theme='danger' check>
        <input type='radio' name='vertical-button-group-radio' autoComplete='off' />
        {' Radio 2'}
      </Button>
      <Button component='label' variant='outline' theme='danger' check>
        <input type='radio' name='vertical-button-group-radio' autoComplete='off' />
        {' Radio 3'}
      </Button>
    </ButtonGroup>
  );
}

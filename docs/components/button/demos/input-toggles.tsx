import { Button } from '../../../../src';

export function ButtonInputToggleDemo() {
  return (
    <div className='d-flex flex-column gap-3'>
      <div className='d-flex flex-wrap gap-2'>
        <Button component='label' variant='solid' theme='primary' check>
          <input type='checkbox' defaultChecked />
          {' Checked'}
        </Button>
        <Button component='label' variant='solid' theme='primary' check>
          <input type='checkbox' />
          {' Toggle'}
        </Button>
        <Button component='label' variant='solid' theme='primary' check>
          <input type='checkbox' disabled />
          {' Disabled'}
        </Button>
      </div>
      <div className='d-flex flex-wrap gap-2'>
        <Button component='label' variant='outline' theme='secondary' check>
          <input type='radio' name='button-demo-options' defaultChecked />
          {' First'}
        </Button>
        <Button component='label' variant='outline' theme='secondary' check>
          <input type='radio' name='button-demo-options' />
          {' Second'}
        </Button>
        <Button component='label' variant='outline' theme='secondary' check>
          <input type='radio' name='button-demo-options' disabled />
          {' Disabled'}
        </Button>
      </div>
    </div>
  );
}

import { Button } from 'react-bootstrap-pro';

export function ButtonDisabledDemo() {
  return (
    <div className='d-flex flex-wrap align-items-center gap-2'>
      <Button variant='solid' theme='primary' disabled>
        Disabled solid
      </Button>
      <Button variant='outline' theme='secondary' disabled>
        Disabled outline
      </Button>
      <Button component='a' variant='solid' theme='primary' href='#disabled' disabled>
        Disabled link
      </Button>
    </div>
  );
}

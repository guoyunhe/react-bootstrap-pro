import { Button } from '../../../../src';

export function ButtonBlockDemo() {
  return (
    <div className='d-flex flex-column gap-3'>
      <div className='d-grid gap-2'>
        <Button variant='solid' theme='primary'>
          Primary action
        </Button>
        <Button variant='outline' theme='secondary'>
          Secondary action
        </Button>
      </div>
      <div className='d-grid gap-2 md:d-flex md:justify-content-end'>
        <Button variant='solid' theme='primary' className='md:me-2'>
          Responsive primary action
        </Button>
        <Button variant='outline' theme='secondary'>
          Responsive secondary action
        </Button>
      </div>
    </div>
  );
}

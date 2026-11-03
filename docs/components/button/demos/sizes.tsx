import { Button } from 'react-bootstrap-pro';

export function ButtonSizesDemo() {
  return (
    <div className='d-flex flex-wrap align-items-center gap-2'>
      <Button variant='solid' theme='primary' size='xs'>
        Extra small
      </Button>
      <Button variant='solid' theme='primary' size='sm'>
        Small
      </Button>
      <Button variant='solid' theme='primary'>
        Default
      </Button>
      <Button variant='solid' theme='primary' size='lg'>
        Large
      </Button>
    </div>
  );
}

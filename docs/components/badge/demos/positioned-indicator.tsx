import { Button } from 'react-bootstrap-pro';

export function BadgePositionedIndicatorDemo() {
  return (
    <Button variant='solid' theme='primary' className='position-relative'>
      Profile
      <span className='position-absolute top-0 start-100 translate-middle p-2 bg-danger border border-bg rounded-circle'>
        <span className='visually-hidden'>New alerts</span>
      </span>
    </Button>
  );
}

import { BiPlus } from 'react-bootstrap-icons-pro';
import { Button } from 'react-bootstrap-pro';

export function ButtonIconDemo() {
  return (
    <div className='d-flex flex-wrap align-items-center gap-2'>
      <Button variant='solid' theme='primary' aria-label='Add item' className='btn-icon'>
        <BiPlus size={16} aria-hidden='true' />
      </Button>
      <Button variant='solid' theme='primary' aria-label='Add item' className='btn-icon' size='xs'>
        <BiPlus size={12} aria-hidden='true' />
      </Button>
      <Button variant='solid' theme='primary' aria-label='Add item' className='btn-icon' size='sm'>
        <BiPlus size={14} aria-hidden='true' />
      </Button>
      <Button variant='solid' theme='primary' aria-label='Add item' className='btn-icon' size='lg'>
        <BiPlus size={20} aria-hidden='true' />
      </Button>
    </div>
  );
}

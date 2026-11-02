import { Button } from '../../../../src';
import { AddIcon } from './shared';

export function ButtonIconDemo() {
  return (
    <div className='d-flex flex-wrap align-items-center gap-2'>
      <Button variant='solid' theme='primary' aria-label='Add item' className='btn-icon'>
        <AddIcon />
      </Button>
      <Button variant='solid' theme='primary' aria-label='Add item' className='btn-icon' size='xs'>
        <AddIcon size={12} />
      </Button>
      <Button variant='solid' theme='primary' aria-label='Add item' className='btn-icon' size='sm'>
        <AddIcon size={14} />
      </Button>
      <Button variant='solid' theme='primary' aria-label='Add item' className='btn-icon' size='lg'>
        <AddIcon size={20} />
      </Button>
    </div>
  );
}

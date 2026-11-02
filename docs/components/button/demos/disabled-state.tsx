import { Button } from '../../../../src';

export function ButtonDisabledDemo() {
  return (
    <div className='d-flex flex-wrap align-items-center gap-2'>
      <Button variant='solid' theme='primary' disabled>
        Disabled solid
      </Button>
      <Button variant='outline' theme='secondary' disabled>
        Disabled outline
      </Button>
      <a
        href='#disabled'
        className='btn-solid theme-primary disabled'
        aria-disabled='true'
        tabIndex={-1}
      >
        Disabled link
      </a>
    </div>
  );
}

import { Button } from '../../../../src';

export function ButtonTagsDemo() {
  return (
    <div className='d-flex flex-wrap align-items-center gap-2'>
      <Button component='a' variant='solid' theme='primary' href='#button-tags'>
        Navigation link
      </Button>
      <Button variant='solid' theme='primary' type='button'>
        Button
      </Button>
    </div>
  );
}

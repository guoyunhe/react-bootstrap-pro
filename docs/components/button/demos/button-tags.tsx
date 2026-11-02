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
      <input className='btn-solid theme-primary' type='button' value='Input button' />
      <form className='d-flex flex-wrap gap-2' onSubmit={(event) => event.preventDefault()}>
        <input className='btn-solid theme-primary' type='submit' value='Submit' />
        <input className='btn-solid theme-secondary' type='reset' value='Reset' />
      </form>
    </div>
  );
}

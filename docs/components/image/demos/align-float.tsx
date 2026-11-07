import { Image } from 'react-bootstrap-pro';

export function ImageAlignFloatDemo() {
  return (
    <div className='d-flow-root'>
      <Image
        src='https://placehold.co/200x200'
        alt='Left placeholder image'
        className='rounded float-start'
      />
      <Image
        src='https://placehold.co/200x200'
        alt='Right placeholder image'
        className='rounded float-end'
      />
    </div>
  );
}

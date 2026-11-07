import { Image } from 'react-bootstrap-pro';

export function ImageAlignTextDemo() {
  return (
    <div className='text-center'>
      <Image
        src='https://placehold.co/200x200'
        alt='Centered placeholder image'
        className='rounded'
      />
    </div>
  );
}

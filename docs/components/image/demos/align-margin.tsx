import { Image } from 'react-bootstrap-pro';

export function ImageAlignMarginDemo() {
  return (
    <Image
      src='https://placehold.co/200x200'
      alt='Centered placeholder image'
      rounded
      mx='auto'
      d='block'
    />
  );
}

import { Image } from 'react-bootstrap-pro';

export function ImagePictureDemo() {
  return (
    <picture>
      <source
        media='(min-width: 768px)'
        srcSet='https://placehold.co/600x300.png'
        type='image/png'
      />
      <Image
        fluid
        thumbnail
        src='https://placehold.co/300x300.png'
        alt='Placeholder image selected for the viewport'
      />
    </picture>
  );
}

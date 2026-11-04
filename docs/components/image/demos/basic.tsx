import { Figure, FigureCaption, Image } from 'react-bootstrap-pro';

export function ImagesBasicDemo() {
  return (
    <div>
      <Image
        fluid
        src='https://placehold.co/800x450'
        alt='A landscape placeholder'
        className='mb-3'
      />
      <Image
        thumbnail
        src='https://placehold.co/200x200'
        alt='A square placeholder'
        className='mb-3'
      />
      <Figure>
        <Image
          fluid
          src='https://placehold.co/600x400'
          alt='A landscape with a caption'
          className='rounded-3'
        />
        <FigureCaption>A caption for the image.</FigureCaption>
      </Figure>
    </div>
  );
}

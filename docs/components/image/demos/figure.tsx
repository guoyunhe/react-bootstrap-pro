import { Figure, FigureCaption, Image } from 'react-bootstrap-pro';

export function ImageFigureDemo() {
  return (
    <Figure>
      <Image
        fluid
        src='https://placehold.co/400x300'
        alt='Rectangular placeholder image'
        className='rounded-3'
      />
      <FigureCaption>A caption for the above image.</FigureCaption>
    </Figure>
  );
}

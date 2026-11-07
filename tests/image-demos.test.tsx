import 'bootstrap/dist/css/bootstrap.css';
import { expect, test } from 'vitest';
import { render } from 'vitest-browser-react';

import { ImageAlignFloatDemo } from '../docs/components/image/demos/align-float';
import { ImageAlignMarginDemo } from '../docs/components/image/demos/align-margin';
import { ImageAlignTextDemo } from '../docs/components/image/demos/align-text';
import { ImageFigureDemo } from '../docs/components/image/demos/figure';
import { ImageFigureAlignedDemo } from '../docs/components/image/demos/figure-aligned';
import { ImagePictureDemo } from '../docs/components/image/demos/picture';
import { ImageResponsiveDemo } from '../docs/components/image/demos/responsive';
import { ImageThumbnailDemo } from '../docs/components/image/demos/thumbnail';

test('image documentation demos render the upstream variants', async () => {
  const screen = await render(
    <>
      <ImageResponsiveDemo />
      <ImageThumbnailDemo />
      <ImageAlignFloatDemo />
      <ImageAlignMarginDemo />
      <ImageAlignTextDemo />
      <ImageFigureDemo />
      <ImageFigureAlignedDemo />
      <ImagePictureDemo />
    </>,
  );
  const examples = screen.container.children;
  expect(examples).toHaveLength(8);
  expect(examples[0]).toHaveClass('img-fluid');
  expect(examples[1]).toHaveClass('img-thumbnail');
  expect(examples[2]).toHaveClass('d-flow-root');
  expect(examples[2]?.querySelector('.float-start')).not.toBeNull();
  expect(examples[2]?.querySelector('.float-end')).not.toBeNull();
  expect(examples[3]).toHaveClass('mx-auto', 'd-block');
  expect(examples[4]).toHaveClass('text-center');
  expect(examples[5]?.querySelector('img.img-fluid')).not.toBeNull();
  expect(examples[5]?.querySelector('figcaption.figure-caption')).not.toBeNull();
  expect(examples[6]).toHaveClass('figure', 'align-items-end');
  expect(examples[7]?.tagName).toBe('PICTURE');
  expect(examples[7]?.querySelector('source')).toHaveAttribute('media', '(min-width: 768px)');
  expect(examples[7]?.querySelector('img')).toHaveClass('img-fluid', 'img-thumbnail');
  expect(examples[7]?.querySelector('img')).toHaveAttribute(
    'alt',
    'Placeholder image selected for the viewport',
  );
  for (const image of screen.container.querySelectorAll('img')) {
    expect(image).toHaveAttribute('alt');
  }
});

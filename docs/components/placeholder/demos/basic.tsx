import { PlaceholderGroup, Placeholder } from 'react-bootstrap-pro';

export function PlaceholderBasicDemo() {
  return (
    <PlaceholderGroup animation='wave'>
      <Placeholder className='w-50' />
      <Placeholder className='w-75' />
    </PlaceholderGroup>
  );
}

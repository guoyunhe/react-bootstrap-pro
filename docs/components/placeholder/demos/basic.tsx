import { PlaceholderGroup, Placeholder } from 'react-bootstrap-pro';

export function PlaceholderBasicDemo() {
  return (
    <PlaceholderGroup animation='wave'>
      <Placeholder w={50} />
      <Placeholder w={75} />
    </PlaceholderGroup>
  );
}

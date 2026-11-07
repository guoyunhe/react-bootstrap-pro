import { Box, Image } from 'react-bootstrap-pro';

export function ImageAlignFloatDemo() {
  return (
    <Box d='flow-root'>
      <Image
        src='https://placehold.co/200x200'
        alt='Left placeholder image'
        rounded
        float='start'
      />
      <Image src='https://placehold.co/200x200' alt='Right placeholder image' rounded float='end' />
    </Box>
  );
}

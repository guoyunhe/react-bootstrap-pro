import { Box, Spinner } from 'react-bootstrap-pro';

export function SpinnerCustomSizeDemo() {
  return (
    <Box d='flex' alignItems='center' gap={3}>
      <Spinner style={{ width: '3rem', height: '3rem' }} label='Loading results' />
      <Spinner variant='grow' style={{ width: '3rem', height: '3rem' }} label='Loading results' />
    </Box>
  );
}

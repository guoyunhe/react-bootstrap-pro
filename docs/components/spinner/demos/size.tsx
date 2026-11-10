import { Box, Spinner } from 'react-bootstrap-pro';

export function SpinnerSizeDemo() {
  return (
    <Box d='flex' alignItems='center' gap={3}>
      <Spinner size='sm' label='Loading results' />
      <Spinner variant='grow' size='sm' label='Loading results' />
    </Box>
  );
}

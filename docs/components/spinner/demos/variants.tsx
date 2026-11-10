import { Box, Spinner } from 'react-bootstrap-pro';

export function SpinnerVariantsDemo() {
  return (
    <Box d='flex' alignItems='center' gap={3}>
      <Spinner fg='primary' label='Loading results' />
      <Spinner variant='grow' fg='accent' label='Loading results' />
    </Box>
  );
}

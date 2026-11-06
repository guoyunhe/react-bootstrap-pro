import { Box, Container } from 'react-bootstrap-pro';

export function ContainerDefaultDemo() {
  return (
    <Container className='border rounded bg-body-tertiary' p={3}>
      <strong>Default container</strong>
      <Box component='p' mb={0} className='text-body-secondary'>
        Max-width changes at each breakpoint.
      </Box>
    </Container>
  );
}

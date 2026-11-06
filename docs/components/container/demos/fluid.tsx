import { Box, Container } from 'react-bootstrap-pro';

export function ContainerFluidDemo() {
  return (
    <Container fluid className='border rounded bg-body-tertiary' p={3}>
      <strong>Fluid container</strong>
      <Box component='p' mb={0} className='text-body-secondary'>
        Always spans the available width.
      </Box>
    </Container>
  );
}

import { Box, Container } from 'react-bootstrap-pro';

const breakpoints = ['sm', 'md', 'lg', 'xl', '2xl'] as const;

export function ContainerTypesDemo() {
  return (
    <Box display='grid' gap={3}>
      <Container className='border rounded bg-body-tertiary' p={3}>
        <strong>Default container</strong>
        <div className='text-body-secondary'>Max-width changes at each breakpoint.</div>
      </Container>
      <Container fluid className='border rounded bg-body-tertiary' p={3}>
        <strong>Fluid container</strong>
        <div className='text-body-secondary'>Always spans the available width.</div>
      </Container>
      {breakpoints.map((breakpoint) => (
        <Container
          key={breakpoint}
          fluid={breakpoint}
          className='border rounded bg-body-tertiary'
          p={3}
        >
          <strong>{breakpoint}:container</strong>
          <div className='text-body-secondary'>Full width until the {breakpoint} breakpoint.</div>
        </Container>
      ))}
    </Box>
  );
}

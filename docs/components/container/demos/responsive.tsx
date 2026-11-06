import { Box, Container } from 'react-bootstrap-pro';

const breakpoints = ['sm', 'md', 'lg', 'xl', '2xl'] as const;

export function ContainerResponsiveDemo() {
  return (
    <Box d='grid' gap={3}>
      {breakpoints.map((breakpoint) => (
        <Container
          key={breakpoint}
          fluid={breakpoint}
          className='border rounded bg-body-tertiary'
          p={3}
        >
          <strong>{breakpoint}:container</strong>
          <Box component='p' mb={0} className='text-body-secondary'>
            Full width until the {breakpoint} breakpoint.
          </Box>
        </Container>
      ))}
    </Box>
  );
}

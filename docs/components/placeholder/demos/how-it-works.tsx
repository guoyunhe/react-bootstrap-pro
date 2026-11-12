import { Box, Button, Placeholder } from 'react-bootstrap-pro';

export function PlaceholderHowItWorksDemo() {
  return (
    <Box d='grid' gap={2} style={{ maxWidth: 320 }}>
      <Box component='p'>
        <Placeholder w={50} />
      </Box>
      <Button
        variant='solid'
        theme='primary'
        disabled
        className='placeholder'
        w={50}
        aria-hidden='true'
      />
    </Box>
  );
}

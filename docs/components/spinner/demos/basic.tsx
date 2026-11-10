import { Badge, Box, Button, Spinner } from 'react-bootstrap-pro';

export function SpinnerBasicDemo() {
  return (
    <Box d='flex' alignItems='center' gap={3}>
      <Spinner label='Loading results' />
      <Badge theme='primary'>
        <Spinner size='sm' aria-hidden />
        <span role='status'>Loading</span>
      </Badge>
      <Button theme='primary' variant='subtle' disabled>
        <Spinner size='sm' aria-hidden />
        <span role='status'>Loading…</span>
      </Button>
    </Box>
  );
}

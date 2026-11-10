import { Box, Progress } from 'react-bootstrap-pro';

export function ProgressHeightDemo() {
  return (
    <Box d='flex' flexDirection='column' gap={3}>
      <Progress label='Example 1px high' value={25} style={{ height: '1px' }} />
      <Progress label='Example 20px high' value={25} style={{ height: '20px' }} />
    </Box>
  );
}

import { Box, Progress } from 'react-bootstrap-pro';

const values = [0, 25, 50, 75, 100];

export function ProgressBasicDemo() {
  return (
    <Box d='flex' flexDirection='column' gap={3}>
      {values.map((value) => (
        <Progress key={value} label='Basic example' value={value} />
      ))}
    </Box>
  );
}

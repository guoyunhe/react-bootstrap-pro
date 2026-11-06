import { Box, Chip } from 'react-bootstrap-pro';

export function ChipsActiveStateDemo() {
  return (
    <Box d='flex' flexWrap='wrap' alignItems='center' gap={2}>
      <Chip theme='primary'>Default</Chip>
      <Chip theme='primary' active>
        Active
      </Chip>
      <Chip theme='success'>Default</Chip>
      <Chip theme='success' active>
        Active
      </Chip>
    </Box>
  );
}

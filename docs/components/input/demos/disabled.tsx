import { Box, Input } from 'react-bootstrap-pro';

export function InputDisabledDemo() {
  return (
    <Box d='flex' flexDirection='column' gap={3}>
      <Input placeholder='Disabled input' aria-label='Disabled input' disabled />
      <Input
        defaultValue='Disabled readonly input'
        aria-label='Disabled readonly input'
        disabled
        readOnly
      />
    </Box>
  );
}

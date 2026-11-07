import { Box, Input } from 'react-bootstrap-pro';

export function InputStatesDemo() {
  return (
    <Box d='flex' flexDirection='column' gap={3}>
      <Input size='sm' aria-label='Small input' placeholder='Small input' />
      <Input aria-label='Default input' placeholder='Default input' />
      <Input size='lg' aria-label='Large input' placeholder='Large input' />
      <Input plaintext readOnly aria-label='Readonly input' defaultValue='Readonly plaintext' />
      <Input ghost aria-label='Ghost input' placeholder='Ghost input' />
    </Box>
  );
}

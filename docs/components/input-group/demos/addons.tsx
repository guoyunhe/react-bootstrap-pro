import { Box, Input, InputGroup, InputGroupText } from 'react-bootstrap-pro';

export function InputGroupAddonsDemo() {
  return (
    <Box d='flex' flexDirection='column' gap={3}>
      <InputGroup>
        <InputGroupText>$</InputGroupText>
        <InputGroupText>0.00</InputGroupText>
        <Input aria-label='Dollar amount' />
      </InputGroup>
      <InputGroup>
        <Input aria-label='Dollar amount with trailing addons' />
        <InputGroupText>$</InputGroupText>
        <InputGroupText>0.00</InputGroupText>
      </InputGroup>
      <InputGroup>
        <InputGroupText>$</InputGroupText>
        <Input aria-label='Amount to the nearest dollar' />
        <InputGroupText>.00</InputGroupText>
      </InputGroup>
    </Box>
  );
}

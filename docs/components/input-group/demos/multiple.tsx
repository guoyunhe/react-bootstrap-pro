import { Box, Input, InputGroup, InputGroupText } from 'react-bootstrap-pro';

export function InputGroupMultipleDemo() {
  return (
    <Box d='flex' flexDirection='column' gap={3}>
      <InputGroup>
        <Input type='text' aria-label='First name' />
        <Input type='text' aria-label='Middle name' />
        <Input type='text' aria-label='Last name' />
      </InputGroup>
      <InputGroup>
        <InputGroupText>First and last name</InputGroupText>
        <Input type='text' aria-label='First name' />
        <Input type='text' aria-label='Last name' />
      </InputGroup>
      <InputGroup>
        <Input type='text' placeholder='Username' aria-label='Username' />
        <InputGroupText>@</InputGroupText>
        <Input type='text' placeholder='Server' aria-label='Server' />
      </InputGroup>
    </Box>
  );
}

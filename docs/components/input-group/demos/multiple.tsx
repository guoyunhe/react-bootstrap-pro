import { Box, FormControl, InputGroup, InputGroupText } from 'react-bootstrap-pro';

export function InputGroupMultipleDemo() {
  return (
    <Box display='flex' flexDirection='column' gap={3}>
      <InputGroup>
        <FormControl type='text' aria-label='First name' />
        <FormControl type='text' aria-label='Middle name' />
        <FormControl type='text' aria-label='Last name' />
      </InputGroup>
      <InputGroup>
        <InputGroupText>First and last name</InputGroupText>
        <FormControl type='text' aria-label='First name' />
        <FormControl type='text' aria-label='Last name' />
      </InputGroup>
      <InputGroup>
        <FormControl type='text' placeholder='Username' aria-label='Username' />
        <InputGroupText>@</InputGroupText>
        <FormControl type='text' placeholder='Server' aria-label='Server' />
      </InputGroup>
      <InputGroup>
        <InputGroupText>$</InputGroupText>
        <InputGroupText>0.00</InputGroupText>
        <FormControl type='text' aria-label='Dollar amount' />
      </InputGroup>
    </Box>
  );
}

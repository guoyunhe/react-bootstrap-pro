import { Box, FormControl, InputGroup, InputGroupText } from 'react-bootstrap-pro';

export function InputGroupBasicDemo() {
  return (
    <Box display='flex' flexDirection='column' gap={3}>
      <InputGroup>
        <InputGroupText id='input-group-basic-addon-1'>@</InputGroupText>
        <FormControl
          type='text'
          placeholder='Username'
          aria-label='Username'
          aria-describedby='input-group-basic-addon-1'
        />
      </InputGroup>
      <InputGroup>
        <FormControl
          type='text'
          placeholder='Recipient’s username'
          aria-label='Recipient’s username'
          aria-describedby='input-group-basic-addon-2'
        />
        <InputGroupText id='input-group-basic-addon-2'>@example.com</InputGroupText>
      </InputGroup>
    </Box>
  );
}

import { Box, Checkbox, FormControl, InputGroup, InputGroupText, Radio } from 'react-bootstrap-pro';

export function InputGroupCheckRadioDemo() {
  return (
    <Box display='flex' flexDirection='column' gap={3}>
      <InputGroup>
        <InputGroupText component='div'>
          <Checkbox aria-label='Checkbox for following text input' />
        </InputGroupText>
        <FormControl type='text' aria-label='Text input with checkbox' />
      </InputGroup>
      <InputGroup>
        <InputGroupText component='div'>
          <Radio name='input-group-radio' aria-label='Radio button for following text input' />
        </InputGroupText>
        <FormControl type='text' aria-label='Text input with radio button' />
      </InputGroup>
    </Box>
  );
}

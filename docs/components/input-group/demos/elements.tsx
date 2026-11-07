import { Box, Input, InputGroup, InputGroupText, Select, Textarea } from 'react-bootstrap-pro';

export function InputGroupElementsDemo() {
  return (
    <Box d='flex' flexDirection='column' gap={3}>
      <InputGroup>
        <InputGroupText>With textarea</InputGroupText>
        <Textarea aria-label='With textarea' />
      </InputGroup>
      <InputGroup>
        <InputGroupText component='label' htmlFor='input-group-select'>
          Options
        </InputGroupText>
        <Select id='input-group-select' defaultValue=''>
          <option value=''>Choose...</option>
          <option value='1'>One</option>
          <option value='2'>Two</option>
          <option value='3'>Three</option>
        </Select>
      </InputGroup>
      <InputGroup>
        <InputGroupText component='label' htmlFor='input-group-file'>
          Upload
        </InputGroupText>
        <Input type='file' id='input-group-file' />
      </InputGroup>
    </Box>
  );
}

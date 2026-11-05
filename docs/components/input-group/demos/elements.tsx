import { Box, FormControl, InputGroup, InputGroupText } from 'react-bootstrap-pro';

export function InputGroupElementsDemo() {
  return (
    <Box d='flex' flexDirection='column' gap={3}>
      <InputGroup>
        <InputGroupText>With textarea</InputGroupText>
        <FormControl component='textarea' aria-label='With textarea' />
      </InputGroup>
      <InputGroup>
        <InputGroupText component='label' htmlFor='input-group-select'>
          Options
        </InputGroupText>
        <FormControl component='select' id='input-group-select' defaultValue=''>
          <option value=''>Choose...</option>
          <option value='1'>One</option>
          <option value='2'>Two</option>
          <option value='3'>Three</option>
        </FormControl>
      </InputGroup>
      <InputGroup>
        <InputGroupText component='label' htmlFor='input-group-file'>
          Upload
        </InputGroupText>
        <FormControl type='file' id='input-group-file' />
      </InputGroup>
    </Box>
  );
}

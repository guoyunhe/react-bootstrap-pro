import { Box, InputGroupButton, Input, InputGroup, InputGroupText } from 'react-bootstrap-pro';

export function InputGroupFileDemo() {
  return (
    <Box d='flex' flexDirection='column' gap={3}>
      <InputGroup>
        <InputGroupText component='label' htmlFor='group-file-start'>
          Upload
        </InputGroupText>
        <Input type='file' id='group-file-start' />
      </InputGroup>
      <InputGroup>
        <Input type='file' id='group-file-end' />
        <InputGroupText component='label' htmlFor='group-file-end'>
          Upload
        </InputGroupText>
      </InputGroup>
      <InputGroup>
        <InputGroupButton type='button' variant='outline' theme='secondary'>
          Button
        </InputGroupButton>
        <Input type='file' aria-label='Upload with leading button' />
      </InputGroup>
      <InputGroup>
        <Input type='file' aria-label='Upload with trailing button' />
        <InputGroupButton type='button' variant='outline' theme='secondary'>
          Button
        </InputGroupButton>
      </InputGroup>
    </Box>
  );
}

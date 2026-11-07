import { Box, InputGroupButton, Input, InputGroup } from 'react-bootstrap-pro';

export function InputGroupButtonAddonsDemo() {
  return (
    <Box d='flex' flexDirection='column' gap={3}>
      <InputGroup>
        <InputGroupButton type='button' variant='outline' theme='secondary'>
          Button
        </InputGroupButton>
        <Input aria-label='Text with leading button' />
      </InputGroup>
      <InputGroup>
        <Input aria-label='Text with trailing button' />
        <InputGroupButton type='button' variant='outline' theme='secondary'>
          Button
        </InputGroupButton>
      </InputGroup>
      <InputGroup>
        <InputGroupButton type='button' variant='outline' theme='secondary'>
          Button
        </InputGroupButton>
        <InputGroupButton type='button' variant='outline' theme='secondary'>
          Button
        </InputGroupButton>
        <Input aria-label='Text with two leading buttons' />
      </InputGroup>
      <InputGroup>
        <Input aria-label='Text with two trailing buttons' />
        <InputGroupButton type='button' variant='outline' theme='secondary'>
          Button
        </InputGroupButton>
        <InputGroupButton type='button' variant='outline' theme='secondary'>
          Button
        </InputGroupButton>
      </InputGroup>
    </Box>
  );
}

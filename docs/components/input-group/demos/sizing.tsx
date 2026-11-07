import { Box, Input, InputGroup, InputGroupText } from 'react-bootstrap-pro';

export function InputGroupSizingDemo() {
  return (
    <Box d='flex' flexDirection='column' gap={3}>
      <InputGroup size='sm'>
        <InputGroupText id='input-group-sizing-sm'>Small</InputGroupText>
        <Input
          type='text'
          aria-label='Small input group'
          aria-describedby='input-group-sizing-sm'
        />
      </InputGroup>
      <InputGroup>
        <InputGroupText id='input-group-sizing-default'>Default</InputGroupText>
        <Input
          type='text'
          aria-label='Default input group'
          aria-describedby='input-group-sizing-default'
        />
      </InputGroup>
      <InputGroup size='lg'>
        <InputGroupText id='input-group-sizing-lg'>Large</InputGroupText>
        <Input
          type='text'
          aria-label='Large input group'
          aria-describedby='input-group-sizing-lg'
        />
      </InputGroup>
    </Box>
  );
}

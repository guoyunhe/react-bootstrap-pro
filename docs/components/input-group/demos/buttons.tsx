import { Box, Button, Input, InputGroup } from 'react-bootstrap-pro';

export function InputGroupButtonsDemo() {
  return (
    <Box d='flex' flexDirection='column' gap={3}>
      <InputGroup>
        <Button
          type='button'
          variant='outline'
          theme='secondary'
          className='input-group-btn'
          id='input-group-button-1'
        >
          Button
        </Button>
        <Input
          type='text'
          aria-label='Example text with button addon'
          aria-describedby='input-group-button-1'
        />
      </InputGroup>
      <InputGroup>
        <Input
          type='text'
          placeholder='Recipient’s username'
          aria-label='Recipient’s username'
          aria-describedby='input-group-button-2'
        />
        <Button
          type='button'
          variant='outline'
          theme='secondary'
          className='input-group-btn'
          id='input-group-button-2'
        >
          Button
        </Button>
      </InputGroup>
    </Box>
  );
}

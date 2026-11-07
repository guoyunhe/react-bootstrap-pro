import { Box, FormLabel, Input } from 'react-bootstrap-pro';

export function InputSizesDemo() {
  return (
    <Box d='flex' flexDirection='column' gap={3}>
      <div>
        <FormLabel htmlFor='input-size-small'>Small input</FormLabel>
        <Input id='input-size-small' size='sm' placeholder='Small input' />
      </div>
      <div>
        <FormLabel htmlFor='input-size-default'>Default input</FormLabel>
        <Input id='input-size-default' placeholder='Default input' />
      </div>
      <div>
        <FormLabel htmlFor='input-size-large'>Large input</FormLabel>
        <Input id='input-size-large' size='lg' placeholder='Large input' />
      </div>
    </Box>
  );
}

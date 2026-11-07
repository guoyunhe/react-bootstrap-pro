import { Box, FormLabel, Input } from 'react-bootstrap-pro';

export function InputColorSizesDemo() {
  return (
    <Box d='flex' flexDirection='column' gap={3}>
      <div>
        <FormLabel htmlFor='input-color-large'>Large color picker</FormLabel>
        <Input id='input-color-large' type='color' size='lg' defaultValue='#631aff' />
      </div>
      <div>
        <FormLabel htmlFor='input-color-small'>Small color picker</FormLabel>
        <Input id='input-color-small' type='color' size='sm' defaultValue='#631aff' />
      </div>
    </Box>
  );
}

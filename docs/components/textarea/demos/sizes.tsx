import { Box, FormField, FormLabel, Textarea } from 'react-bootstrap-pro';

export function TextareaSizesDemo() {
  return (
    <Box d='flex' flexDirection='column' gap={3}>
      <FormField>
        <FormLabel htmlFor='textarea-size-sm'>Small textarea</FormLabel>
        <Textarea id='textarea-size-sm' size='sm' placeholder='Small textarea' />
      </FormField>
      <FormField>
        <FormLabel htmlFor='textarea-size-default'>Default textarea</FormLabel>
        <Textarea id='textarea-size-default' placeholder='Default textarea' />
      </FormField>
      <FormField>
        <FormLabel htmlFor='textarea-size-lg'>Large textarea</FormLabel>
        <Textarea id='textarea-size-lg' size='lg' placeholder='Large textarea' />
      </FormField>
    </Box>
  );
}

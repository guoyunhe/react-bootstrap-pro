import { Box, FormField, FormLabel, Textarea } from 'react-bootstrap-pro';

export function TextareaBasicDemo() {
  return (
    <Box d='flex' flexDirection='column' gap={3}>
      <FormField>
        <FormLabel htmlFor='textarea-example'>Example textarea</FormLabel>
        <Textarea id='textarea-example' />
      </FormField>
      <FormField>
        <FormLabel htmlFor='textarea-taller'>Taller textarea</FormLabel>
        <Textarea id='textarea-taller' rows={4} />
      </FormField>
    </Box>
  );
}

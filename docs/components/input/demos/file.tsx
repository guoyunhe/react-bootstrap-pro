import { Box, FormField, FormLabel, Input } from 'react-bootstrap-pro';

export function InputFileDemo() {
  return (
    <Box d='flex' flexDirection='column' gap={3}>
      <FormField>
        <FormLabel htmlFor='input-file-default'>Default file input</FormLabel>
        <Input id='input-file-default' type='file' />
      </FormField>
      <FormField>
        <FormLabel htmlFor='input-file-multiple'>Multiple files input</FormLabel>
        <Input id='input-file-multiple' type='file' multiple />
      </FormField>
      <FormField>
        <FormLabel htmlFor='input-file-disabled'>Disabled file input</FormLabel>
        <Input id='input-file-disabled' type='file' disabled />
      </FormField>
      <FormField>
        <FormLabel htmlFor='input-file-small'>Small file input</FormLabel>
        <Input id='input-file-small' type='file' size='sm' />
      </FormField>
      <FormField>
        <FormLabel htmlFor='input-file-large'>Large file input</FormLabel>
        <Input id='input-file-large' type='file' size='lg' />
      </FormField>
    </Box>
  );
}

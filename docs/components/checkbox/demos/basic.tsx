import { Box, Checkbox, FormField } from 'react-bootstrap-pro';

export function CheckboxBasicDemo() {
  return (
    <Box d='flex' flexDirection='column' gap={2}>
      <FormField>
        <Checkbox id='checkbox-basic-1' defaultChecked />
        <label htmlFor='checkbox-basic-1'>First example checkbox</label>
      </FormField>
      <FormField>
        <Checkbox id='checkbox-basic-2' />
        <label htmlFor='checkbox-basic-2'>Second example checkbox</label>
      </FormField>
    </Box>
  );
}

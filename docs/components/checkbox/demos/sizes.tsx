import { Box, Checkbox, FormField } from 'react-bootstrap-pro';

export function CheckboxSizesDemo() {
  return (
    <Box display='flex' flexDirection='column' gap={2}>
      <FormField>
        <Checkbox id='checkbox-size-sm' size='sm' defaultChecked />
        <label htmlFor='checkbox-size-sm'>Small checkbox</label>
      </FormField>
      <FormField>
        <Checkbox id='checkbox-size-default' defaultChecked />
        <label htmlFor='checkbox-size-default'>Default checkbox</label>
      </FormField>
      <FormField>
        <Checkbox id='checkbox-size-lg' size='lg' defaultChecked />
        <label htmlFor='checkbox-size-lg'>Large checkbox</label>
      </FormField>
    </Box>
  );
}

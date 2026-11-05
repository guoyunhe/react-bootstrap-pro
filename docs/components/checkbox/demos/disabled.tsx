import { Box, Checkbox, FormField } from 'react-bootstrap-pro';

export function CheckboxDisabledDemo() {
  return (
    <Box d='flex' flexDirection='column' gap={2}>
      <FormField>
        <Checkbox id='checkbox-disabled' disabled />
        <label htmlFor='checkbox-disabled'>Example disabled checkbox</label>
      </FormField>
      <FormField>
        <Checkbox id='checkbox-checked-disabled' disabled defaultChecked />
        <label htmlFor='checkbox-checked-disabled'>Example checked disabled checkbox</label>
      </FormField>
    </Box>
  );
}

import { Box, FormField, Radio } from 'react-bootstrap-pro';

export function RadioDisabledDemo() {
  return (
    <Box display='flex' flexDirection='column' gap={2}>
      <FormField>
        <Radio id='radio-disabled' name='radio-disabled' disabled />
        <label htmlFor='radio-disabled'>Example new radio</label>
      </FormField>
      <FormField>
        <Radio id='radio-checked-disabled' name='radio-checked-disabled' disabled defaultChecked />
        <label htmlFor='radio-checked-disabled'>Example checked disabled radio</label>
      </FormField>
    </Box>
  );
}

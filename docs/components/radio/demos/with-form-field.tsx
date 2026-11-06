import { Box, FormField, Radio } from 'react-bootstrap-pro';

export function RadioWithFormFieldDemo() {
  return (
    <Box d='flex' flexDirection='column' gap={2}>
      <FormField>
        <Radio id='radio-form-field-1' name='radio-form-field' />
        <label htmlFor='radio-form-field-1'>First example radio</label>
      </FormField>
      <FormField>
        <Radio id='radio-form-field-2' name='radio-form-field' />
        <label htmlFor='radio-form-field-2'>Second example radio</label>
      </FormField>
    </Box>
  );
}

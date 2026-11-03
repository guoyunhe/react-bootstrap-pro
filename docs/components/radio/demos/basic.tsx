import { Box, FormField, Radio } from 'react-bootstrap-pro';

export function RadioBasicDemo() {
  return (
    <Box display='flex' flexDirection='column' gap={2}>
      <FormField>
        <Radio id='radio-basic-1' name='radio-basic' defaultChecked />
        <label htmlFor='radio-basic-1'>First example radio</label>
      </FormField>
      <FormField>
        <Radio id='radio-basic-2' name='radio-basic' />
        <label htmlFor='radio-basic-2'>Second example radio</label>
      </FormField>
    </Box>
  );
}

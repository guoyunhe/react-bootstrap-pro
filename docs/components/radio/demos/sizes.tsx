import { Box, FormField, Radio } from 'react-bootstrap-pro';

export function RadioSizesDemo() {
  return (
    <Box d='flex' flexDirection='column' gap={2}>
      <FormField>
        <Radio id='radio-size-sm' name='radio-size' size='sm' defaultChecked />
        <label htmlFor='radio-size-sm'>Small radio</label>
      </FormField>
      <FormField>
        <Radio id='radio-size-default' name='radio-size' defaultChecked />
        <label htmlFor='radio-size-default'>Default radio</label>
      </FormField>
      <FormField>
        <Radio id='radio-size-lg' name='radio-size' size='lg' defaultChecked />
        <label htmlFor='radio-size-lg'>Large radio</label>
      </FormField>
    </Box>
  );
}

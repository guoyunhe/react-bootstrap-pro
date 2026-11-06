import { Box, Checkbox, FormField } from 'react-bootstrap-pro';

export function CheckboxStackedDemo() {
  return (
    <Box d='flex' flexDirection='column' gap={2}>
      <FormField>
        <Checkbox id='checkbox-stacked-default' />
        <label htmlFor='checkbox-stacked-default'>Default checkbox</label>
      </FormField>
      <FormField>
        <Checkbox id='checkbox-stacked-disabled' disabled />
        <label htmlFor='checkbox-stacked-disabled'>Disabled checkbox</label>
      </FormField>
    </Box>
  );
}

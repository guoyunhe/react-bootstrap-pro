import { Box, Button, Checkbox, FormField, FormLabel, Input, Select } from 'react-bootstrap-pro';

export function FormDisabledDemo() {
  return (
    <Box component='form' onSubmit={(event) => event.preventDefault()}>
      <Box component='fieldset' disabled>
        <Box component='legend'>Disabled fieldset example</Box>
        <FormField mb={3}>
          <FormLabel htmlFor='form-disabled-input'>Disabled input</FormLabel>
          <Input id='form-disabled-input' placeholder='Disabled input' />
        </FormField>
        <FormField mb={3}>
          <FormLabel htmlFor='form-disabled-select'>Disabled select menu</FormLabel>
          <Select id='form-disabled-select'>
            <option>Disabled select</option>
          </Select>
        </FormField>
        <FormField mb={3}>
          <Checkbox id='form-disabled-check' />
          <label htmlFor='form-disabled-check'>Can’t check this</label>
        </FormField>
        <Button type='submit' variant='solid' theme='primary'>
          Submit
        </Button>
      </Box>
    </Box>
  );
}

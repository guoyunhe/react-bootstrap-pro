import { Box, Button, Checkbox, FormControl, FormField, FormLabel } from 'react-bootstrap-pro';

export function FormDisabledDemo() {
  return (
    <Box component='form' onSubmit={(event) => event.preventDefault()}>
      <Box component='fieldset' disabled>
        <Box component='legend'>Disabled fieldset example</Box>
        <FormField mb={3}>
          <FormLabel htmlFor='form-disabled-input'>Disabled input</FormLabel>
          <FormControl id='form-disabled-input' placeholder='Disabled input' />
        </FormField>
        <FormField mb={3}>
          <FormLabel htmlFor='form-disabled-select'>Disabled select menu</FormLabel>
          <FormControl component='select' id='form-disabled-select'>
            <option>Disabled select</option>
          </FormControl>
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

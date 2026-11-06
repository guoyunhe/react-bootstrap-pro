import { Box, DatePicker, FormLabel } from 'react-bootstrap-pro';

export function DatePickerDarkDemo() {
  return (
    <Box data-bs-theme='dark' p={3} bg='body' fg='body' rounded={3}>
      <FormLabel htmlFor='datepicker-dark'>Dark mode datepicker</FormLabel>
      <DatePicker id='datepicker-dark' placeholder='Select a date' />
    </Box>
  );
}

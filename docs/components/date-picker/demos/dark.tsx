import { Box, Datepicker, FormLabel } from 'react-bootstrap-pro';

export function DatepickerDarkDemo() {
  return (
    <Box data-bs-theme='dark' p={3} bg='body' fg='body' rounded={3}>
      <FormLabel htmlFor='datepicker-dark'>Dark mode datepicker</FormLabel>
      <Datepicker id='datepicker-dark' placeholder='Select a date' />
    </Box>
  );
}

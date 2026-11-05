import { Box, Datepicker, FormLabel } from 'react-bootstrap-pro';

export function DatepickerDarkDemo() {
  return (
    <Box d='flex' flexWrap='wrap' gap={4}>
      <Box data-bs-theme='dark' p={3} bg='body' fg='body' rounded={3}>
        <FormLabel htmlFor='datepicker-dark'>Dark mode datepicker</FormLabel>
        <Datepicker id='datepicker-dark' placeholder='Select a date' />
      </Box>
      <Box>
        <FormLabel htmlFor='datepicker-theme'>Light input, dark datepicker</FormLabel>
        <Datepicker id='datepicker-theme' theme='dark' className='w-12' />
      </Box>
    </Box>
  );
}

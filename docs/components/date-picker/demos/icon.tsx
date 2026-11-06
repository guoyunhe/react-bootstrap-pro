import { BiCalendarWeek } from 'react-bootstrap-icons-pro';
import { Box, DatePicker, FormControl, FormLabel } from 'react-bootstrap-pro';

export function DatePickerIconDemo() {
  return (
    <>
      <FormLabel htmlFor='datepicker-icon'>Select date</FormLabel>
      <FormControl component='label' adorn w={12}>
        <Box className='form-adorn-icon' aria-hidden='true'>
          <BiCalendarWeek />
        </Box>
        <DatePicker ghost id='datepicker-icon' />
      </FormControl>
    </>
  );
}

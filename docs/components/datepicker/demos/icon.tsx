import { BiCalendarWeek } from 'react-bootstrap-icons-pro';
import { Box, Datepicker, FormControl, FormLabel } from 'react-bootstrap-pro';

export function DatepickerIconDemo() {
  return (
    <>
      <FormLabel htmlFor='datepicker-icon'>Select date</FormLabel>
      <FormControl component='label' adorn className='w-12'>
        <Box className='form-adorn-icon' aria-hidden='true'>
          <BiCalendarWeek />
        </Box>
        <Datepicker ghost id='datepicker-icon' />
      </FormControl>
    </>
  );
}

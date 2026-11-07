import { BiCalendarWeek } from 'react-bootstrap-icons-pro';
import { Box, DatePicker, FormLabel } from 'react-bootstrap-pro';

export function DatePickerIconDemo() {
  return (
    <>
      <FormLabel htmlFor='datepicker-icon'>Select date</FormLabel>
      <Box component='label' w={12} classNameBefore='form-control form-adorn'>
        <Box className='form-adorn-icon' aria-hidden='true'>
          <BiCalendarWeek />
        </Box>
        <DatePicker ghost id='datepicker-icon' />
      </Box>
    </>
  );
}

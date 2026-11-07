import { BiCalendarWeek } from 'react-bootstrap-icons-pro';
import { DatePicker, FormAdornIcon, FormControl, FormLabel } from 'react-bootstrap-pro';

export function DatePickerIconDemo() {
  return (
    <>
      <FormLabel htmlFor='datepicker-icon'>Select date</FormLabel>
      <FormControl component='label' adorn w={12}>
        <FormAdornIcon aria-hidden='true'>
          <BiCalendarWeek />
        </FormAdornIcon>
        <DatePicker ghost id='datepicker-icon' />
      </FormControl>
    </>
  );
}

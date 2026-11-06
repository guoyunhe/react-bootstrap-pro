import { DatePicker, FormLabel } from 'react-bootstrap-pro';

export function DatePickerMultipleMonthsDemo() {
  return (
    <>
      <FormLabel htmlFor='datepicker-months'>Select date range</FormLabel>
      <DatePicker
        id='datepicker-months'
        selectionMode='multiple-ranged'
        displayMonthsCount={2}
        placeholder='Select start and end dates'
      />
    </>
  );
}

import { Datepicker, FormLabel } from 'react-bootstrap-pro';

export function DatepickerMultipleMonthsDemo() {
  return (
    <>
      <FormLabel htmlFor='datepicker-months'>Select date range</FormLabel>
      <Datepicker
        id='datepicker-months'
        selectionMode='multiple-ranged'
        displayMonthsCount={2}
        placeholder='Select start and end dates'
      />
    </>
  );
}

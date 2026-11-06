import { DatePicker, FormLabel } from 'react-bootstrap-pro';

export function DatePickerMultiMonthRangeDemo() {
  return (
    <>
      <FormLabel htmlFor='datepicker-multi-month-range'>Select date range</FormLabel>
      <DatePicker
        id='datepicker-multi-month-range'
        selectionMode='multiple-ranged'
        displayMonthsCount={2}
        defaultValue={['2026-06-25', '2026-07-08']}
        placeholder='Select start and end dates…'
      />
    </>
  );
}

import { Datepicker, FormLabel } from 'react-bootstrap-pro';

export function DatepickerRangeDemo() {
  return (
    <>
      <FormLabel htmlFor='datepicker-range'>Select date range</FormLabel>
      <Datepicker
        id='datepicker-range'
        selectionMode='multiple-ranged'
        defaultValue={['2026-06-10', '2026-06-18']}
        placeholder='Select start and end dates…'
      />
    </>
  );
}

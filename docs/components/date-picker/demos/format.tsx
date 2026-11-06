import { DatePicker, FormLabel } from 'react-bootstrap-pro';

export function DatePickerFormatDemo() {
  return (
    <>
      <FormLabel htmlFor='datepicker-format'>Start and end dates</FormLabel>
      <DatePicker
        id='datepicker-format'
        selectionMode='multiple-ranged'
        defaultValue={['2026-12-23', '2026-12-28']}
        format={{ month: 'short', day: 'numeric', year: 'numeric' }}
      />
    </>
  );
}

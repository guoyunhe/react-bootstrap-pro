import { Datepicker, FormLabel } from 'react-bootstrap-pro';

export function DatepickerFormatDemo() {
  return (
    <>
      <FormLabel htmlFor='datepicker-format'>Start and end dates</FormLabel>
      <Datepicker
        id='datepicker-format'
        selectionMode='multiple-ranged'
        defaultValue={['2026-12-23', '2026-12-28']}
        format={{ month: 'short', day: 'numeric', year: 'numeric' }}
      />
    </>
  );
}

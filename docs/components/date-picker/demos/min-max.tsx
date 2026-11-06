import { Datepicker, FormLabel } from 'react-bootstrap-pro';

export function DatepickerMinMaxDemo() {
  return (
    <>
      <FormLabel htmlFor='datepicker-min-max'>Event date (2026 only)</FormLabel>
      <Datepicker
        id='datepicker-min-max'
        w={12}
        dateMin='2026-01-01'
        dateMax='2026-12-31'
        placeholder='Select a date in 2026'
      />
    </>
  );
}

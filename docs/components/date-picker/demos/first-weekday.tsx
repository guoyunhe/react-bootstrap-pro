import { DatePicker, FormLabel } from 'react-bootstrap-pro';

export function DatePickerFirstWeekdayDemo() {
  return (
    <>
      <FormLabel htmlFor='datepicker-first-weekday'>Week starts on Sunday</FormLabel>
      <DatePicker id='datepicker-first-weekday' w={12} firstWeekday={0} />
    </>
  );
}

import { Datepicker, FormLabel } from 'react-bootstrap-pro';

export function DatepickerFirstWeekdayDemo() {
  return (
    <>
      <FormLabel htmlFor='datepicker-first-weekday'>Week starts on Sunday</FormLabel>
      <Datepicker id='datepicker-first-weekday' w={12} firstWeekday={0} />
    </>
  );
}

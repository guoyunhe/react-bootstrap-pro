import { Datepicker, FormLabel } from 'react-bootstrap-pro';

export function DatepickerFirstWeekdayDemo() {
  return (
    <>
      <FormLabel htmlFor='datepicker-first-weekday'>Week starts on Sunday</FormLabel>
      <Datepicker id='datepicker-first-weekday' className='w-12' firstWeekday={0} />
    </>
  );
}

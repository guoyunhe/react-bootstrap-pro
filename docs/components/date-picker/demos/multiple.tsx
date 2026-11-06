import { DatePicker, FormLabel } from 'react-bootstrap-pro';

export function DatePickerMultipleDemo() {
  return (
    <>
      <FormLabel htmlFor='datepicker-multiple'>Select multiple dates</FormLabel>
      <DatePicker id='datepicker-multiple' selectionMode='multiple' placeholder='Select dates…' />
    </>
  );
}

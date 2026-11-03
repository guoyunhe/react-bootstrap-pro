import { Datepicker, FormLabel } from 'react-bootstrap-pro';

export function DatepickerMultipleDemo() {
  return (
    <>
      <FormLabel htmlFor='datepicker-multiple'>Select multiple dates</FormLabel>
      <Datepicker id='datepicker-multiple' selectionMode='multiple' placeholder='Select dates…' />
    </>
  );
}

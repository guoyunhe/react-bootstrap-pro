import { Datepicker, FormLabel } from 'react-bootstrap-pro';

export function DatepickerBasicDemo() {
  return (
    <>
      <FormLabel htmlFor='datepicker-basic'>Datepicker</FormLabel>
      <Datepicker id='datepicker-basic' w={12} />
    </>
  );
}

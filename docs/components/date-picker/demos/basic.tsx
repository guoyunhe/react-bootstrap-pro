import { DatePicker, FormLabel } from 'react-bootstrap-pro';

export function DatePickerBasicDemo() {
  return (
    <>
      <FormLabel htmlFor='datepicker-basic'>DatePicker</FormLabel>
      <DatePicker id='datepicker-basic' w={12} />
    </>
  );
}

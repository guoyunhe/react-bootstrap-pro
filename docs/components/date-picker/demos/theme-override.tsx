import { DatePicker, FormLabel } from 'react-bootstrap-pro';

export function DatePickerThemeOverrideDemo() {
  return (
    <>
      <FormLabel htmlFor='datepicker-theme'>Light input, dark datepicker</FormLabel>
      <DatePicker id='datepicker-theme' theme='dark' w={12} />
    </>
  );
}

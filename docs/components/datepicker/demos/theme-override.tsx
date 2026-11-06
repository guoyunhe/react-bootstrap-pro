import { Datepicker, FormLabel } from 'react-bootstrap-pro';

export function DatepickerThemeOverrideDemo() {
  return (
    <>
      <FormLabel htmlFor='datepicker-theme'>Light input, dark datepicker</FormLabel>
      <Datepicker id='datepicker-theme' theme='dark' className='w-12' />
    </>
  );
}

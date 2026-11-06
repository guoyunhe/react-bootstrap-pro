import { DatePicker, FormLabel } from 'react-bootstrap-pro';

export function DatePickerFormatFunctionDemo() {
  return (
    <>
      <FormLabel htmlFor='datepicker-format-function'>Start and end dates</FormLabel>
      <DatePicker
        id='datepicker-format-function'
        locale='en-US'
        selectionMode='multiple-ranged'
        defaultValue={['2026-12-23', '2026-12-28']}
        format={(date, locale) =>
          date.toLocaleDateString(locale, { month: 'short', day: 'numeric' })
        }
      />
    </>
  );
}

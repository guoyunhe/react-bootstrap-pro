import { Datepicker, FormLabel } from 'react-bootstrap-pro';

export function DatepickerFormatFunctionDemo() {
  return (
    <>
      <FormLabel htmlFor='datepicker-format-function'>Start and end dates</FormLabel>
      <Datepicker
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

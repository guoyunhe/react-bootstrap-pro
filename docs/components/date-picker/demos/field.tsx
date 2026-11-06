import { DatePicker, FormField, FormLabel, FormText } from 'react-bootstrap-pro';

export function DatePickerFieldDemo() {
  return (
    <FormField>
      <FormLabel htmlFor='datepicker-field'>DatePicker field</FormLabel>
      <DatePicker id='datepicker-field' w={12} aria-describedby='datepicker-field-help' />
      <FormText id='datepicker-field-help'>We’ll never share your date with anyone else.</FormText>
    </FormField>
  );
}

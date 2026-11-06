import { Datepicker, FormField, FormLabel, FormText } from 'react-bootstrap-pro';

export function DatepickerFieldDemo() {
  return (
    <FormField>
      <FormLabel htmlFor='datepicker-field'>Datepicker field</FormLabel>
      <Datepicker id='datepicker-field' w={12} aria-describedby='datepicker-field-help' />
      <FormText id='datepicker-field-help'>We’ll never share your date with anyone else.</FormText>
    </FormField>
  );
}

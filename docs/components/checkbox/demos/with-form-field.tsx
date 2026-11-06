import { Checkbox, FormField } from 'react-bootstrap-pro';

export function CheckboxWithFormFieldDemo() {
  return (
    <FormField>
      <Checkbox id='checkbox-form-field' />
      <label htmlFor='checkbox-form-field'>Example new checkbox</label>
    </FormField>
  );
}

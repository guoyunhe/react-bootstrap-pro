import { FormField, FormLabel, Select } from 'react-bootstrap-pro';

export function SelectBasicDemo() {
  return (
    <FormField>
      <FormLabel htmlFor='select-basic'>Example select</FormLabel>
      <Select id='select-basic' defaultValue=''>
        <option value=''>Choose one…</option>
        <option value='1'>One</option>
        <option value='2'>Two</option>
        <option value='3'>Three</option>
      </Select>
    </FormField>
  );
}

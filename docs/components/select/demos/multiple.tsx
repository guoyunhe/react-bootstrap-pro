import { FormLabel, Select } from 'react-bootstrap-pro';

export function SelectMultipleDemo() {
  return (
    <div>
      <FormLabel htmlFor='select-multiple'>Multiple select</FormLabel>
      <Select id='select-multiple' multiple defaultValue={['']}>
        <option value=''>Open this select menu</option>
        <option value='1'>One</option>
        <option value='2'>Two</option>
        <option value='3'>Three</option>
      </Select>
    </div>
  );
}

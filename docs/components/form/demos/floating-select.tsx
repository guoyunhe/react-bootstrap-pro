import { FormFloating, Select } from 'react-bootstrap-pro';

export function FloatingLabelsSelectDemo() {
  return (
    <FormFloating>
      <label htmlFor='floating-select'>Works with selects</label>
      <Select id='floating-select' defaultValue='' aria-label='Floating label select example'>
        <option value=''>Open this select menu</option>
        <option value='1'>One</option>
        <option value='2'>Two</option>
        <option value='3'>Three</option>
      </Select>
    </FormFloating>
  );
}

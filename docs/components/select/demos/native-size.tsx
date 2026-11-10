import { FormLabel, Select } from 'react-bootstrap-pro';

export function SelectNativeSizeDemo() {
  return (
    <div>
      <FormLabel htmlFor='select-native-size'>Size 3 select</FormLabel>
      <Select id='select-native-size' htmlSize={3} defaultValue=''>
        <option value=''>Open this select menu</option>
        <option value='1'>One</option>
        <option value='2'>Two</option>
        <option value='3'>Three</option>
      </Select>
    </div>
  );
}

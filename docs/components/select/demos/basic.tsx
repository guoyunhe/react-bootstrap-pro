import { Select } from 'react-bootstrap-pro';

export function SelectBasicDemo() {
  return (
    <div>
      <label htmlFor='select-country'>Choose a country</label>
      <Select id='select-country' defaultValue=''>
        <option value=''>Choose...</option>
        <option value='us'>United States</option>
        <option value='ca'>Canada</option>
        <option value='jp'>Japan</option>
      </Select>
    </div>
  );
}

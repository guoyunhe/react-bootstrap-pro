import { FormLabel, Input } from 'react-bootstrap-pro';

export function InputDatalistDemo() {
  return (
    <>
      <FormLabel htmlFor='input-datalist'>Datalist example</FormLabel>
      <Input id='input-datalist' list='input-datalist-options' placeholder='Type to search...' />
      <datalist id='input-datalist-options'>
        <option value='San Francisco' />
        <option value='New York' />
        <option value='Seattle' />
        <option value='Los Angeles' />
        <option value='Chicago' />
      </datalist>
    </>
  );
}

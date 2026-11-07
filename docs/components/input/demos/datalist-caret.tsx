import { FormLabel, Input } from 'react-bootstrap-pro';

export function InputDatalistCaretDemo() {
  return (
    <>
      <FormLabel htmlFor='input-datalist-caret'>Datalist example with caret</FormLabel>
      <Input
        id='input-datalist-caret'
        list='input-datalist-caret-options'
        caret
        placeholder='Type to search...'
      />
      <datalist id='input-datalist-caret-options'>
        <option value='San Francisco' />
        <option value='New York' />
        <option value='Seattle' />
        <option value='Los Angeles' />
        <option value='Chicago' />
      </datalist>
    </>
  );
}

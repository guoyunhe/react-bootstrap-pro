import { FormLabel, Input } from 'react-bootstrap-pro';

export function InputColorDemo() {
  return (
    <>
      <FormLabel htmlFor='input-color'>Color picker</FormLabel>
      <Input id='input-color' type='color' defaultValue='#631aff' title='Choose your color' />
    </>
  );
}

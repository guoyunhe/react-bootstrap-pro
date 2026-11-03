import { FormField, FormLabel, FormText, Range } from 'react-bootstrap-pro';

export function RangeFieldDemo() {
  return (
    <FormField>
      <FormLabel htmlFor='range-field'>Volume</FormLabel>
      <Range id='range-field' defaultValue={70} bubble />
      <FormText component='small'>Adjust the volume level.</FormText>
    </FormField>
  );
}

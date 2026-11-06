import { useState } from 'react';
import { ChipInput, FormField, FormLabel, FormText } from 'react-bootstrap-pro';

export function ChipInputControlledDemo() {
  const [values, setValues] = useState(['JavaScript', 'TypeScript']);

  return (
    <FormField>
      <FormLabel htmlFor='chips-controlled'>Skills</FormLabel>
      <ChipInput
        id='chips-controlled'
        value={values}
        onChange={setValues}
        placeholder='Add more…'
      />
      <FormText>Current values: {values.join(', ') || 'None'}</FormText>
    </FormField>
  );
}

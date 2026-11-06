import { ChipInput, FormField, FormLabel, FormText } from 'react-bootstrap-pro';

export function ChipInputWithLabelDemo() {
  return (
    <FormField>
      <FormLabel htmlFor='chips-labeled'>Skills</FormLabel>
      <ChipInput
        id='chips-labeled'
        theme='primary'
        defaultValue={['React']}
        placeholder='Add skill...'
      />
      <FormText>Press Enter or comma to add a skill.</FormText>
    </FormField>
  );
}

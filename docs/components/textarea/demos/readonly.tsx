import { FormField, FormLabel, Textarea } from 'react-bootstrap-pro';

export function TextareaReadonlyDemo() {
  return (
    <FormField>
      <FormLabel htmlFor='textarea-readonly'>Readonly textarea</FormLabel>
      <Textarea
        id='textarea-readonly'
        rows={2}
        defaultValue='This value cannot be edited, but it can be selected and submitted.'
        readOnly
      />
    </FormField>
  );
}

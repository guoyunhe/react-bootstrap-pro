import { FormField, FormLabel, Textarea } from 'react-bootstrap-pro';

export function TextareaDisabledDemo() {
  return (
    <FormField>
      <FormLabel htmlFor='textarea-disabled'>Disabled textarea</FormLabel>
      <Textarea id='textarea-disabled' rows={3} placeholder='Disabled textarea' disabled />
    </FormField>
  );
}

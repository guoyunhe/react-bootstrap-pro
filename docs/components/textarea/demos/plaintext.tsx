import { FormField, FormLabel, Textarea } from 'react-bootstrap-pro';

export function TextareaPlaintextDemo() {
  return (
    <FormField>
      <FormLabel htmlFor='textarea-plaintext'>Readonly plain text</FormLabel>
      <Textarea
        id='textarea-plaintext'
        rows={2}
        plaintext
        readOnly
        defaultValue='This value is styled as plain text.'
      />
    </FormField>
  );
}

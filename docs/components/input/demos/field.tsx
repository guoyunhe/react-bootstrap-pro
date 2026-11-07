import { FormField, FormLabel, FormText, Input } from 'react-bootstrap-pro';

export function InputFieldDemo() {
  return (
    <FormField>
      <FormLabel htmlFor='input-field-email'>Email address</FormLabel>
      <Input
        id='input-field-email'
        type='email'
        placeholder='name@example.com'
        aria-describedby='input-field-help'
      />
      <FormText id='input-field-help'>We’ll never share your email with anyone else.</FormText>
    </FormField>
  );
}

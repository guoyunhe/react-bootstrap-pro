import { FormLabel, FormText, Input } from 'react-bootstrap-pro';

export function InputHelpBlockDemo() {
  return (
    <>
      <FormLabel htmlFor='input-password-block'>Password</FormLabel>
      <Input
        id='input-password-block'
        type='password'
        aria-describedby='input-password-block-help'
      />
      <FormText id='input-password-block-help'>
        Your password must be 8–20 characters long, contain letters and numbers, and must not
        contain spaces, special characters, or emoji.
      </FormText>
    </>
  );
}

import { useState } from 'react';
import { FormControl, FormField, FormLabel, FormText, PasswordStrength } from 'react-bootstrap-pro';

export function PasswordStrengthFieldDemo() {
  const [password, setPassword] = useState('');

  return (
    <FormField>
      <FormLabel htmlFor='password-field'>Password</FormLabel>
      <FormControl
        type='password'
        id='password-field'
        placeholder='Enter password'
        aria-describedby='password-field-help'
        value={password}
        onChange={(event) => setPassword(event.currentTarget.value)}
      />
      <PasswordStrength value={password} showText />
      <FormText id='password-field-help'>
        Use at least 8 characters with upper and lowercase letters, numbers, and symbols.
      </FormText>
    </FormField>
  );
}

import { useState } from 'react';
import { Box, FormControl, FormLabel, PasswordStrength } from 'react-bootstrap-pro';

export function PasswordStrengthBasicDemo() {
  const [password, setPassword] = useState('');

  return (
    <Box>
      <FormLabel htmlFor='password-basic'>Password</FormLabel>
      <FormControl
        type='password'
        id='password-basic'
        placeholder='Enter password'
        value={password}
        onChange={(event) => setPassword(event.currentTarget.value)}
      />
      <PasswordStrength value={password} />
    </Box>
  );
}

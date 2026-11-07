import { useState } from 'react';
import { Box, FormLabel, Input, PasswordStrength } from 'react-bootstrap-pro';

export function PasswordStrengthBasicDemo() {
  const [password, setPassword] = useState('');

  return (
    <Box>
      <FormLabel htmlFor='password-basic'>Password</FormLabel>
      <Input
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

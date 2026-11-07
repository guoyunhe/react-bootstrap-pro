import { useState } from 'react';
import { Box, FormLabel, Input, PasswordStrength } from 'react-bootstrap-pro';

export function PasswordStrengthBarDemo() {
  const [password, setPassword] = useState('');

  return (
    <Box>
      <FormLabel htmlFor='password-bar'>Password</FormLabel>
      <Input
        type='password'
        id='password-bar'
        placeholder='Enter password'
        value={password}
        onChange={(event) => setPassword(event.currentTarget.value)}
      />
      <PasswordStrength value={password} variant='bar' />
    </Box>
  );
}

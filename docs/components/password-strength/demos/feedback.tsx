import { useState } from 'react';
import { Box, FormLabel, Input, PasswordStrength } from 'react-bootstrap-pro';

export function PasswordStrengthFeedbackDemo() {
  const [password, setPassword] = useState('');

  return (
    <Box>
      <FormLabel htmlFor='password-feedback'>Password</FormLabel>
      <Input
        type='password'
        id='password-feedback'
        placeholder='Enter password'
        value={password}
        onChange={(event) => setPassword(event.currentTarget.value)}
      />
      <PasswordStrength value={password} showText />
    </Box>
  );
}

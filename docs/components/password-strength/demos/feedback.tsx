import { useState } from 'react';
import { Box, FormControl, FormLabel, PasswordStrength } from 'react-bootstrap-pro';

export function PasswordStrengthFeedbackDemo() {
  const [password, setPassword] = useState('');

  return (
    <Box>
      <FormLabel htmlFor='password-feedback'>Password</FormLabel>
      <FormControl
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

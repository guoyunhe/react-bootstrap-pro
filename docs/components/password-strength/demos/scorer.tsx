import { useState } from 'react';
import { Box, FormLabel, Input, PasswordStrength } from 'react-bootstrap-pro';

export function PasswordStrengthScorerDemo() {
  const [password, setPassword] = useState('');

  return (
    <Box>
      <FormLabel htmlFor='password-scorer'>Password</FormLabel>
      <Input
        type='password'
        id='password-scorer'
        placeholder='Enter password'
        value={password}
        onChange={(event) => setPassword(event.currentTarget.value)}
      />
      <PasswordStrength
        value={password}
        scorer={(value) => value.length * 2}
        thresholds={[4, 10, 16]}
        showText
      />
    </Box>
  );
}

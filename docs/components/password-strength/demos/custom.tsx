import { useState } from 'react';
import { Box, FormControl, FormLabel, PasswordStrength } from 'react-bootstrap-pro';

export function PasswordStrengthCustomDemo() {
  const [password, setPassword] = useState('');

  return (
    <Box>
      <FormLabel htmlFor='password-custom'>Password (12 characters or more)</FormLabel>
      <FormControl
        type='password'
        id='password-custom'
        placeholder='Enter password'
        value={password}
        onChange={(event) => setPassword(event.currentTarget.value)}
      />
      <PasswordStrength
        value={password}
        minLength={12}
        weights={{ uppercase: 0, special: 2 }}
        thresholds={[3, 5, 7]}
        messages={{
          weak: 'Too weak',
          fair: 'Could be better',
          good: 'Good password',
          strong: 'Excellent!',
        }}
        showText
      />
    </Box>
  );
}

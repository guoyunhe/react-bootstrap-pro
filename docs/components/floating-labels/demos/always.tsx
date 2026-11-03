import { Box, FormControl, FormFloating } from 'react-bootstrap-pro';

export function FloatingLabelsAlwaysDemo() {
  return (
    <Box display='flex' flexDirection='column' gap={3}>
      <FormFloating always>
        <label htmlFor='floating-always-email'>Email address</label>
        <FormControl
          type='email'
          id='floating-always-email'
          placeholder='name@example.com'
          autoComplete='email'
        />
      </FormFloating>
      <FormFloating always>
        <label htmlFor='floating-always-password'>Password</label>
        <FormControl
          type='password'
          id='floating-always-password'
          placeholder='••••••••'
          autoComplete='current-password'
        />
      </FormFloating>
    </Box>
  );
}

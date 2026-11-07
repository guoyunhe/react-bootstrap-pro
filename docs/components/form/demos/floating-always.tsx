import { Box, FormFloating, Input } from 'react-bootstrap-pro';

export function FloatingLabelsAlwaysDemo() {
  return (
    <Box d='flex' flexDirection='column' gap={3}>
      <FormFloating always>
        <label htmlFor='floating-always-email'>Email address</label>
        <Input
          type='email'
          id='floating-always-email'
          placeholder='name@example.com'
          autoComplete='email'
        />
      </FormFloating>
      <FormFloating always>
        <label htmlFor='floating-always-password'>Password</label>
        <Input
          type='password'
          id='floating-always-password'
          placeholder='••••••••'
          autoComplete='current-password'
        />
      </FormFloating>
    </Box>
  );
}

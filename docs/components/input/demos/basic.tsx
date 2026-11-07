import { Box, Input } from 'react-bootstrap-pro';

export function InputBasicDemo() {
  return (
    <Box d='flex' flexDirection='column' gap={3}>
      <label htmlFor='input-email'>Email address</label>
      <Input type='email' id='input-email' placeholder='name@example.com' autoComplete='email' />
      <label htmlFor='input-password'>Password</label>
      <Input
        type='password'
        id='input-password'
        placeholder='Password'
        autoComplete='current-password'
      />
    </Box>
  );
}

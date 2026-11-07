import { Box, FormFloating, Input } from 'react-bootstrap-pro';

export function FloatingLabelsBasicDemo() {
  return (
    <Box d='flex' flexDirection='column' gap={3}>
      <FormFloating>
        <label htmlFor='floating-basic-email'>Email address</label>
        <Input
          type='email'
          id='floating-basic-email'
          placeholder='name@example.com'
          autoComplete='email'
        />
      </FormFloating>
      <FormFloating>
        <label htmlFor='floating-basic-password'>Password</label>
        <Input
          type='password'
          id='floating-basic-password'
          placeholder='Password'
          autoComplete='current-password'
        />
      </FormFloating>
      <FormFloating>
        <label htmlFor='floating-basic-value'>Input with value</label>
        <Input
          type='email'
          id='floating-basic-value'
          placeholder='name@example.com'
          defaultValue='test@example.com'
        />
      </FormFloating>
    </Box>
  );
}

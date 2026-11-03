import { Box, FormControl, FormFloating } from 'react-bootstrap-pro';

export function FloatingLabelsBasicDemo() {
  return (
    <Box display='flex' flexDirection='column' gap={3}>
      <FormFloating>
        <label htmlFor='floating-basic-email'>Email address</label>
        <FormControl
          type='email'
          id='floating-basic-email'
          placeholder='name@example.com'
          autoComplete='email'
        />
      </FormFloating>
      <FormFloating>
        <label htmlFor='floating-basic-password'>Password</label>
        <FormControl
          type='password'
          id='floating-basic-password'
          placeholder='Password'
          autoComplete='current-password'
        />
      </FormFloating>
      <FormFloating>
        <label htmlFor='floating-basic-value'>Input with value</label>
        <FormControl
          type='email'
          id='floating-basic-value'
          placeholder='name@example.com'
          defaultValue='test@example.com'
        />
      </FormFloating>
    </Box>
  );
}

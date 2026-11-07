import { Box, FormFloating, Input } from 'react-bootstrap-pro';

export function FloatingLabelsPlaintextDemo() {
  return (
    <Box d='flex' flexDirection='column' gap={3}>
      <FormFloating>
        <label htmlFor='floating-plaintext-empty'>Empty input</label>
        <Input
          type='email'
          id='floating-plaintext-empty'
          placeholder='name@example.com'
          plaintext
          readOnly
        />
      </FormFloating>
      <FormFloating>
        <label htmlFor='floating-plaintext-value'>Input with value</label>
        <Input
          type='email'
          id='floating-plaintext-value'
          placeholder='name@example.com'
          defaultValue='name@example.com'
          plaintext
          readOnly
        />
      </FormFloating>
    </Box>
  );
}

import { Box, OTPInput } from 'react-bootstrap-pro';

export function OTPInputValidationDemo() {
  return (
    <Box d='flex' flexDirection='column' gap={3}>
      <OTPInput
        aria-label='Valid verification code'
        validation='valid'
        defaultValue='123456'
        connected
      />
      <OTPInput
        aria-label='Invalid verification code'
        validation='invalid'
        defaultValue='123'
        connected
      />
    </Box>
  );
}

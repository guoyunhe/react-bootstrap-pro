import { Box, OtpInput } from 'react-bootstrap-pro';

export function OtpInputValidationDemo() {
  return (
    <Box d='flex' flexDirection='column' gap={3}>
      <OtpInput
        aria-label='Valid verification code'
        validation='valid'
        defaultValue='123456'
        connected
      />
      <OtpInput
        aria-label='Invalid verification code'
        validation='invalid'
        defaultValue='123'
        connected
      />
    </Box>
  );
}

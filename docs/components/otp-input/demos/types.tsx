import { Box, OtpInput } from 'react-bootstrap-pro';

export function OtpInputTypesDemo() {
  return (
    <Box display='flex' flexDirection='column' gap={3}>
      <OtpInput aria-label='Alphanumeric code' type='alphanumeric' connected />
      <OtpInput aria-label='Masked code' mask connected />
    </Box>
  );
}

import { Box, OTPInput } from 'react-bootstrap-pro';

export function OTPInputTypesDemo() {
  return (
    <Box d='flex' flexDirection='column' gap={3}>
      <OTPInput aria-label='Alphanumeric code' type='alphanumeric' connected />
      <OTPInput aria-label='Masked code' mask connected />
    </Box>
  );
}

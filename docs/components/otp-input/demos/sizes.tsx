import { Box, OTPInput } from 'react-bootstrap-pro';

export function OTPInputSizesDemo() {
  return (
    <Box d='flex' flexDirection='column' gap={3}>
      <OTPInput aria-label='Small verification code' size='sm' />
      <OTPInput aria-label='Large verification code' size='lg' />
    </Box>
  );
}

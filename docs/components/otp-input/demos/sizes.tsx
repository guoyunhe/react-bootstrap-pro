import { Box, OtpInput } from 'react-bootstrap-pro';

export function OtpInputSizesDemo() {
  return (
    <Box d='flex' flexDirection='column' gap={3}>
      <OtpInput aria-label='Small verification code' size='sm' />
      <OtpInput aria-label='Large verification code' size='lg' />
    </Box>
  );
}

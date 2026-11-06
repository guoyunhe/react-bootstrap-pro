import { Box, CloseButton } from 'react-bootstrap-pro';

export function CloseButtonDarkVariantDemo() {
  return (
    <Box data-bs-theme='dark' d='flex' gap={2} p={3} bg='body' fg='body' rounded={3}>
      <CloseButton />
      <CloseButton disabled />
    </Box>
  );
}

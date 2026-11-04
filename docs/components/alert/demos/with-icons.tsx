import { BiExclamationTriangle } from 'react-bootstrap-icons-pro';
import { Alert, Box } from 'react-bootstrap-pro';

export function AlertWithIconsDemo() {
  return (
    <Alert theme='warning' display='flex' alignItems='center' gap={3}>
      <BiExclamationTriangle size={20} aria-hidden='true' />
      <Box component='p' mb={0}>
        Check the details before continuing.
      </Box>
    </Alert>
  );
}

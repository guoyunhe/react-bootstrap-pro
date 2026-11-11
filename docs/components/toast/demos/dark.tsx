import { useState } from 'react';
import { Box, Button, CloseButton, Toast, ToastBody, ToastHeader } from 'react-bootstrap-pro';

export function ToastDarkDemo() {
  const [show, setShow] = useState(true);

  return (
    <Toast show={show} data-bs-theme='dark'>
      <ToastHeader>
        <Box component='strong' me='auto'>
          Bootstrap
        </Box>
        <Box component='small' fgo={60}>
          2 seconds ago
        </Box>
        <CloseButton onClick={() => setShow(false)} />
      </ToastHeader>
      <ToastBody>
        This toast is in dark mode by default.
        <Box d='flex' gap={2} mt={2}>
          <Button theme='primary' variant='solid' size='sm'>
            Take action
          </Button>
          <Button theme='secondary' variant='solid' size='sm' onClick={() => setShow(false)}>
            Close
          </Button>
        </Box>
      </ToastBody>
    </Toast>
  );
}

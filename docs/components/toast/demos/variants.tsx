import { useState } from 'react';
import { Box, Button, CloseButton, Toast, ToastBody, ToastHeader } from 'react-bootstrap-pro';

export function ToastVariantsDemo() {
  const [showPrimary, setShowPrimary] = useState(true);
  const [showAccent, setShowAccent] = useState(true);

  return (
    <Box d='flex' flexDirection='column' gap={3}>
      <Toast show={showPrimary} theme='primary'>
        <ToastHeader>
          <Box component='strong' me='auto'>
            Bootstrap
          </Box>
          <Box component='small' fgo={60}>
            2 seconds ago
          </Box>
          <CloseButton onClick={() => setShowPrimary(false)} />
        </ToastHeader>
        <ToastBody>
          This toast is a primary themed toast.
          <Box d='flex' gap={2} mt={2}>
            <Button variant='solid' size='sm'>
              Take action
            </Button>
            <Button
              theme='secondary'
              variant='solid'
              size='sm'
              onClick={() => setShowPrimary(false)}
            >
              Close
            </Button>
          </Box>
        </ToastBody>
      </Toast>
      <Toast show={showAccent} theme='accent'>
        <ToastHeader>
          <Box component='strong' me='auto'>
            Bootstrap
          </Box>
          <Box component='small' fgo={60}>
            2 seconds ago
          </Box>
          <CloseButton onClick={() => setShowAccent(false)} />
        </ToastHeader>
        <ToastBody>
          This toast is an accent-themed toast.
          <Box d='flex' gap={2} mt={2}>
            <Button variant='solid' size='sm'>
              Take action
            </Button>
            <Button
              theme='secondary'
              variant='solid'
              size='sm'
              onClick={() => setShowAccent(false)}
            >
              Close
            </Button>
          </Box>
        </ToastBody>
      </Toast>
    </Box>
  );
}

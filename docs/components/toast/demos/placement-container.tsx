import { useState } from 'react';
import {
  Box,
  CloseButton,
  Toast,
  ToastBody,
  ToastContainer,
  ToastHeader,
} from 'react-bootstrap-pro';

export function ToastPlacementContainerDemo() {
  const [showFirst, setShowFirst] = useState(true);
  const [showSecond, setShowSecond] = useState(true);

  return (
    <Box position='relative' bg='1' rounded p={3} style={{ minHeight: 360 }}>
      <ToastContainer top={0} end={0} p={3}>
        <Toast show={showFirst}>
          <ToastHeader>
            <Box component='strong' me='auto'>
              Bootstrap
            </Box>
            <Box component='small' fg='2'>
              just now
            </Box>
            <CloseButton onClick={() => setShowFirst(false)} />
          </ToastHeader>
          <ToastBody>See? Just like this.</ToastBody>
        </Toast>
        <Toast show={showSecond}>
          <ToastHeader>
            <Box component='strong' me='auto'>
              Bootstrap
            </Box>
            <Box component='small' fg='2'>
              2 seconds ago
            </Box>
            <CloseButton onClick={() => setShowSecond(false)} />
          </ToastHeader>
          <ToastBody>Heads up, toasts will stack automatically.</ToastBody>
        </Toast>
      </ToastContainer>
    </Box>
  );
}

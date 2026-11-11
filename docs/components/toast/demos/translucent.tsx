import { useState } from 'react';
import { Box, CloseButton, Toast, ToastBody, ToastHeader } from 'react-bootstrap-pro';

export function ToastTranslucentDemo() {
  const [show, setShow] = useState(true);

  return (
    <Toast show={show}>
      <ToastHeader>
        <Box component='strong' me='auto'>
          Bootstrap
        </Box>
        <Box component='small' fg='2'>
          11 mins ago
        </Box>
        <CloseButton onClick={() => setShow(false)} />
      </ToastHeader>
      <ToastBody>Hello, world! This is a toast message.</ToastBody>
    </Toast>
  );
}

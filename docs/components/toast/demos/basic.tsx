import { useState } from 'react';
import { Box, CloseButton, Toast, ToastBody, ToastHeader } from 'react-bootstrap-pro';

export function ToastBasicDemo() {
  const [show, setShow] = useState(true);

  return (
    <Toast show={show}>
      <ToastHeader>
        <Box component='strong' me='auto'>
          Bootstrap
        </Box>
        <small>11 mins ago</small>
        <CloseButton onClick={() => setShow(false)} />
      </ToastHeader>
      <ToastBody>Hello, world! This is a toast message.</ToastBody>
    </Toast>
  );
}

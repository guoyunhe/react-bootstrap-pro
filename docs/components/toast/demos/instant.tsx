import { useState } from 'react';
import { Box, CloseButton, Toast, ToastBody, ToastHeader } from 'react-bootstrap-pro';

export function ToastInstantDemo() {
  const [show, setShow] = useState(true);

  return (
    <Toast show={show} instant>
      <ToastHeader>
        <Box component='strong' me='auto'>
          Bootstrap
        </Box>
        <small>11 mins ago</small>
        <CloseButton onClick={() => setShow(false)} />
      </ToastHeader>
      <ToastBody>This toast appears and disappears instantly.</ToastBody>
    </Toast>
  );
}

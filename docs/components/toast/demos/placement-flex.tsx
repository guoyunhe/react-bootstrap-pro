import { useState } from 'react';
import { Box, CloseButton, Toast, ToastBody, ToastHeader } from 'react-bootstrap-pro';

export function ToastPlacementFlexDemo() {
  const [show, setShow] = useState(true);

  return (
    <Box d='flex' justifyContent='center' alignItems='center' style={{ minHeight: 240 }}>
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
    </Box>
  );
}

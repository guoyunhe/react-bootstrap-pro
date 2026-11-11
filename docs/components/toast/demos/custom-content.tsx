import { useState } from 'react';
import { Box, CloseButton, Toast, ToastBody } from 'react-bootstrap-pro';

export function ToastCustomContentDemo() {
  const [show, setShow] = useState(true);

  return (
    <Toast show={show}>
      <Box d='flex' justifyContent='between'>
        <ToastBody>Hello, world! This is a toast message.</ToastBody>
        <CloseButton me={3} m='auto' onClick={() => setShow(false)} />
      </Box>
    </Toast>
  );
}

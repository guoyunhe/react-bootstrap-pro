import { useState } from 'react';
import { Box, Button, Toast, ToastBody } from 'react-bootstrap-pro';

export function ToastCustomActionsDemo() {
  const [show, setShow] = useState(true);

  return (
    <Toast show={show}>
      <ToastBody>
        This is a custom toast message with additional content like a horizontal rule and buttons.
        <Box component='hr' my={3} />
        <Box d='flex' gap={2}>
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

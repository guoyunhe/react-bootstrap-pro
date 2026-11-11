import { useEffect, useState } from 'react';
import {
  Box,
  Button,
  CloseButton,
  Toast,
  ToastBody,
  ToastContainer,
  ToastHeader,
} from 'react-bootstrap-pro';

export function ToastLiveDemo() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    if (!show) return;

    const timer = setTimeout(() => setShow(false), 5000);
    return () => clearTimeout(timer);
  }, [show]);

  return (
    <>
      <Button theme='primary' variant='solid' onClick={() => setShow(true)}>
        Show live toast
      </Button>
      <ToastContainer position='fixed' bottom={0} end={0} p={3}>
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
      </ToastContainer>
    </>
  );
}

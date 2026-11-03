import { Alert, CloseButton } from 'react-bootstrap-pro';

export function AlertDismissDemo() {
  return (
    <Alert theme='warning' className='d-flex align-items-center gap-2'>
      <span>Something needs your attention.</span>
      <CloseButton data-bs-dismiss='alert' className='ms-auto' />
    </Alert>
  );
}

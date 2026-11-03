import { Alert, CloseButton } from 'react-bootstrap-pro';

export function AlertDismissDemo() {
  return (
    <Alert theme='warning' display='flex' alignItems='center' gap={2}>
      <span>Something needs your attention.</span>
      <CloseButton data-bs-dismiss='alert' marginStart='auto' />
    </Alert>
  );
}

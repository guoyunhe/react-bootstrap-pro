import { ToastContainer, Toast, ToastHeader, CloseButton, ToastBody } from 'react-bootstrap-pro';

export function ToastsBasicDemo() {
  return (
    <ToastContainer>
      <Toast show role='alert' aria-live='assertive' aria-atomic='true'>
        <ToastHeader>
          <strong>Saved</strong>
          <CloseButton data-bs-dismiss='toast' />
        </ToastHeader>
        <ToastBody>Your changes are ready.</ToastBody>
      </Toast>
    </ToastContainer>
  );
}

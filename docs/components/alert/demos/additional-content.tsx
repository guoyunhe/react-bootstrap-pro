import { Alert } from 'react-bootstrap-pro';

export function AlertAdditionalContentDemo() {
  return (
    <Alert theme='success'>
      <h2 className='alert-heading'>Well done!</h2>
      <p>Your changes have been saved successfully.</p>
      <hr />
      <p className='mb-0'>You can continue to the next step.</p>
    </Alert>
  );
}

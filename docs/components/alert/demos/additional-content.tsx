import { Alert, Box } from 'react-bootstrap-pro';

export function AlertAdditionalContentDemo() {
  return (
    <Alert theme='success'>
      <h2 className='alert-heading'>Well done!</h2>
      <p>Your changes have been saved successfully.</p>
      <hr />
      <Box component='p' marginBottom={0}>
        You can continue to the next step.
      </Box>
    </Alert>
  );
}

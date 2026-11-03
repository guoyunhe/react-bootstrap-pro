import { Spinner } from 'react-bootstrap-pro';

export function SpinnerBasicDemo() {
  return (
    <>
      <Spinner label='Loading results' />
      <Spinner variant='grow' size='sm' label='Saving' />
    </>
  );
}

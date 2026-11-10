import { Button, Spinner } from 'react-bootstrap-pro';

export function ButtonLoadingDemo() {
  return (
    <Button variant='solid' theme='primary' disabled>
      <Spinner size='sm' aria-hidden />
      <span role='status'>Saving…</span>
    </Button>
  );
}

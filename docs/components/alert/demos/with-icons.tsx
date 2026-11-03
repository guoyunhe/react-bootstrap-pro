import { BiExclamationTriangle } from 'react-bootstrap-icons-pro';
import { Alert } from 'react-bootstrap-pro';

export function AlertWithIconsDemo() {
  return (
    <Alert theme='warning' className='d-flex align-items-center gap-3'>
      <BiExclamationTriangle size={20} aria-hidden='true' />
      <p className='mb-0'>Check the details before continuing.</p>
    </Alert>
  );
}

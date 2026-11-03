import { Alert } from 'react-bootstrap-pro';

export function AlertWithIconsDemo() {
  return (
    <Alert theme='warning' className='d-flex align-items-center gap-3'>
      <svg
        width='20'
        height='20'
        viewBox='0 0 16 16'
        fill='none'
        stroke='currentColor'
        aria-hidden='true'
      >
        <path d='M8 1.5 15 14H1L8 1.5Z' />
        <path d='M8 6v3m0 2v.01' />
      </svg>
      <p className='mb-0'>Check the details before continuing.</p>
    </Alert>
  );
}

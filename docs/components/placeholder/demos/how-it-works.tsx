import { Placeholder } from 'react-bootstrap-pro';

export function PlaceholderHowItWorksDemo() {
  return (
    <div className='d-grid gap-2' style={{ maxWidth: 320 }}>
      <p>
        <Placeholder w={50} />
      </p>
      <Placeholder
        component='button'
        className='btn btn-primary disabled'
        type='button'
        disabled
        w={50}
      />
    </div>
  );
}

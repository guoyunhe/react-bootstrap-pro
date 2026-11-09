import { Placeholder } from 'react-bootstrap-pro';

export function PlaceholderWidthDemo() {
  return (
    <div className='d-grid gap-2' style={{ maxWidth: 320 }}>
      <Placeholder w={50} />
      <Placeholder w={75} />
      <Placeholder style={{ width: '25%' }} />
    </div>
  );
}

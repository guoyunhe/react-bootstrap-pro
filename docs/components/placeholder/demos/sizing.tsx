import { Placeholder } from 'react-bootstrap-pro';

const sizes = ['lg', undefined, 'sm', 'xs'] as const;

export function PlaceholderSizingDemo() {
  return (
    <div className='d-grid gap-2' style={{ maxWidth: 320 }}>
      {sizes.map((size, index) => (
        <Placeholder key={index} size={size} w={100} />
      ))}
    </div>
  );
}

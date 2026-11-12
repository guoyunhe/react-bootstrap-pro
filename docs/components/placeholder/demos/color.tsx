import { Box, Placeholder } from 'react-bootstrap-pro';

const colors = [
  'primary',
  'accent',
  'success',
  'danger',
  'warning',
  'info',
  'inverse',
  'secondary',
] as const;

export function PlaceholderColorDemo() {
  return (
    <Box d='grid' gap={2} style={{ maxWidth: 320 }}>
      <Placeholder w={75} />
      {colors.map((color) => (
        <Placeholder key={color} bg={color} w={75} />
      ))}
    </Box>
  );
}

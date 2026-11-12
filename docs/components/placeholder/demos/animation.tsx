import { Box, Placeholder, PlaceholderGroup } from 'react-bootstrap-pro';

const animations = ['wave', 'pulse', 'glow'] as const;

export function PlaceholderAnimationDemo() {
  return (
    <Box d='grid' gap={2} style={{ maxWidth: 320 }}>
      {animations.map((animation) => (
        <PlaceholderGroup key={animation} component='p' animation={animation}>
          <Placeholder w={100} />
        </PlaceholderGroup>
      ))}
    </Box>
  );
}

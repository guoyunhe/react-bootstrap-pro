import { Box, Chip } from 'react-bootstrap-pro';

const themes = [
  'primary',
  'accent',
  'success',
  'danger',
  'warning',
  'info',
  'inverse',
  'secondary',
] as const;

export function ChipsThemedDemo() {
  return (
    <Box d='flex' flexWrap='wrap' alignItems='center' gap={2}>
      <Chip>Default</Chip>
      {themes.map((theme) => (
        <Chip key={theme} theme={theme}>
          {theme}
        </Chip>
      ))}
    </Box>
  );
}

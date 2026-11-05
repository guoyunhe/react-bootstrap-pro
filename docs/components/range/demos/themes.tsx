import { Box, Range } from 'react-bootstrap-pro';

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

export function RangeThemesDemo() {
  return (
    <Box d='flex' flexDirection='column' gap={3}>
      {themes.map((theme) => (
        <Range key={theme} theme={theme} defaultValue={50} aria-label={`Example ${theme} range`} />
      ))}
    </Box>
  );
}

import { Badge, Stack } from 'react-bootstrap-pro';

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

export function BadgeVariantsSubtleDemo() {
  return (
    <Stack direction='horizontal' gap={2} flexWrap='wrap'>
      {themes.map((theme) => (
        <Badge key={theme} theme={theme} variant='subtle'>
          {theme}
        </Badge>
      ))}
    </Stack>
  );
}

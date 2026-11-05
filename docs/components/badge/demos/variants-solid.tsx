import { Badge, Box } from 'react-bootstrap-pro';

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

export function BadgeVariantsSolidDemo() {
  return (
    <Box display='flex' gap={2} flexWrap='wrap'>
      {themes.map((theme) => (
        <Badge key={theme} theme={theme}>
          {theme}
        </Badge>
      ))}
    </Box>
  );
}

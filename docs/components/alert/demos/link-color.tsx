import { Alert, AlertLink, Box } from 'react-bootstrap-pro';

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

export function AlertLinkColorDemo() {
  return (
    <Box display='grid' gap={2}>
      {themes.map((theme) => (
        <Alert key={theme} theme={theme}>
          A {theme} alert with an <AlertLink href='#details'>example link</AlertLink>.
        </Alert>
      ))}
    </Box>
  );
}

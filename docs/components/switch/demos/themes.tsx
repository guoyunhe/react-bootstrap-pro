import { Box, FormField, Switch } from 'react-bootstrap-pro';

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

export function SwitchThemesDemo() {
  return (
    <Box d='flex' flexWrap='wrap' gap={4}>
      {themes.map((theme) => (
        <FormField key={theme}>
          <Switch id={`switch-theme-${theme}`} theme={theme} defaultChecked />
          <label htmlFor={`switch-theme-${theme}`}>Example {theme} switch</label>
        </FormField>
      ))}
    </Box>
  );
}

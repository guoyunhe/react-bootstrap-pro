import { Box, Checkbox, FormField } from 'react-bootstrap-pro';

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

export function CheckboxThemesDemo() {
  return (
    <Box d='flex' flexDirection='column' gap={2}>
      {themes.map((theme) => (
        <FormField key={theme}>
          <Checkbox id={`checkbox-theme-${theme}`} theme={theme} defaultChecked />
          <label htmlFor={`checkbox-theme-${theme}`}>Example {theme} checkbox</label>
        </FormField>
      ))}
    </Box>
  );
}

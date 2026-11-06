import { Box, FormField, Radio } from 'react-bootstrap-pro';

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

export function RadioThemesDemo() {
  return (
    <Box d='flex' flexDirection='column' gap={2}>
      {themes.map((theme) => (
        <FormField key={theme}>
          <Radio
            id={`radio-theme-${theme}`}
            name={`radio-theme-${theme}`}
            theme={theme}
            defaultChecked
          />
          <label htmlFor={`radio-theme-${theme}`}>Example {theme} radio</label>
        </FormField>
      ))}
    </Box>
  );
}

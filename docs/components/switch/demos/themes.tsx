import { Box, FormField, Switch, SwitchInput } from 'react-bootstrap-pro';

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
          <Switch theme={theme}>
            <SwitchInput id={`switch-theme-${theme}`} defaultChecked />
          </Switch>
          <label htmlFor={`switch-theme-${theme}`}>Example {theme} switch</label>
        </FormField>
      ))}
    </Box>
  );
}

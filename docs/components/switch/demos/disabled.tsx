import { Box, FormField, Switch } from 'react-bootstrap-pro';

export function SwitchDisabledDemo() {
  return (
    <Box d='flex' flexDirection='column' gap={2}>
      <FormField>
        <Switch id='switch-disabled' disabled />
        <label htmlFor='switch-disabled'>Disabled switch</label>
      </FormField>
      <FormField>
        <Switch id='switch-checked-disabled' disabled defaultChecked />
        <label htmlFor='switch-checked-disabled'>Disabled checked switch</label>
      </FormField>
    </Box>
  );
}

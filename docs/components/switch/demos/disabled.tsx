import { Box, FormField, Switch, SwitchInput } from 'react-bootstrap-pro';

export function SwitchDisabledDemo() {
  return (
    <Box display='flex' flexDirection='column' gap={2}>
      <FormField>
        <Switch>
          <SwitchInput id='switch-disabled' disabled />
        </Switch>
        <label htmlFor='switch-disabled'>Disabled switch</label>
      </FormField>
      <FormField>
        <Switch>
          <SwitchInput id='switch-checked-disabled' disabled defaultChecked />
        </Switch>
        <label htmlFor='switch-checked-disabled'>Disabled checked switch</label>
      </FormField>
    </Box>
  );
}

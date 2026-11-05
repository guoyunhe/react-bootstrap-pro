import { Box, FormField, Switch, SwitchInput } from 'react-bootstrap-pro';

export function SwitchSizesDemo() {
  return (
    <Box d='flex' flexDirection='column' gap={2}>
      <FormField>
        <Switch size='sm'>
          <SwitchInput id='switch-size-sm' />
        </Switch>
        <label htmlFor='switch-size-sm'>Small switch</label>
      </FormField>
      <FormField>
        <Switch>
          <SwitchInput id='switch-size-default' />
        </Switch>
        <label htmlFor='switch-size-default'>Default switch</label>
      </FormField>
      <FormField>
        <Switch size='lg'>
          <SwitchInput id='switch-size-lg' />
        </Switch>
        <label htmlFor='switch-size-lg'>Large switch</label>
      </FormField>
    </Box>
  );
}

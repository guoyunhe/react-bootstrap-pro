import { Box, FormField, Switch } from 'react-bootstrap-pro';

export function SwitchSizesDemo() {
  return (
    <Box d='flex' flexDirection='column' gap={2}>
      <FormField>
        <Switch id='switch-size-sm' size='sm' />
        <label htmlFor='switch-size-sm'>Small switch</label>
      </FormField>
      <FormField>
        <Switch id='switch-size-default' />
        <label htmlFor='switch-size-default'>Default switch</label>
      </FormField>
      <FormField>
        <Switch id='switch-size-lg' size='lg' />
        <label htmlFor='switch-size-lg'>Large switch</label>
      </FormField>
    </Box>
  );
}

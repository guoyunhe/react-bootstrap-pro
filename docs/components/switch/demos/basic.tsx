import { FormField, Switch, SwitchInput } from 'react-bootstrap-pro';

export function SwitchBasicDemo() {
  return (
    <FormField>
      <Switch>
        <SwitchInput id='switch-basic' defaultChecked />
      </Switch>
      <label htmlFor='switch-basic'>Default switch</label>
    </FormField>
  );
}

import { FormField, Switch } from 'react-bootstrap-pro';

export function SwitchBasicDemo() {
  return (
    <FormField>
      <Switch id='switch-basic' defaultChecked />
      <label htmlFor='switch-basic'>Default switch</label>
    </FormField>
  );
}

import { FormField, Switch } from 'react-bootstrap-pro';

export function SwitchWidthDemo() {
  return (
    <FormField>
      <Switch id='switch-custom-width' width='2.75rem' indicatorWidth='1.5rem' />
      <label htmlFor='switch-custom-width'>Custom width switch</label>
    </FormField>
  );
}

import type { CSSProperties } from 'react';
import { FormField, Switch, SwitchInput } from 'react-bootstrap-pro';

const customWidth = {
  '--bs-switch-width': '2.75rem',
  '--bs-switch-indicator-width': '1.5rem',
} as CSSProperties;

export function SwitchWidthDemo() {
  return (
    <FormField>
      <Switch style={customWidth}>
        <SwitchInput id='switch-custom-width' />
      </Switch>
      <label htmlFor='switch-custom-width'>Custom width switch</label>
    </FormField>
  );
}

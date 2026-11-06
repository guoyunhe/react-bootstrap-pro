import { Checkbox, FormField } from 'react-bootstrap-pro';

import './disabled.css';

export function CheckboxDisabledIndeterminateDemo() {
  return (
    <FormField>
      <Checkbox id='checkbox-disabled-indeterminate' indeterminate disabled />
      <label htmlFor='checkbox-disabled-indeterminate'>Disabled indeterminate checkbox</label>
    </FormField>
  );
}

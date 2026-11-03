import { useEffect, useRef } from 'react';
import { Checkbox, FormField, FormText } from 'react-bootstrap-pro';

export function CheckboxIndeterminateDemo() {
  const checkboxRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (checkboxRef.current) {
      checkboxRef.current.indeterminate = true;
    }
  }, []);

  return (
    <FormField>
      <Checkbox ref={checkboxRef} id='checkbox-indeterminate' aria-describedby='checkbox-help' />
      <label htmlFor='checkbox-indeterminate'>Indeterminate checkbox</label>
      <FormText component='small' id='checkbox-help'>
        Set the indeterminate property through a ref.
      </FormText>
    </FormField>
  );
}

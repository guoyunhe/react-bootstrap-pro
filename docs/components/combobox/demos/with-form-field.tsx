import { Combobox, FormField, FormLabel, FormText } from 'react-bootstrap-pro';

export function ComboboxWithFormFieldDemo() {
  return (
    <FormField>
      <FormLabel htmlFor='combobox-form-field-country'>Country</FormLabel>
      <Combobox
        id='combobox-form-field-country'
        placeholder='Pick a country…'
        options={[
          { value: 'us', label: 'United States' },
          { value: 'uk', label: 'United Kingdom' },
          { value: 'ca', label: 'Canada' },
        ]}
      />
      <FormText>Choose one option from the menu.</FormText>
    </FormField>
  );
}

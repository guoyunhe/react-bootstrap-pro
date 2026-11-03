import { Box, Combobox, FormField, FormLabel, FormText } from 'react-bootstrap-pro';

const countries = [
  { value: 'us', label: 'United States' },
  { value: 'uk', label: 'United Kingdom' },
  { value: 'ca', label: 'Canada' },
];

export function ComboboxBasicDemo() {
  return (
    <Box display='flex' flexDirection='column' gap={4}>
      <FormField>
        <FormLabel htmlFor='combobox-country'>Combobox</FormLabel>
        <Combobox
          id='combobox-country'
          name='country'
          placeholder='Pick a country…'
          options={countries}
        />
        <FormText>Choose one option from the menu.</FormText>
      </FormField>
      <FormField>
        <FormLabel htmlFor='combobox-role'>Pre-selected value</FormLabel>
        <Combobox
          id='combobox-role'
          name='role'
          placeholder='Choose a role…'
          defaultValue='editor'
          options={[
            { value: 'admin', label: 'Admin' },
            { value: 'editor', label: 'Editor' },
            { value: 'viewer', label: 'Viewer' },
          ]}
        />
      </FormField>
    </Box>
  );
}

import { Combobox } from 'react-bootstrap-pro';

export function ComboboxPlaceholdersDemo() {
  return (
    <Combobox
      aria-label='Country'
      placeholder='Pick a country…'
      options={[
        { value: 'us', label: 'United States' },
        { value: 'uk', label: 'United Kingdom' },
        { value: 'ca', label: 'Canada' },
      ]}
    />
  );
}

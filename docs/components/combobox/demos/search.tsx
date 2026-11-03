import { Combobox } from 'react-bootstrap-pro';

export function ComboboxSearchDemo() {
  return (
    <Combobox
      search
      searchPlaceholder='Search countries…'
      placeholder='Select a country…'
      aria-label='Country'
      options={[
        { value: 'us', label: 'United States' },
        { value: 'uk', label: 'United Kingdom' },
        { value: 'ca', label: 'Canada' },
        { value: 'au', label: 'Australia' },
        { value: 'de', label: 'Germany' },
        { value: 'fr', label: 'France' },
        { value: 'br', label: 'Brazil' },
        { value: 'in', label: 'India' },
        { value: 'mx', label: 'Mexico' },
      ]}
    />
  );
}

import { Combobox } from 'react-bootstrap-pro';

export function ComboboxDisabledOptionDemo() {
  return (
    <Combobox
      aria-label='Availability'
      placeholder='Select an option…'
      options={[
        { value: '1', label: 'Available' },
        { value: '2', label: 'Unavailable', disabled: true },
        { value: '3', label: 'Available' },
      ]}
    />
  );
}

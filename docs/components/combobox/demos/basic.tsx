import { Combobox } from 'react-bootstrap-pro';

export function ComboboxBasicDemo() {
  return (
    <Combobox
      aria-label='Select an item'
      placeholder='Select an item…'
      options={[
        { value: '1', label: 'Option one' },
        { value: '2', label: 'Option two' },
        { value: '3', label: 'Option three' },
      ]}
    />
  );
}

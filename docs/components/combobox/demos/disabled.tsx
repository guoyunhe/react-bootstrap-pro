import { Combobox } from 'react-bootstrap-pro';

export function ComboboxDisabledDemo() {
  return (
    <Combobox
      disabled
      aria-label='Unavailable selector'
      placeholder='Cannot interact…'
      options={[
        { value: '1', label: 'Option one' },
        { value: '2', label: 'Option two' },
      ]}
    />
  );
}

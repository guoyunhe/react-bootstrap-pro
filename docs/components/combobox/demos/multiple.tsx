import { Combobox } from 'react-bootstrap-pro';

export function ComboboxMultipleDemo() {
  return (
    <Combobox
      multiple
      check
      name='skills'
      placeholder='Select skills…'
      aria-label='Skills'
      options={[
        { value: 'html', label: 'HTML' },
        { value: 'css', label: 'CSS' },
        { value: 'js', label: 'JavaScript' },
        { value: 'python', label: 'Python' },
        { value: 'ruby', label: 'Ruby' },
      ]}
    />
  );
}

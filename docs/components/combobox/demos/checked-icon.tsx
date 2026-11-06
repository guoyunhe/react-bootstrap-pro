import { Combobox } from 'react-bootstrap-pro';

export function ComboboxCheckedIconDemo() {
  return (
    <Combobox
      check
      defaultValue='active'
      aria-label='Status'
      placeholder='Choose a status…'
      options={[
        { value: 'active', label: 'Active', description: 'Visible to users' },
        { value: 'draft', label: 'Draft', description: 'Not yet published' },
        { value: 'archived', label: 'Archived' },
      ]}
    />
  );
}

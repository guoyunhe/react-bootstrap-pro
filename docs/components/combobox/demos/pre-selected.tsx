import { Combobox } from 'react-bootstrap-pro';

export function ComboboxPreSelectedDemo() {
  return (
    <Combobox
      aria-label='Role'
      placeholder='Choose a role…'
      defaultValue='editor'
      options={[
        { value: 'admin', label: 'Admin' },
        { value: 'editor', label: 'Editor' },
        { value: 'viewer', label: 'Viewer' },
      ]}
    />
  );
}

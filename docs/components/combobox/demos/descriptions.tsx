import { Combobox } from 'react-bootstrap-pro';

export function ComboboxDescriptionsDemo() {
  return (
    <Combobox
      aria-label='Role'
      placeholder='Select a role…'
      options={[
        { value: 'admin', label: 'Admin', description: 'Full access to all resources' },
        { value: 'editor', label: 'Editor', description: 'Can edit and publish content' },
        { value: 'viewer', label: 'Viewer', description: 'Read-only access' },
      ]}
    />
  );
}

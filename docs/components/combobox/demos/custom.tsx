import { BiBraces, BiFileEarmarkCode, BiPalette } from 'react-bootstrap-icons-pro';
import { Box, Combobox } from 'react-bootstrap-pro';

export function ComboboxCustomDemo() {
  return (
    <Box display='flex' flexDirection='column' gap={4}>
      <Combobox
        check
        placeholder='Choose a language…'
        aria-label='Language'
        options={[
          { value: 'html', label: 'HTML', icon: <BiFileEarmarkCode /> },
          { value: 'css', label: 'CSS', icon: <BiPalette /> },
          { value: 'js', label: 'JavaScript', icon: <BiBraces /> },
        ]}
      />
      <Combobox
        check
        placeholder='Select a role…'
        aria-label='Role'
        options={[
          { value: 'admin', label: 'Admin', description: 'Full access to all resources' },
          { value: 'editor', label: 'Editor', description: 'Can edit and publish content' },
          { value: 'viewer', label: 'Viewer', description: 'Read-only access' },
        ]}
      />
    </Box>
  );
}

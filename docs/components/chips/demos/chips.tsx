import { useState } from 'react';
import { BiPerson } from 'react-bootstrap-icons-pro';
import { Box, Chip } from 'react-bootstrap-pro';

const avatarSource = `data:image/svg+xml,${encodeURIComponent(
  '<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32"><rect width="32" height="32" fill="#0d6efd"/><circle cx="16" cy="12" r="6" fill="#fff"/><rect x="6" y="20" width="20" height="12" rx="6" fill="#fff"/></svg>',
)}`;

export function ChipsDemo() {
  const [visible, setVisible] = useState(true);

  return (
    <Box d='flex' flexWrap='wrap' alignItems='center' gap={2}>
      <Chip>Basic chip</Chip>
      <Chip image={{ src: avatarSource, alt: '' }}>With avatar</Chip>
      <Chip icon={<BiPerson />}>With icon</Chip>
      {visible ? (
        <Chip onDismiss={() => setVisible(false)}>Dismissible</Chip>
      ) : (
        <Box component='span' className='form-text'>
          Chip removed
        </Box>
      )}
    </Box>
  );
}

import { useState } from 'react';
import { Alert, Box, Button, CloseButton } from 'react-bootstrap-pro';

export function AlertLiveDemo() {
  const [visible, setVisible] = useState(false);

  return (
    <Box d='grid' gap={2}>
      <Button variant='solid' theme='primary' onClick={() => setVisible(true)}>
        Show live alert
      </Button>
      {visible && (
        <Alert d='flex' alignItems='center' gap={2}>
          <span>Nice, you triggered this alert message!</span>
          <CloseButton label='Dismiss alert' ms='auto' onClick={() => setVisible(false)} />
        </Alert>
      )}
    </Box>
  );
}

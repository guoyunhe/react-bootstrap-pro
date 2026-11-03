import { useState } from 'react';
import { Alert, Button, CloseButton } from 'react-bootstrap-pro';

export function AlertLiveDemo() {
  const [visible, setVisible] = useState(false);

  return (
    <div className='d-grid gap-2'>
      <Button variant='solid' theme='primary' onClick={() => setVisible(true)}>
        Show live alert
      </Button>
      {visible && (
        <Alert className='d-flex align-items-center gap-2'>
          <span>Nice, you triggered this alert message!</span>
          <CloseButton
            label='Dismiss alert'
            className='ms-auto'
            onClick={() => setVisible(false)}
          />
        </Alert>
      )}
    </div>
  );
}

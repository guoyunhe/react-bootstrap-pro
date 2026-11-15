import { useState } from 'react';
import { Box, Button, Spotlight, type SpotlightAction } from 'react-bootstrap-pro';

export function SpotlightFooterDemo() {
  const [show, setShow] = useState(false);

  const actions: SpotlightAction[] = ['Home', 'Projects', 'Team', 'Billing', 'Settings'].map(
    (label) => ({ label }),
  );

  return (
    <>
      <Button
        variant='outline'
        theme='secondary'
        aria-haspopup='dialog'
        aria-expanded={show}
        onClick={() => setShow(true)}
      >
        Search with footer
      </Button>
      <Spotlight
        show={show}
        onShowChange={setShow}
        actions={actions}
        footer={
          <>
            <Box component='span' me='auto' fontSize='sm' fg='3'>
              <kbd>↑</kbd> <kbd>↓</kbd> to navigate
            </Box>
            <Box component='span' fontSize='sm' fg='3'>
              <kbd>Enter</kbd> to select
            </Box>
          </>
        }
      />
    </>
  );
}

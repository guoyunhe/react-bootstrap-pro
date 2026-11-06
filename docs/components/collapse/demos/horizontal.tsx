import { useState } from 'react';
import { Box, Button, Collapse } from 'react-bootstrap-pro';

export function CollapseHorizontalDemo() {
  const [show, setShow] = useState(false);

  return (
    <>
      <Button
        mb={3}
        variant='solid'
        theme='primary'
        aria-expanded={show}
        aria-controls='collapseWidthExample'
        onClick={() => setShow((previous) => !previous)}
      >
        Toggle width collapse
      </Button>
      <Collapse horizontal id='collapseWidthExample' show={show}>
        <Box className='card card-body' style={{ width: 300 }}>
          This panel collapses horizontally. Its immediate child has a fixed width.
        </Box>
      </Collapse>
    </>
  );
}

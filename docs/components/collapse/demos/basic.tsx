import { useState } from 'react';
import { Box, Button, Collapse } from 'react-bootstrap-pro';

export function CollapseBasicDemo() {
  const [show, setShow] = useState(false);

  function toggle() {
    setShow((previous) => !previous);
  }

  return (
    <>
      <Box component='p' d='inline-flex' gap={1}>
        <Button
          component='a'
          href='#collapseExample'
          role='button'
          variant='solid'
          theme='primary'
          aria-expanded={show}
          aria-controls='collapseExample'
          onClick={(event) => {
            event.preventDefault();
            toggle();
          }}
        >
          Link with href
        </Button>
        <Button
          variant='solid'
          theme='primary'
          aria-expanded={show}
          aria-controls='collapseExample'
          onClick={toggle}
        >
          Button trigger
        </Button>
      </Box>
      <Collapse id='collapseExample' show={show}>
        <Box className='card card-body'>
          This panel is hidden by default and shown when either trigger is activated.
        </Box>
      </Collapse>
    </>
  );
}

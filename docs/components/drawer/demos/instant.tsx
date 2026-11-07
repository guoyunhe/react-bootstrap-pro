import { useState } from 'react';
import { CloseButton, Drawer, DrawerBody, DrawerHeader, DrawerTitle } from 'react-bootstrap-pro';

export function DrawerInstantDemo() {
  const [show, setShow] = useState(false);
  return (
    <>
      <button
        className='btn-solid theme-primary'
        type='button'
        aria-controls='drawer-instant'
        aria-expanded={show}
        onClick={() => setShow(true)}
      >
        Toggle instant drawer
      </button>
      <Drawer
        show={show}
        onShowChange={setShow}
        id='drawer-instant'
        placement='start'
        instant
        aria-labelledby='drawer-instant-title'
      >
        <DrawerHeader>
          <DrawerTitle id='drawer-instant-title'>Instant drawer</DrawerTitle>
          <CloseButton onClick={() => setShow(false)} aria-label='Close' />
        </DrawerHeader>
        <DrawerBody>
          <p>This drawer appears and closes without a transition.</p>
        </DrawerBody>
      </Drawer>
    </>
  );
}

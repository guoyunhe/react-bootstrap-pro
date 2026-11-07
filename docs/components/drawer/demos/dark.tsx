import { useState } from 'react';
import { CloseButton, Drawer, DrawerBody, DrawerHeader, DrawerTitle } from 'react-bootstrap-pro';

export function DrawerDarkDemo() {
  const [show, setShow] = useState(false);
  return (
    <>
      <button
        className='btn-solid theme-primary'
        type='button'
        aria-controls='drawer-dark'
        aria-expanded={show}
        onClick={() => setShow(true)}
      >
        Open dark drawer
      </button>
      <Drawer
        show={show}
        onShowChange={setShow}
        id='drawer-dark'
        placement='start'
        data-bs-theme='dark'
        aria-labelledby='drawer-dark-title'
      >
        <DrawerHeader>
          <DrawerTitle id='drawer-dark-title'>Dark drawer</DrawerTitle>
          <CloseButton onClick={() => setShow(false)} aria-label='Close' />
        </DrawerHeader>
        <DrawerBody>
          <p>Place drawer content here.</p>
        </DrawerBody>
      </Drawer>
    </>
  );
}

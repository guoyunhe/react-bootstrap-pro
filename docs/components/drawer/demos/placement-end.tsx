import { useState } from 'react';
import { CloseButton, Drawer, DrawerBody, DrawerHeader, DrawerTitle } from 'react-bootstrap-pro';

export function DrawerPlacementEndDemo() {
  const [show, setShow] = useState(false);
  return (
    <>
      <button
        className='btn-solid theme-primary'
        type='button'
        aria-expanded={show}
        aria-controls='drawer-placement-end'
        onClick={() => setShow(true)}
      >
        Toggle right drawer
      </button>
      <Drawer
        show={show}
        onShowChange={setShow}
        id='drawer-placement-end'
        placement='end'
        aria-labelledby='drawer-placement-end-title'
      >
        <DrawerHeader>
          <DrawerTitle id='drawer-placement-end-title'>Drawer right</DrawerTitle>
          <CloseButton onClick={() => setShow(false)} aria-label='Close' />
        </DrawerHeader>
        <DrawerBody>Content for a right drawer.</DrawerBody>
      </Drawer>
    </>
  );
}

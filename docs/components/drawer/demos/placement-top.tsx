import { useState } from 'react';
import { CloseButton, Drawer, DrawerBody, DrawerHeader, DrawerTitle } from 'react-bootstrap-pro';

export function DrawerPlacementTopDemo() {
  const [show, setShow] = useState(false);
  return (
    <>
      <button
        className='btn-solid theme-primary'
        type='button'
        aria-expanded={show}
        aria-controls='drawer-placement-top'
        onClick={() => setShow(true)}
      >
        Toggle top drawer
      </button>
      <Drawer
        show={show}
        onShowChange={setShow}
        id='drawer-placement-top'
        placement='top'
        aria-labelledby='drawer-placement-top-title'
      >
        <DrawerHeader>
          <DrawerTitle id='drawer-placement-top-title'>Drawer top</DrawerTitle>
          <CloseButton onClick={() => setShow(false)} aria-label='Close' />
        </DrawerHeader>
        <DrawerBody>Content for a top drawer.</DrawerBody>
      </Drawer>
    </>
  );
}

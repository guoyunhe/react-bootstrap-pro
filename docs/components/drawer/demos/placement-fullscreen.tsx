import { useState } from 'react';
import { CloseButton, Drawer, DrawerBody, DrawerHeader, DrawerTitle } from 'react-bootstrap-pro';

export function DrawerPlacementFullscreenDemo() {
  const [show, setShow] = useState(false);
  return (
    <>
      <button
        className='btn-solid theme-primary'
        type='button'
        aria-expanded={show}
        aria-controls='drawer-placement-fullscreen'
        onClick={() => setShow(true)}
      >
        Toggle fullscreen drawer
      </button>
      <Drawer
        show={show}
        onShowChange={setShow}
        id='drawer-placement-fullscreen'
        fullscreen
        aria-labelledby='drawer-placement-fullscreen-title'
      >
        <DrawerHeader>
          <DrawerTitle id='drawer-placement-fullscreen-title'>Fullscreen drawer</DrawerTitle>
          <CloseButton onClick={() => setShow(false)} aria-label='Close' />
        </DrawerHeader>
        <DrawerBody>
          <p>This full-page drawer is useful for menus or modal-like experiences.</p>
        </DrawerBody>
      </Drawer>
    </>
  );
}

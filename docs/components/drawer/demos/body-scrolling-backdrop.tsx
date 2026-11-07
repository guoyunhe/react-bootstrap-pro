import { useState } from 'react';
import { CloseButton, Drawer, DrawerBody, DrawerHeader, DrawerTitle } from 'react-bootstrap-pro';

export function DrawerBodyScrollingBackdropDemo() {
  const [show, setShow] = useState(false);
  return (
    <>
      <button
        className='btn-solid theme-primary'
        type='button'
        aria-controls='drawer-body-scrolling-backdrop'
        aria-expanded={show}
        onClick={() => setShow(true)}
      >
        Enable body scrolling and backdrop
      </button>
      <Drawer
        show={show}
        onShowChange={setShow}
        id='drawer-body-scrolling-backdrop'
        placement='start'
        scroll
        aria-labelledby='drawer-body-scrolling-backdrop-title'
      >
        <DrawerHeader>
          <DrawerTitle id='drawer-body-scrolling-backdrop-title'>
            Backdrop with body scrolling
          </DrawerTitle>
          <CloseButton onClick={() => setShow(false)} aria-label='Close' />
        </DrawerHeader>
        <DrawerBody>
          <p>
            The page can scroll while the backdrop remains visible. The drawer stays modal and
            continues to trap focus.
          </p>
        </DrawerBody>
      </Drawer>
    </>
  );
}

import { useState } from 'react';
import { CloseButton, Drawer, DrawerBody, DrawerHeader, DrawerTitle } from 'react-bootstrap-pro';

export function DrawerStaticBackdropDemo() {
  const [show, setShow] = useState(false);
  return (
    <>
      <button
        className='btn-solid theme-primary'
        type='button'
        aria-controls='drawer-static-backdrop'
        aria-expanded={show}
        onClick={() => setShow(true)}
      >
        Toggle static drawer
      </button>
      <Drawer
        show={show}
        onShowChange={setShow}
        id='drawer-static-backdrop'
        placement='start'
        backdrop='static'
        aria-labelledby='drawer-static-backdrop-title'
      >
        <DrawerHeader>
          <DrawerTitle id='drawer-static-backdrop-title'>Static backdrop</DrawerTitle>
          <CloseButton onClick={() => setShow(false)} aria-label='Close' />
        </DrawerHeader>
        <DrawerBody>
          <p>This drawer does not close when you click outside it.</p>
        </DrawerBody>
      </Drawer>
    </>
  );
}

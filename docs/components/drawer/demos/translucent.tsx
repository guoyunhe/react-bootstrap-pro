import { useState } from 'react';
import { CloseButton, Drawer, DrawerBody, DrawerHeader, DrawerTitle } from 'react-bootstrap-pro';

export function DrawerTranslucentDemo() {
  const [show, setShow] = useState(false);
  return (
    <>
      <button
        className='btn-solid theme-primary'
        type='button'
        aria-controls='drawer-translucent'
        aria-expanded={show}
        onClick={() => setShow(true)}
      >
        Toggle translucent drawer
      </button>
      <Drawer
        show={show}
        onShowChange={setShow}
        id='drawer-translucent'
        placement='start'
        translucent
        aria-labelledby='drawer-translucent-title'
      >
        <DrawerHeader>
          <DrawerTitle id='drawer-translucent-title'>Translucent drawer</DrawerTitle>
          <CloseButton onClick={() => setShow(false)} aria-label='Close' />
        </DrawerHeader>
        <DrawerBody>
          <p>The background blurs and saturates content behind the drawer.</p>
        </DrawerBody>
      </Drawer>
    </>
  );
}

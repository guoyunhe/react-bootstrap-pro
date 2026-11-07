import { useState } from 'react';
import { CloseButton, Drawer, DrawerBody, DrawerHeader, DrawerTitle } from 'react-bootstrap-pro';

export function DrawerPlacementBottomDemo() {
  const [show, setShow] = useState(false);
  return (
    <>
      <button
        className='btn-solid theme-primary'
        type='button'
        aria-expanded={show}
        aria-controls='drawer-placement-bottom'
        onClick={() => setShow(true)}
      >
        Toggle bottom drawer
      </button>
      <Drawer
        show={show}
        onShowChange={setShow}
        id='drawer-placement-bottom'
        placement='bottom'
        aria-labelledby='drawer-placement-bottom-title'
      >
        <DrawerHeader>
          <DrawerTitle id='drawer-placement-bottom-title'>Drawer bottom</DrawerTitle>
          <CloseButton onClick={() => setShow(false)} aria-label='Close' />
        </DrawerHeader>
        <DrawerBody>Content for a bottom drawer.</DrawerBody>
      </Drawer>
    </>
  );
}

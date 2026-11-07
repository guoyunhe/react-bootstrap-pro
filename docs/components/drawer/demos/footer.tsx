import { useState } from 'react';
import {
  CloseButton,
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
} from 'react-bootstrap-pro';

export function DrawerFooterDemo() {
  const [show, setShow] = useState(false);
  return (
    <>
      <button
        type='button'
        className='btn-solid theme-primary'
        aria-expanded={show}
        aria-controls='drawer-footer'
        onClick={() => setShow(true)}
      >
        Open drawer with footer
      </button>
      <Drawer
        show={show}
        onShowChange={setShow}
        id='drawer-footer'
        placement='start'
        aria-labelledby='drawer-footer-title'
      >
        <DrawerHeader>
          <DrawerTitle id='drawer-footer-title'>Drawer with footer</DrawerTitle>
          <CloseButton onClick={() => setShow(false)} aria-label='Close' />
        </DrawerHeader>
        <DrawerBody>
          <p>Content for the drawer goes here. The footer stays at the bottom of the panel.</p>
        </DrawerBody>
        <DrawerFooter>
          <button
            type='button'
            className='btn-solid theme-secondary'
            onClick={() => setShow(false)}
          >
            Close
          </button>
          <button type='button' className='btn-solid theme-primary'>
            Save changes
          </button>
        </DrawerFooter>
      </Drawer>
    </>
  );
}

import { useState } from 'react';
import { CloseButton, Drawer, DrawerBody, DrawerHeader, DrawerTitle } from 'react-bootstrap-pro';

export function DrawerResponsiveDemo() {
  const [show, setShow] = useState(false);
  return (
    <nav className='navbar'>
      <button
        className='btn-solid theme-primary lg:d-none'
        type='button'
        aria-controls='drawer-responsive'
        aria-expanded={show}
        onClick={() => setShow(true)}
      >
        Toggle drawer
      </button>
      <div className='alert theme-info d-none lg:d-block mb-3'>
        Resize the browser to show the drawer toggle.
      </div>
      <Drawer
        show={show}
        onShowChange={setShow}
        id='drawer-responsive'
        className='lg:drawer'
        placement='end'
        aria-labelledby='drawer-responsive-title'
      >
        <DrawerHeader>
          <DrawerTitle id='drawer-responsive-title'>Responsive drawer</DrawerTitle>
          <CloseButton onClick={() => setShow(false)} aria-label='Close' />
        </DrawerHeader>
        <DrawerBody>
          <p>This drawer collapses into regular inline content at the lg breakpoint.</p>
        </DrawerBody>
      </Drawer>
    </nav>
  );
}

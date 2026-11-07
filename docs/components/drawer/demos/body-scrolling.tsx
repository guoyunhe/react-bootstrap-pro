import { useState } from 'react';
import { CloseButton, Drawer, DrawerBody, DrawerHeader, DrawerTitle } from 'react-bootstrap-pro';

export function DrawerBodyScrollingDemo() {
  const [show, setShow] = useState(false);
  return (
    <>
      <button
        className='btn-solid theme-primary'
        type='button'
        aria-controls='drawer-body-scrolling'
        aria-expanded={show}
        onClick={() => setShow(true)}
      >
        Enable body scrolling
      </button>
      <Drawer
        show={show}
        onShowChange={setShow}
        id='drawer-body-scrolling'
        placement='start'
        scroll
        backdrop={false}
        aria-labelledby='drawer-body-scrolling-title'
      >
        <DrawerHeader>
          <DrawerTitle id='drawer-body-scrolling-title'>Drawer with body scrolling</DrawerTitle>
          <CloseButton onClick={() => setShow(false)} aria-label='Close' />
        </DrawerHeader>
        <DrawerBody>
          <p>Try scrolling the page behind this non-modal drawer.</p>
        </DrawerBody>
      </Drawer>
      <div className='mt-3'>
        {Array.from({ length: 10 }, (_, index) => (
          <p key={index}>Page content {index + 1} remains interactive and scrollable.</p>
        ))}
      </div>
    </>
  );
}

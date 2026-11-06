import { CloseButton, Drawer, DrawerBody, DrawerHeader, DrawerTitle } from 'react-bootstrap-pro';

export function DrawerBodyScrollingDemo() {
  return (
    <>
      <button
        className='btn-solid theme-primary'
        type='button'
        data-bs-toggle='drawer'
        data-bs-target='#drawer-body-scrolling'
        aria-controls='drawer-body-scrolling'
      >
        Enable body scrolling
      </button>
      <Drawer
        id='drawer-body-scrolling'
        placement='start'
        data-bs-scroll='true'
        data-bs-backdrop='false'
        aria-labelledby='drawer-body-scrolling-title'
      >
        <DrawerHeader>
          <DrawerTitle id='drawer-body-scrolling-title'>Drawer with body scrolling</DrawerTitle>
          <CloseButton data-bs-dismiss='drawer' aria-label='Close' />
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

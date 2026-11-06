import { CloseButton, Drawer, DrawerBody, DrawerHeader, DrawerTitle } from 'react-bootstrap-pro';

export function DrawerDarkDemo() {
  return (
    <>
      <button
        className='btn-solid theme-primary'
        type='button'
        data-bs-toggle='drawer'
        data-bs-target='#drawer-dark'
        aria-controls='drawer-dark'
      >
        Open dark drawer
      </button>
      <Drawer
        id='drawer-dark'
        placement='start'
        data-bs-theme='dark'
        aria-labelledby='drawer-dark-title'
      >
        <DrawerHeader>
          <DrawerTitle id='drawer-dark-title'>Dark drawer</DrawerTitle>
          <CloseButton data-bs-dismiss='drawer' aria-label='Close' />
        </DrawerHeader>
        <DrawerBody>
          <p>Place drawer content here.</p>
        </DrawerBody>
      </Drawer>
    </>
  );
}

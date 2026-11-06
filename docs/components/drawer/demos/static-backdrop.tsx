import { CloseButton, Drawer, DrawerBody, DrawerHeader, DrawerTitle } from 'react-bootstrap-pro';

export function DrawerStaticBackdropDemo() {
  return (
    <>
      <button
        className='btn-solid theme-primary'
        type='button'
        data-bs-toggle='drawer'
        data-bs-target='#drawer-static-backdrop'
        aria-controls='drawer-static-backdrop'
      >
        Toggle static drawer
      </button>
      <Drawer
        id='drawer-static-backdrop'
        placement='start'
        data-bs-backdrop='static'
        aria-labelledby='drawer-static-backdrop-title'
      >
        <DrawerHeader>
          <DrawerTitle id='drawer-static-backdrop-title'>Static backdrop</DrawerTitle>
          <CloseButton data-bs-dismiss='drawer' aria-label='Close' />
        </DrawerHeader>
        <DrawerBody>
          <p>This drawer does not close when you click outside it.</p>
        </DrawerBody>
      </Drawer>
    </>
  );
}

import { CloseButton, Drawer, DrawerBody, DrawerHeader, DrawerTitle } from 'react-bootstrap-pro';

export function DrawerTranslucentDemo() {
  return (
    <>
      <button
        className='btn-solid theme-primary'
        type='button'
        data-bs-toggle='drawer'
        data-bs-target='#drawer-translucent'
        aria-controls='drawer-translucent'
      >
        Toggle translucent drawer
      </button>
      <Drawer
        id='drawer-translucent'
        placement='start'
        translucent
        aria-labelledby='drawer-translucent-title'
      >
        <DrawerHeader>
          <DrawerTitle id='drawer-translucent-title'>Translucent drawer</DrawerTitle>
          <CloseButton data-bs-dismiss='drawer' aria-label='Close' />
        </DrawerHeader>
        <DrawerBody>
          <p>The background blurs and saturates content behind the drawer.</p>
        </DrawerBody>
      </Drawer>
    </>
  );
}

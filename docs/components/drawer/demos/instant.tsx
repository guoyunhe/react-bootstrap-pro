import { CloseButton, Drawer, DrawerBody, DrawerHeader, DrawerTitle } from 'react-bootstrap-pro';

export function DrawerInstantDemo() {
  return (
    <>
      <button
        className='btn-solid theme-primary'
        type='button'
        data-bs-toggle='drawer'
        data-bs-target='#drawer-instant'
        aria-controls='drawer-instant'
      >
        Toggle instant drawer
      </button>
      <Drawer id='drawer-instant' placement='start' instant aria-labelledby='drawer-instant-title'>
        <DrawerHeader>
          <DrawerTitle id='drawer-instant-title'>Instant drawer</DrawerTitle>
          <CloseButton data-bs-dismiss='drawer' aria-label='Close' />
        </DrawerHeader>
        <DrawerBody>
          <p>This drawer appears and closes without a transition.</p>
        </DrawerBody>
      </Drawer>
    </>
  );
}

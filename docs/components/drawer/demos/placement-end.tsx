import { CloseButton, Drawer, DrawerBody, DrawerHeader, DrawerTitle } from 'react-bootstrap-pro';

export function DrawerPlacementEndDemo() {
  return (
    <>
      <button
        className='btn-solid theme-primary'
        type='button'
        data-bs-toggle='drawer'
        data-bs-target='#drawer-placement-end'
      >
        Toggle right drawer
      </button>
      <Drawer
        id='drawer-placement-end'
        placement='end'
        aria-labelledby='drawer-placement-end-title'
      >
        <DrawerHeader>
          <DrawerTitle id='drawer-placement-end-title'>Drawer right</DrawerTitle>
          <CloseButton data-bs-dismiss='drawer' aria-label='Close' />
        </DrawerHeader>
        <DrawerBody>Content for a right drawer.</DrawerBody>
      </Drawer>
    </>
  );
}

import { CloseButton, Drawer, DrawerBody, DrawerHeader, DrawerTitle } from 'react-bootstrap-pro';

export function DrawerPlacementTopDemo() {
  return (
    <>
      <button
        className='btn-solid theme-primary'
        type='button'
        data-bs-toggle='drawer'
        data-bs-target='#drawer-placement-top'
      >
        Toggle top drawer
      </button>
      <Drawer
        id='drawer-placement-top'
        placement='top'
        aria-labelledby='drawer-placement-top-title'
      >
        <DrawerHeader>
          <DrawerTitle id='drawer-placement-top-title'>Drawer top</DrawerTitle>
          <CloseButton data-bs-dismiss='drawer' aria-label='Close' />
        </DrawerHeader>
        <DrawerBody>Content for a top drawer.</DrawerBody>
      </Drawer>
    </>
  );
}

import { CloseButton, Drawer, DrawerBody, DrawerHeader, DrawerTitle } from 'react-bootstrap-pro';

export function DrawerPlacementBottomDemo() {
  return (
    <>
      <button
        className='btn-solid theme-primary'
        type='button'
        data-bs-toggle='drawer'
        data-bs-target='#drawer-placement-bottom'
      >
        Toggle bottom drawer
      </button>
      <Drawer
        id='drawer-placement-bottom'
        placement='bottom'
        aria-labelledby='drawer-placement-bottom-title'
      >
        <DrawerHeader>
          <DrawerTitle id='drawer-placement-bottom-title'>Drawer bottom</DrawerTitle>
          <CloseButton data-bs-dismiss='drawer' aria-label='Close' />
        </DrawerHeader>
        <DrawerBody>Content for a bottom drawer.</DrawerBody>
      </Drawer>
    </>
  );
}

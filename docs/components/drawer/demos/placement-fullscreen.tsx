import { CloseButton, Drawer, DrawerBody, DrawerHeader, DrawerTitle } from 'react-bootstrap-pro';

export function DrawerPlacementFullscreenDemo() {
  return (
    <>
      <button
        className='btn-solid theme-primary'
        type='button'
        data-bs-toggle='drawer'
        data-bs-target='#drawer-placement-fullscreen'
      >
        Toggle fullscreen drawer
      </button>
      <Drawer
        id='drawer-placement-fullscreen'
        fullscreen
        aria-labelledby='drawer-placement-fullscreen-title'
      >
        <DrawerHeader>
          <DrawerTitle id='drawer-placement-fullscreen-title'>Fullscreen drawer</DrawerTitle>
          <CloseButton data-bs-dismiss='drawer' aria-label='Close' />
        </DrawerHeader>
        <DrawerBody>
          <p>This full-page drawer is useful for menus or modal-like experiences.</p>
        </DrawerBody>
      </Drawer>
    </>
  );
}

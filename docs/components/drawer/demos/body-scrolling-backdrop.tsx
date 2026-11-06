import { CloseButton, Drawer, DrawerBody, DrawerHeader, DrawerTitle } from 'react-bootstrap-pro';

export function DrawerBodyScrollingBackdropDemo() {
  return (
    <>
      <button
        className='btn-solid theme-primary'
        type='button'
        data-bs-toggle='drawer'
        data-bs-target='#drawer-body-scrolling-backdrop'
        aria-controls='drawer-body-scrolling-backdrop'
      >
        Enable body scrolling and backdrop
      </button>
      <Drawer
        id='drawer-body-scrolling-backdrop'
        placement='start'
        data-bs-scroll='true'
        aria-labelledby='drawer-body-scrolling-backdrop-title'
      >
        <DrawerHeader>
          <DrawerTitle id='drawer-body-scrolling-backdrop-title'>
            Backdrop with body scrolling
          </DrawerTitle>
          <CloseButton data-bs-dismiss='drawer' aria-label='Close' />
        </DrawerHeader>
        <DrawerBody>
          <p>
            The page can scroll while the backdrop remains visible. The drawer stays modal and
            continues to trap focus.
          </p>
        </DrawerBody>
      </Drawer>
    </>
  );
}

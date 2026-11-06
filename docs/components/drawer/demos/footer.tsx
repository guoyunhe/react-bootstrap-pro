import {
  CloseButton,
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
} from 'react-bootstrap-pro';

export function DrawerFooterDemo() {
  return (
    <>
      <button
        type='button'
        className='btn-solid theme-primary'
        data-bs-toggle='drawer'
        data-bs-target='#drawer-footer'
      >
        Open drawer with footer
      </button>
      <Drawer id='drawer-footer' placement='start' aria-labelledby='drawer-footer-title'>
        <DrawerHeader>
          <DrawerTitle id='drawer-footer-title'>Drawer with footer</DrawerTitle>
          <CloseButton data-bs-dismiss='drawer' aria-label='Close' />
        </DrawerHeader>
        <DrawerBody>
          <p>Content for the drawer goes here. The footer stays at the bottom of the panel.</p>
        </DrawerBody>
        <DrawerFooter>
          <button type='button' className='btn-solid theme-secondary' data-bs-dismiss='drawer'>
            Close
          </button>
          <button type='button' className='btn-solid theme-primary'>
            Save changes
          </button>
        </DrawerFooter>
      </Drawer>
    </>
  );
}

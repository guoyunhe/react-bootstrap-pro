import { CloseButton, Drawer, DrawerBody, DrawerHeader, DrawerTitle } from 'react-bootstrap-pro';

export function DrawerResponsiveDemo() {
  return (
    <nav className='navbar'>
      <button
        className='btn-solid theme-primary lg:d-none'
        type='button'
        data-bs-toggle='drawer'
        data-bs-target='#drawer-responsive'
        aria-controls='drawer-responsive'
      >
        Toggle drawer
      </button>
      <div className='alert theme-info d-none lg:d-block mb-3'>
        Resize the browser to show the drawer toggle.
      </div>
      <Drawer
        id='drawer-responsive'
        className='lg:drawer'
        placement='end'
        aria-labelledby='drawer-responsive-title'
      >
        <DrawerHeader>
          <DrawerTitle id='drawer-responsive-title'>Responsive drawer</DrawerTitle>
          <CloseButton data-bs-dismiss='drawer' aria-label='Close' />
        </DrawerHeader>
        <DrawerBody>
          <p>This drawer collapses into regular inline content at the lg breakpoint.</p>
        </DrawerBody>
      </Drawer>
    </nav>
  );
}

import {
  CloseButton,
  Drawer,
  DrawerBody,
  DrawerHeader,
  DrawerTitle,
  Menu,
  MenuItem,
} from 'react-bootstrap-pro';

export function DrawerLiveDemo() {
  return (
    <>
      <div className='d-flex flex-wrap gap-2'>
        <a
          className='btn-solid theme-primary'
          data-bs-toggle='drawer'
          href='#drawer-live'
          role='button'
          aria-controls='drawer-live'
        >
          Link with href
        </a>
        <button
          className='btn-solid theme-primary'
          type='button'
          data-bs-toggle='drawer'
          data-bs-target='#drawer-live'
          aria-controls='drawer-live'
        >
          Button with data-bs-target
        </button>
      </div>
      <Drawer id='drawer-live' placement='start' aria-labelledby='drawer-live-title'>
        <DrawerHeader>
          <DrawerTitle id='drawer-live-title'>Drawer</DrawerTitle>
          <CloseButton data-bs-dismiss='drawer' aria-label='Close' />
        </DrawerHeader>
        <DrawerBody>
          <p>Place text, images, lists, and other selected content here.</p>
          <Menu
            trigger={
              <button className='btn-solid theme-secondary' type='button'>
                Menu
              </button>
            }
          >
            <MenuItem href='#drawer-live'>Action</MenuItem>
            <MenuItem href='#drawer-live'>Another action</MenuItem>
            <MenuItem href='#drawer-live'>Something else here</MenuItem>
          </Menu>
        </DrawerBody>
      </Drawer>
    </>
  );
}

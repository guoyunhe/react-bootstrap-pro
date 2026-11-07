import { useState } from 'react';
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
  const [show, setShow] = useState(false);
  return (
    <>
      <div className='d-flex flex-wrap gap-2'>
        <a
          className='btn-solid theme-primary'
          href='#drawer-live'
          onClick={(event) => {
            event.preventDefault();
            setShow(true);
          }}
          role='button'
          aria-controls='drawer-live'
          aria-expanded={show}
        >
          Link with href
        </a>
        <button
          className='btn-solid theme-primary'
          type='button'
          aria-controls='drawer-live'
          aria-expanded={show}
          onClick={() => setShow(true)}
        >
          Open drawer
        </button>
      </div>
      <Drawer
        show={show}
        onShowChange={setShow}
        id='drawer-live'
        placement='start'
        aria-labelledby='drawer-live-title'
      >
        <DrawerHeader>
          <DrawerTitle id='drawer-live-title'>Drawer</DrawerTitle>
          <CloseButton onClick={() => setShow(false)} aria-label='Close' />
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

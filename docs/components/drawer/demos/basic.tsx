import { CloseButton, Drawer, DrawerBody, DrawerHeader, DrawerTitle } from 'react-bootstrap-pro';

export function DrawerComponentsDemo() {
  return (
    <Drawer open placement='start' id='drawer-components' aria-labelledby='drawer-components-title'>
      <DrawerHeader>
        <DrawerTitle id='drawer-components-title'>Drawer</DrawerTitle>
        <CloseButton data-bs-dismiss='drawer' aria-label='Close' />
      </DrawerHeader>
      <DrawerBody>
        Content for the drawer goes here. Place text, images, lists, and other components here.
      </DrawerBody>
    </Drawer>
  );
}

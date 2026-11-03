import { Drawer, DrawerHeader, DrawerTitle, DrawerBody, DrawerFooter } from 'react-bootstrap-pro';

export function DrawerBasicDemo() {
  return (
    <Drawer open placement='end'>
      <DrawerHeader>
        <DrawerTitle>Navigation</DrawerTitle>
      </DrawerHeader>
      <DrawerBody>Drawer content</DrawerBody>
      <DrawerFooter>Footer</DrawerFooter>
    </Drawer>
  );
}

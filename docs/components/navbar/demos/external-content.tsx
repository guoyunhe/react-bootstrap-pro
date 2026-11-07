import { useId } from 'react';
import {
  CloseButton,
  Container,
  Drawer,
  DrawerBody,
  DrawerHeader,
  DrawerTitle,
  Navbar,
  NavbarToggler,
} from 'react-bootstrap-pro';

import { useDrawerCleanup } from '../use-drawer-cleanup';

export function NavbarExternalContentDemo() {
  const id = useId();
  const ref = useDrawerCleanup();
  return (
    <div ref={ref}>
      <Drawer id={id} placement='top' data-bs-theme='dark' aria-labelledby={`${id}-title`}>
        <DrawerHeader>
          <DrawerTitle id={`${id}-title`}>Collapsed content</DrawerTitle>
          <CloseButton data-bs-dismiss='drawer' />
        </DrawerHeader>
        <DrawerBody>Toggleable via the navbar toggler.</DrawerBody>
      </Drawer>
      <Navbar bg='body' data-bs-theme='dark'>
        <Container fluid>
          <NavbarToggler aria-controls={id} data-bs-toggle='drawer' data-bs-target={`#${id}`} />
        </Container>
      </Navbar>
    </div>
  );
}

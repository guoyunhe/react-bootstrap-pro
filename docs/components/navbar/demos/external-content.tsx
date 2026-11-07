import { useId, useState } from 'react';
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

export function NavbarExternalContentDemo() {
  const id = useId();
  const [show, setShow] = useState(false);
  return (
    <div>
      <Drawer
        show={show}
        onShowChange={setShow}
        id={id}
        placement='top'
        data-bs-theme='dark'
        aria-labelledby={`${id}-title`}
      >
        <DrawerHeader>
          <DrawerTitle id={`${id}-title`}>Collapsed content</DrawerTitle>
          <CloseButton onClick={() => setShow(false)} />
        </DrawerHeader>
        <DrawerBody>Toggleable via the navbar toggler.</DrawerBody>
      </Drawer>
      <Navbar bg='body' data-bs-theme='dark'>
        <Container fluid>
          <NavbarToggler aria-controls={id} aria-expanded={show} onClick={() => setShow(true)} />
        </Container>
      </Navbar>
    </div>
  );
}

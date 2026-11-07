import { useId, useState } from 'react';
import {
  CloseButton,
  Container,
  Drawer,
  DrawerBody,
  DrawerHeader,
  DrawerTitle,
  Navbar,
  NavbarBrand,
  NavbarNav,
  NavbarToggler,
  NavItem,
  NavLink,
} from 'react-bootstrap-pro';

export function NavbarTogglerRightDemo() {
  const id = useId();
  const [show, setShow] = useState(false);
  return (
    <div>
      <Navbar bg='1' fg='2'>
        <Container fluid>
          <NavbarBrand href='#'>Navbar</NavbarBrand>
          <NavbarToggler aria-controls={id} aria-expanded={show} onClick={() => setShow(true)} />
          <Drawer show={show} onShowChange={setShow} id={id} aria-labelledby={`${id}-title`}>
            <DrawerHeader>
              <DrawerTitle id={`${id}-title`}>Menu</DrawerTitle>
              <CloseButton onClick={() => setShow(false)} />
            </DrawerHeader>
            <DrawerBody>
              <NavbarNav>
                <NavItem>
                  <NavLink href='#' active>
                    Home
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink href='#'>Link</NavLink>
                </NavItem>
                <NavItem>
                  <NavLink disabled>Disabled</NavLink>
                </NavItem>
              </NavbarNav>
            </DrawerBody>
          </Drawer>
        </Container>
      </Navbar>
    </div>
  );
}

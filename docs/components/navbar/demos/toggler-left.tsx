import { useId } from 'react';
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

import { useDrawerCleanup } from '../use-drawer-cleanup';

export function NavbarTogglerLeftDemo() {
  const id = useId();
  const ref = useDrawerCleanup();
  return (
    <div ref={ref}>
      <Navbar bg='1' fg='2'>
        <Container fluid>
          <NavbarToggler aria-controls={id} data-bs-toggle='drawer' data-bs-target={`#${id}`} />
          <NavbarBrand href='#'>Navbar</NavbarBrand>
          <Drawer id={id} aria-labelledby={`${id}-title`}>
            <DrawerHeader>
              <DrawerTitle id={`${id}-title`}>Menu</DrawerTitle>
              <CloseButton data-bs-dismiss='drawer' />
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

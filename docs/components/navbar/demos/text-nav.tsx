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
  NavbarText,
  NavbarToggler,
  NavItem,
  NavLink,
} from 'react-bootstrap-pro';

import { useDrawerCleanup } from '../use-drawer-cleanup';

export function NavbarTextNavDemo() {
  const id = useId();
  const ref = useDrawerCleanup();
  return (
    <div ref={ref}>
      <Navbar expand='md' bg='1' fg='2' aria-label='Navigation with text'>
        <Container fluid>
          <NavbarBrand href='#'>Navbar w/ text</NavbarBrand>
          <NavbarToggler aria-controls={id} data-bs-toggle='drawer' data-bs-target={`#${id}`} />
          <Drawer id={id} aria-labelledby={`${id}-title`}>
            <DrawerHeader>
              <DrawerTitle id={`${id}-title`}>Menu</DrawerTitle>
              <CloseButton data-bs-dismiss='drawer' />
            </DrawerHeader>
            <DrawerBody>
              <NavbarNav me='auto'>
                <NavItem>
                  <NavLink href='#' active>
                    Home
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink href='#'>Features</NavLink>
                </NavItem>
                <NavItem>
                  <NavLink href='#'>Pricing</NavLink>
                </NavItem>
              </NavbarNav>
              <NavbarText>Navbar text with an inline element</NavbarText>
            </DrawerBody>
          </Drawer>
        </Container>
      </Navbar>
    </div>
  );
}

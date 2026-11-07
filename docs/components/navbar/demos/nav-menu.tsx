import { useId } from 'react';
import {
  CloseButton,
  Container,
  Drawer,
  DrawerBody,
  DrawerHeader,
  DrawerTitle,
  Menu,
  MenuItem,
  Navbar,
  NavbarBrand,
  NavbarNav,
  NavbarToggler,
  NavItem,
  NavLink,
} from 'react-bootstrap-pro';

import { useDrawerCleanup } from '../use-drawer-cleanup';

export function NavbarNavMenuDemo() {
  const id = useId();
  const ref = useDrawerCleanup();
  return (
    <div ref={ref}>
      <Navbar expand='lg' bg='1' fg='2' aria-label='Navigation with menu'>
        <Container fluid>
          <NavbarBrand href='#'>Navbar</NavbarBrand>
          <NavbarToggler aria-controls={id} data-bs-toggle='drawer' data-bs-target={`#${id}`} />
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
                  <NavLink href='#'>Features</NavLink>
                </NavItem>
                <NavItem>
                  <NavLink href='#'>Pricing</NavLink>
                </NavItem>
                <NavItem>
                  <Menu
                    trigger={
                      <NavLink component='button' type='button'>
                        Menu link
                      </NavLink>
                    }
                  >
                    <MenuItem href='#'>Action</MenuItem>
                    <MenuItem href='#'>Another action</MenuItem>
                    <MenuItem href='#'>Something else here</MenuItem>
                  </Menu>
                </NavItem>
              </NavbarNav>
            </DrawerBody>
          </Drawer>
        </Container>
      </Navbar>
    </div>
  );
}

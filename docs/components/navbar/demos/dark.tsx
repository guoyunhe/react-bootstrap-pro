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

export function NavbarDarkDemo() {
  const id = useId();
  const ref = useDrawerCleanup();
  return (
    <div ref={ref}>
      <Navbar expand='md' bg='1' data-bs-theme='dark' aria-label='Dark navigation'>
        <Container fluid>
          <NavbarBrand href='#'>Dark navbar</NavbarBrand>
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
                  <NavLink href='#'>Link</NavLink>
                </NavItem>
                <NavItem>
                  <Menu
                    trigger={
                      <NavLink component='button' type='button'>
                        Menu
                      </NavLink>
                    }
                  >
                    <MenuItem href='#'>Action</MenuItem>
                    <MenuItem href='#'>Another action</MenuItem>
                  </Menu>
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

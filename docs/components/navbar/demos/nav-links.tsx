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
  NavLink,
} from 'react-bootstrap-pro';

import { useDrawerCleanup } from '../use-drawer-cleanup';

export function NavbarNavLinksDemo() {
  const id = useId();
  const ref = useDrawerCleanup();
  return (
    <div ref={ref}>
      <Navbar expand='sm' bg='1' fg='2' aria-label='Direct links navigation'>
        <Container fluid>
          <NavbarBrand href='#'>Navbar</NavbarBrand>
          <NavbarToggler aria-controls={id} data-bs-toggle='drawer' data-bs-target={`#${id}`} />
          <Drawer id={id} aria-labelledby={`${id}-title`}>
            <DrawerHeader>
              <DrawerTitle id={`${id}-title`}>Menu</DrawerTitle>
              <CloseButton data-bs-dismiss='drawer' />
            </DrawerHeader>
            <DrawerBody>
              <NavbarNav component='div' className='nav-pills'>
                <NavLink href='#' active>
                  Home
                </NavLink>
                <NavLink href='#'>Features</NavLink>
                <NavLink href='#'>Pricing</NavLink>
                <NavLink disabled>Disabled</NavLink>
              </NavbarNav>
            </DrawerBody>
          </Drawer>
        </Container>
      </Navbar>
    </div>
  );
}

import {
  Navbar,
  NavbarBrand,
  NavbarToggler,
  Drawer,
  DrawerHeader,
  DrawerTitle,
  CloseButton,
  DrawerBody,
  NavbarNav,
  NavItem,
  NavLink,
} from 'react-bootstrap-pro';

export function NavbarBasicDemo() {
  return (
    <Navbar expand='md'>
      <NavbarBrand href='/'>Acme</NavbarBrand>
      <NavbarToggler
        aria-controls='primary-nav'
        data-bs-toggle='drawer'
        data-bs-target='#primary-nav'
      />
      <Drawer id='primary-nav' placement='end' aria-labelledby='primary-nav-title'>
        <DrawerHeader>
          <DrawerTitle id='primary-nav-title'>Navigation</DrawerTitle>
          <CloseButton data-bs-dismiss='drawer' />
        </DrawerHeader>
        <DrawerBody>
          <NavbarNav>
            <NavItem>
              <NavLink href='/' active aria-current='page'>
                Home
              </NavLink>
            </NavItem>
          </NavbarNav>
        </DrawerBody>
      </Drawer>
    </Navbar>
  );
}

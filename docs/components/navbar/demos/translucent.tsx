import { Container, Navbar, NavbarBrand, NavbarNav, NavItem, NavLink } from 'react-bootstrap-pro';

export function NavbarTranslucentDemo() {
  return (
    <Navbar className='navbar-translucent' expand='md' data-bs-theme='dark'>
      <Container fluid>
        <NavbarBrand href='#'>Navbar</NavbarBrand>
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
        </NavbarNav>
      </Container>
    </Navbar>
  );
}

import { Navbar, NavbarBrand, NavbarNav, NavItem, NavLink, NavOverflow } from 'react-bootstrap-pro';

export function NavOverflowNavbarDemo() {
  return (
    <div style={{ maxWidth: 450 }}>
      <Navbar expand bg='1' aria-label='Example navbar'>
        <NavbarBrand href='#'>Brand</NavbarBrand>
        <NavOverflow>
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
              <NavLink href='#'>About</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href='#'>Contact</NavLink>
            </NavItem>
          </NavbarNav>
        </NavOverflow>
      </Navbar>
    </div>
  );
}

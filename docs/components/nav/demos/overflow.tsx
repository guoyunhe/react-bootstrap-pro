import { Nav, NavItem, NavLink, NavOverflow } from 'react-bootstrap-pro';

export function NavOverflowDemo() {
  return (
    <>
      <NavOverflow style={{ maxWidth: 400 }}>
        <Nav variant='pills'>
          <NavItem>
            <NavLink href='#' active>
              Home
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink href='#'>Dashboard</NavLink>
          </NavItem>
          <NavItem>
            <NavLink href='#'>Products</NavLink>
          </NavItem>
          <NavItem>
            <NavLink href='#'>Services</NavLink>
          </NavItem>
          <NavItem>
            <NavLink href='#'>Reports</NavLink>
          </NavItem>
          <NavItem>
            <NavLink href='#'>Settings</NavLink>
          </NavItem>
        </Nav>
      </NavOverflow>
    </>
  );
}

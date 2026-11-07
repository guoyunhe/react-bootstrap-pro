import { Nav, NavItem, NavLink } from 'react-bootstrap-pro';

export function NavJustifiedDemo() {
  return (
    <Nav variant='pills' justified>
      <NavItem>
        <NavLink href='#' active>
          Active
        </NavLink>
      </NavItem>
      <NavItem>
        <NavLink href='#'>Much longer nav link</NavLink>
      </NavItem>
      <NavItem>
        <NavLink href='#'>Link</NavLink>
      </NavItem>
      <NavItem>
        <NavLink disabled>Disabled</NavLink>
      </NavItem>
    </Nav>
  );
}

import { Nav, NavItem, NavLink } from 'react-bootstrap-pro';

export function NavTabsDemo() {
  return (
    <Nav variant='tabs'>
      <NavItem>
        <NavLink href='#' active>
          Active
        </NavLink>
      </NavItem>
      <NavItem>
        <NavLink href='#'>Link</NavLink>
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

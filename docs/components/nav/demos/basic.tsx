import { Nav, NavItem, NavLink } from 'react-bootstrap-pro';

export function NavBasicDemo() {
  return (
    <Nav variant='pills'>
      <NavItem>
        <NavLink href='/home' active>
          Home
        </NavLink>
      </NavItem>
      <NavItem>
        <NavLink href='/profile'>Profile</NavLink>
      </NavItem>
    </Nav>
  );
}

import { NavOverflow, Nav, NavItem, NavLink } from 'react-bootstrap-pro';

export function NavOverflowBasicDemo() {
  return (
    <NavOverflow>
      <Nav>
        <NavItem>
          <NavLink href='/one'>One</NavLink>
        </NavItem>
        <NavItem>
          <NavLink href='/two'>Two</NavLink>
        </NavItem>
      </Nav>
    </NavOverflow>
  );
}

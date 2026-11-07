import { Nav, NavLink } from 'react-bootstrap-pro';

export function NavElementDemo() {
  return (
    <Nav component='nav' aria-label='Example navigation'>
      <NavLink href='#' active>
        Active
      </NavLink>
      <NavLink href='#'>Link</NavLink>
      <NavLink href='#'>Link</NavLink>
      <NavLink disabled>Disabled</NavLink>
    </Nav>
  );
}

import { Nav, NavLink } from 'react-bootstrap-pro';

export function NavJustifiedElementDemo() {
  return (
    <Nav component='nav' aria-label='Justified navigation' variant='pills' justified>
      <NavLink href='#' active>
        Active
      </NavLink>
      <NavLink href='#'>Much longer nav link</NavLink>
      <NavLink href='#'>Link</NavLink>
      <NavLink disabled>Disabled</NavLink>
    </Nav>
  );
}

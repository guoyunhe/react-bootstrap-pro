import { Nav, NavLink } from 'react-bootstrap-pro';

export function NavFillElementDemo() {
  return (
    <Nav component='nav' aria-label='Fill navigation' variant='pills' fill>
      <NavLink href='#' active>
        Active
      </NavLink>
      <NavLink href='#'>Much longer nav link</NavLink>
      <NavLink href='#'>Link</NavLink>
      <NavLink disabled>Disabled</NavLink>
    </Nav>
  );
}

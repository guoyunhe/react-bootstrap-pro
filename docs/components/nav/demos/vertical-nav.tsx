import { Nav, NavLink } from 'react-bootstrap-pro';

export function NavVerticalElementDemo() {
  return (
    <Nav component='nav' aria-label='Vertical navigation' flexDirection='column'>
      <NavLink href='#' active>
        Active
      </NavLink>
      <NavLink href='#'>Link</NavLink>
      <NavLink href='#'>Link</NavLink>
      <NavLink disabled>Disabled</NavLink>
    </Nav>
  );
}

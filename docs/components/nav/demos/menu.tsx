import { Menu, MenuItem, Nav, NavLink } from 'react-bootstrap-pro';

export function NavMenuDemo() {
  return (
    <Nav component='nav' aria-label='Navigation with menu'>
      <NavLink href='#' active>
        Active
      </NavLink>
      <NavLink href='#'>Link</NavLink>
      <Menu
        trigger={
          <NavLink component='button' type='button'>
            Menu
          </NavLink>
        }
      >
        <MenuItem href='#'>Action</MenuItem>
        <MenuItem href='#'>Another action</MenuItem>
        <MenuItem href='#'>Something else</MenuItem>
      </Menu>
      <NavLink disabled>Disabled</NavLink>
    </Nav>
  );
}

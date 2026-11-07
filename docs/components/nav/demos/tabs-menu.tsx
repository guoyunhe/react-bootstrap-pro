import { Menu, MenuItem, Nav, NavItem, NavLink } from 'react-bootstrap-pro';

export function NavTabsMenuDemo() {
  return (
    <Nav variant='tabs'>
      <NavItem>
        <NavLink href='#' active>
          Active
        </NavLink>
      </NavItem>
      <NavItem>
        <Menu
          trigger={
            <NavLink component='button' type='button'>
              Menu
            </NavLink>
          }
        >
          <MenuItem href='#'>Action</MenuItem>
          <MenuItem href='#'>Another action</MenuItem>
        </Menu>
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

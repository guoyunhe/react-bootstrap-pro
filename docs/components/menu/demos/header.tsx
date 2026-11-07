import { Menu, MenuHeader, MenuItem } from 'react-bootstrap-pro';

export function MenuHeaderDemo() {
  return (
    <Menu show position='static'>
      <MenuItem href='#'>Action</MenuItem>
      <MenuItem href='#'>Action</MenuItem>
      <MenuHeader>Menu header</MenuHeader>
      <MenuItem href='#'>Another action</MenuItem>
    </Menu>
  );
}

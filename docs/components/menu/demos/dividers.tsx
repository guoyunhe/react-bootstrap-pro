import { Menu, MenuDivider, MenuItem } from 'react-bootstrap-pro';

export function MenuDividersDemo() {
  return (
    <Menu show position='static'>
      <MenuItem href='#'>Action</MenuItem>
      <MenuItem href='#'>Another action</MenuItem>
      <MenuItem href='#'>Something else here</MenuItem>
      <MenuDivider />
      <MenuItem href='#'>Separated link</MenuItem>
    </Menu>
  );
}

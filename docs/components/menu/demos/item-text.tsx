import { Menu, MenuItem, MenuText } from 'react-bootstrap-pro';

export function MenuItemTextDemo() {
  return (
    <Menu show position='static'>
      <MenuText>Menu item text</MenuText>
      <MenuItem href='#'>Action</MenuItem>
      <MenuItem href='#'>Another action</MenuItem>
      <MenuItem href='#'>Something else here</MenuItem>
    </Menu>
  );
}
